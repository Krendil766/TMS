import React, { Component } from 'react';


const data = [{
    name: 'Aleh',
    id: 1,
},
{
    name: 'Tatsina',
    id: 2,
},
{
    name: 'Pavel',
    id: 3,
}];

export default class Task15 extends Component {
    state = {
        todoItems: data,
        newItem: '',
    }
    onChange = (e) => {
        this.setState({ newItem: e.target.value })

    }
    onSubmit = (e) => {
        e.preventDefault();
        const obj = { name: this.state.newItem, id: this.state.todoItems.length + 1 }
        this.setState(({ todoItems }) => {
            return {
                todoItems: [...todoItems, obj]
            }
        })
        this.setState({ newItem: '' })
    }
    render() {
        const { todoItems} = this.state;
        const items = todoItems.map(item => <li key={item.id}>{item.name}</li>)
        return (
            <div>
                <ul style={{ listStyleType: 'none' }}>
                    {items}
                </ul>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Add name" onChange={this.onChange} value={this.state.newItem} />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
