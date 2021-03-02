import React, { Component } from 'react';


class Task12 extends Component{
    state = {
        number:0
    }
    onPlus = () => {
        this.setState(({ number }) => {
            return {
                number:number+1
            }
        })
    }
    onMinus = (num) => {
        this.setState(({ number }) => {
            return {
                number:number-1
            }
        })
    }
    render() {
        const { number } = this.state;
        return (
            <div>
                <Button label="-" onClick={this.onMinus}/>
                {number}
                <Button label="+" onClick={this.onPlus}/>
            </div>
        )
    }
}
class Button extends Component{
    render() {
        const { label, onClick } = this.props;
        return (
            <button onClick ={onClick}>{label}</button>
        )
    }
}

export default Task12