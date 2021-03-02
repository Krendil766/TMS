import React, { Component } from 'react';
import './style.css'
import data from './names.json'

class Task13 extends Component {
    state = {
        people: ['Aleh', 'Tatsiana', 'Serhei', "Lena"]
    }
    onAddItem = () => {
        this.setState(({ people }) => {
            const idx = Math.floor(Math.random() * 13); 
            const newItem = data[idx]
            return {
                people: [...people,newItem]
            }
        })
    }
    render() {
        const { people } = this.state;
        const items = people.map(item => {
            return <li key={item + (+new Date()).toString(32)}>{item}</li>
        })
        return (
            <div>
                <div className='list-13'>
                    <ul className='ul-13'>{items}</ul>
                </div>
                <button onClick = {this.onAddItem}>Add Name</button>
            </div>
        )
    }
}

export default Task13