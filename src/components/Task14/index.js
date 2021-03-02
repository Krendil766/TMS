import React, { Component } from 'react';
import './style.css';

class Task14 extends Component {
    state = {
        animation:'false'
    }
    onChangeButton = () => {
        this.setState(({ animation }) => {
            return {
                animation:!animation
            }
        })
    }
    render() {
        const { animation } = this.state;
        return (
            <div>
                <div className={animation?'loader':'loader  loader-animated'}>
                </div>
                <button onClick = {this.onChangeButton}>{animation?'Play':"Stop"}</button>
            </div>
        )
    }
}

export default Task14;