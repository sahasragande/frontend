import React,{Component} from 'react';

class BindFunction extends Component{
    constructor(props){
        super(props);
        this.state = {value : 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState((prevState) => ({
            value:prevState.value + 1
        }));
    }
    render(){
        return (
            <>
            <button onClick = {this.handleClick}>Click Me</button>
            <div>{this.state.value}</div>
            </>
        )
    }
}

export default BindFunction;