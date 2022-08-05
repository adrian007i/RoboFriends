// import { robots } from './robots.js';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';

const mapStateToProps = state => { 
    return { searchField: state.searchField }
}

const matchDispatchToProps = dispatch => {
    return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) }
}

function App(props) {


    const [robots, setRobots] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => setRobots(users));
    }, []); // only runs if state in array changes
 
    const {searchField, onSearchChange} = props;
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots === 0) {
        return <h1>Loading ...</h1>
    } else {

        

        return (
            <div className="p2 tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <ScrollBar>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </ScrollBar>
            </div>
        );
    }
}



export default connect(mapStateToProps, matchDispatchToProps)(App);

