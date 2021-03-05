import React, { Component } from 'react';

class Task4 extends Component {
    state = {
        newIndex: 0,
        value: ['🔁', '🔄', '🔂']
    }
    setting = () => {
        this.setState({ newIndex: this.countIndex() })
    }
    countIndex() {
        if (this.state.newIndex==2) {
            return this.state.newIndex=0
        } else {
            return this.state.newIndex + 1;
        }
    }
    render() {
        return (
            <div style={{ fontSize: 50 + 'px' }} onClick={this.setting}>{this.state.value[this.state.newIndex]}</div>
        )
    }
}

export default Task4;