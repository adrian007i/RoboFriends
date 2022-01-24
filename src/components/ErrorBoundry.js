import {Component} from 'react';

class ErrorBoundry extends Component{

    constructor(props){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError : true})
    }

    render(){
        if (this.state.hasError) {
            return <h1>Oooops! An error occured</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;