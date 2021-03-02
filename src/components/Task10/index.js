import React, { Component } from 'react';
import './style.css'

class Task10 extends Component {

    state = {
        hide: false,
        value:[]
    }
    onClickHide = () => {
        this.setState(({ hide }) => {
            return {
                hide: !hide
            }
        })
    }

    onAddValue = () => {
        const input = document.querySelector('#input');
        this.setState(({value}) => {
            return {
                value: [...input.value]
            }
        })
        
    }

    render() {
        const { hide, value } = this.state;
        const { onAdd, onMinus } = this.props;
        console.log(value);
        
        return (
            <div className='list'>
                <div>
                    <button onClick={this.onClickHide}>{hide ? 'Ingridient' : 'Close'}</button>
                </div>
                <div>
                <input id = 'input' type="text" placeholder="Added Text" />
                <button onClick = {this.onAddValue}>Add</button>
                </div>
                <div style={hide ? { display: "none" } : { display: 'block' }}>
                    <ul style={{ listStyleType: 'none' }}>
                        <Items onAdd={onAdd} onMinus={onMinus} onAddValue={ this.onAddValue}/>
                    </ul>
                    <span>{value}</span>
                </div>
            </div>
        )
    }
}
class Items extends Component {
    state = {
        arr:['JS', "React", "TypeScript", "Webpack", 'CSS']
    }
    modifArr = () => {
        this.setState(({ arr }) => {
            const newArr = [arr, ...this.props.onAddValue];
            return {
                arr:newArr
            }
        })
    }

    render() {
        const { arr } = this.state;
        const { onAdd, onMinus} = this.props;
        this.modifArr();
        return (
            arr.map(item => {
                return <li> {item}  <Count onAdd={onAdd} onMinus={onMinus} /> </li>
            })
        )
    }
}

class StateTarnsfer extends Component {
    state = {
        value: 0
    }
    onAdd = (x) => {
        this.setState(({ value }) => {
            return {
                value: value + x
            }
        })
    }
    onMinus = (x) => {
        this.setState(({ value }) => {
            return {
                value: value - x
            }
        })
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <span>{value}</span>
                <Task10 onAdd={this.onAdd} onMinus={this.onMinus} />
            </div>
        )
    }
}

class Count extends Component {
    state = {
        value: 0
    }
    onPlus = () => {
        this.setState(({ value }) => {
            return {
                value: value + 1
            }
        })
        this.props.onAdd(1)
    }
    onMinus = () => {
        if (this.state.value > 0) {
            this.setState(({ value }) => {
                return {
                    value: value - 1
                }
            })
            this.props.onMinus(1)
        }
    }
    render() {
        const { value } = this.state

        return (
            <span>
                <button onClick={this.onMinus}>-</button>
                <span>{value}</span>
                <button onClick={this.onPlus}>+</button>
            </span>

        )
    }
}

export default StateTarnsfer;