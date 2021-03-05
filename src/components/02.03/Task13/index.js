import React, { Component } from 'react';
import './style.css'
import data from './names.json'

class Task13 extends Component {
    state = {
        people: [{name:'Aleh', id:1}, {name:'Tatsiana',id:2}, {name:'Serhei', id:3}, {name:"Lena",id:4}]
    }
    onAddItem = () => {
        this.setState(({ people }) => {
            const idx = Math.floor(Math.random() * 13); 
            const newItem = data[idx]
            return {
                people: [...people,{name:newItem, id:this.state.people.length+1}]
            }
        })
    }
    render() {
        const { people } = this.state;
        const items = people.map(item => {
            return <li key={item.id}>{item.name}</li>
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