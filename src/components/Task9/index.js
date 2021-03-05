import React, { Component } from 'react';
import './style.css'

class Task9 extends Component {
    state = {
        done: true
    }
    change = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }
    render() {
        const { done } = this.state;
        const loaded = <div class="preloader">
            <div class="preloader__row">
                <div class="preloader__item"></div>
                <div class="preloader__item"></div>
            </div>
        </div>
        return (
            <div>
                <button onClick={this.change}>{ done ? "LOAD" : loaded }</button>
            </div>
        )
    }
}

export default Task9;