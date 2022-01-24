// import { robots } from './robots.js';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBar from '../components/ScrollBar';
import ErrorBoundry from '../components/ErrorBoundry';
import { Component } from 'react';


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // executes after the render page
    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response =>  response.json())
            .then(users => this.setState({ robots: users }));

    }

    onSearch = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {

        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots === 0){
            return <h1>Loading ...</h1>
        }else{
            return (
                <div className="p2 tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearch} />
                    <ScrollBar>
                        <ErrorBoundry>
                            <CardList robots={filterRobots} />
                        </ErrorBoundry>
                    </ScrollBar>
                </div>
            );
        }

        
    }
}

export default App;

