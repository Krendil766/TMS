import React, { Component } from 'react';


export default class Task16 extends Component {
    state = {
        currentPage: 'home'
    }
    renderPage = () => {
        switch (this.state.currentPage) {
            case 'home':
                return <Home />
            case 'about':
                return <About />
            case 'contacts':
                return <Contacts />
        }
    }
    goToRoute = (newxtRoute) => {
        this.setState({ currentPage: newxtRoute })
    }
    render() {
        const { currentPage } = this.state;
        return (
            <div><button onClick={() => { this.goToRoute('home') }}>Home</button>
                <button onClick={() => { this.goToRoute('about') }}>About</button>
                <button onClick={() => this.goToRoute('contacts')}>Contacts</button>
                {this.renderPage()}
            </div>
        )
    }
}

const Home = () => {
    return <h3>Home</h3>
}
const About = () => {
    return <h3>About</h3>
}
const Contacts = () => {
    return <h3>Constact</h3>
}