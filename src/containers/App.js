import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField , requestRobots} from '../actions'; 

// maps the search field to the properties of the component
const mapStateToProps = state => { 
    return { 
        searchField: state.searchRobots.searchField ,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
        robots: state.requestRobots.robots
    }
}

// allows us to use the onSearchChange function
const matchDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

function App(props) {

    const {searchField, onSearchChange, robots, onRequestRobots,isPending} = props;

    useEffect(() => {
        onRequestRobots()
    }, []); // only runs if state in array changes
 
    
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
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

