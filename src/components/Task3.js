import React, { Component } from 'react';

class Task3 extends Component {
    state = {
        value: "✔"
    }
    change = () => {
        this.setState({ value: !this.state.value })
    }
    render() {
        return (<div className="task2" onClick={this.change}>{this.state.value ? '✔' : '✖'}</div>)
    }
}
export default Task3;