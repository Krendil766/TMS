import React, { Component } from 'react';
import './style.css';

class Task7 extends Component {
    state = {
        isSignedIn: false,
    }
    signIn = () => {
        setTimeout(() => this.setState({ isSignedIn: true }),
            3000
        )
    }
    signOut = () => {
        this.setState({ isSignedIn: !this.state.isSignedIn })
    }
    render() {
        return (
            <button className={!this.state.isSignedIn ? 'login-check' : 'undefined'} onClick={!this.state.isSignedIn ? this.signIn : this.signOut}>{this.state.isSignedIn ? this.props.users : this.props.value}</button>
        )
    }
}
export default Task7;