import React, { Component } from 'react';

class ArrowFunction extends Component {
    state = { value: 0 };

    handleClick = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
    };

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Click Me</button>
                <div>{this.state.value}</div>
            </>
        );
    }
}

export default ArrowFunction;