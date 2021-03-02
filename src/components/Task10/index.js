import React, { Component } from "react";
import "./style.css";

class Task10 extends Component {
  state = {
    arr: ["HTML", "CSS", "JS", "React", "Redux", "Webpack"],
    nameHead: false,
    count: 0,
  };
  onChangeHead = () => {
    this.setState(({ nameHead }) => {
      return {
        nameHead: !nameHead,
      };
    });
  };
  onPlus = (x) => {
    this.setState(({ count }) => {
      return {
        count: count + x,
      };
    });
  };
  onMinus = (x) => {
    this.setState(({ count }) => {
      if (count > 0) {
        return {
          count: count - x,
        };
      }
    });
  };
  onAddItem = (item) => {
    this.setState({arr:[...this.state.arr,item ]})
};
  render() {
    const { arr, nameHead, count } = this.state;
    const { location } = this.props;
    const items = arr.map((item) => {
      return (
        <li key={item + (+new Date()).toString(32)}>
          {item}
          <span>{count}</span>
          <TaskButton onMinus={this.onMinus} onPlus={this.onPlus} />
        </li>
      );
    });
    if (location == 'top') {
      return (
        <div className='container'>
          <button className = "btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
          <div
            className={location=='top'?'list top':'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
        </div>
      );
    } else if (location == 'button') {
      return (
        <div className='container'>
          <div
            className={location=='top'?'list top':'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
          <button className = "btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
        </div>
      );
    } else if (location == 'right') {
      return (
        <div className='container-right'>
          <button className = "btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
          <div
            className={location=='top'?'list top':'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-right'>
          <div
            className={location=='top'?'list top':'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
          <button className = "btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
        </div>
      );
    }
  }
}
class TaskButton extends Component {
  state = {
    value: 0,
  };
  onPlus = () => {
    this.setState(({ value }) => {
      return {
        value: value + 1,
      };
    });
    this.props.onPlus(1);
  };
  onMinus = () => {
    this.setState(({ value }) => {
        return {
          value: value - 1,
        };
    });
    this.props.onMinus(1);
  };
  render() {
    return (
      <div>
        <button onClick={this.onMinus}>-</button>
        <button onClick={this.onPlus}>+</button>
      </div>
    );
  }
}
class TaskAddItem extends Component {
    state = {
        item:''
    }
    onItemChange = (e)=>{
        const item = e.target.value;
        this.setState({item})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onAddItem(this.state.item);
        this.setState({item:''})

 
    }
  render() {
    return (
      <form className="form" onSubmit = {this.onSubmit}>
        <input type="text" placeholder="Added text" onChange={this.onItemChange} value = {this.state.item} />
        <button >Add</button>
      </form>
    );
  }
}

export default Task10;
