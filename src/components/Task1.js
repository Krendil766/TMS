import React from 'react';

class Task1 extends React.Component {
    state = {
        number: 0
    }
    plus = () => {
        this.setState({ number: this.state.number + 1 })
    }
    minus = () => {
        this.setState({ number: this.state.number - 1 })
    }
    render() {
        return (<div>
            <button onClick={this.minus}>-</button>
            {this.state.number}
            <button onClick={this.plus}>+</button>
        </div>
        )
    }
}

export default Task1;