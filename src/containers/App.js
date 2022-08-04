// import { robots } from './robots.js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ErrorBoundry from '../components/ErrorBoundry';
import { useState, useEffect } from 'react';
import {setSearchField} from '../actions';

function App(props) {
    

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        console.log(props);
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []); // only runs if state in array changes


    const onSearch =  (event)=> {
        setSearchField(event.target.value);
    }

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots === 0) {
        return <h1>Loading ...</h1>
    } else {
        return (
            <div className="p2 tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearch} />
                <ScrollBar>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </ScrollBar>
            </div>
        );
    }
}



export default App;

