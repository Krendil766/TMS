import React, { Component } from 'react';
import './style.css'

class Task5 extends Component {
    render() {
        return (
            <div className="App-one">
                <Square label="Big square" cssClass="sqare-big" />
                <Square label="A less square" cssClass="sqare-middle" />
                <Square label="The smallest one" cssClass="sqare-little" />
            </div>
        )
    }
}
class Square extends Component {
    render() {
      return (
        <div className={this.props.cssClass}>{this.props.label}</div>
      )
    }
  }
export default Task5;