import React, {Component} from 'react';
import './style.css';

class Task6 extends Component {
    state = {
        italic: true,
    }
    changeFonts = () => {
        this.setState({ italic: !this.state.italic })
    }
    render() {
        return (
            <div className={this.state.italic && 'cange-fonts-italic'} onClick={this.changeFonts}>{this.props.value}</div>
        )
    }
}
export default Task6;