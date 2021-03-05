import React, { Component } from "react";
import "./style.css";

class Task10 extends Component {
  idx = 0;
  state = {
    arr: [
      { skill: "HTML", value: 0, id: 1 },
      { skill: "CSS", value: 0, id: 2 },
      { skill: "JS", value: 0, id: 3 },
      { skill: "React", value: 0, id: 4 },
      { skill: "Redux", value: 0, id: 5 },
      { skill: "Webpack", value: 0, id: 6 }
    ],
    nameHead: false,
    count: 0,
  };
  onCurrntValue = (newValue) => {
    this.setState(({ arr}) => {
      return arr.filter(item => {
         if (item.id == this.idx) {
           item.value=newValue
         }
       })
     })
  }
  onChangeHead = () => {
    this.setState(({ nameHead }) => {
      return {
        nameHead: !nameHead,
      };
    });
  };
  onPlus = (x, newValue) => {
    this.setState(({ count}) => {
      return {
        count: count + x,
      };
    });
   this.onCurrntValue(newValue+x)
  };
  onMinus = (x, newValue) => {  
    this.setState(({ count, }) => {
      if (count > 0) {
        return {
          count: count - x,
        };
      }
    });
    this.onCurrntValue(newValue-x)
  };

  onAddItem = (item) => {
    const newItem = { skill: item, value: 0, id: this.state.arr.length + 1 }
    this.setState({ arr: [...this.state.arr, newItem] })
  };
  
  clickCurrent = (id) => {
    this.idx = id;
  }
  render() {
    const { arr, nameHead, count, value } = this.state;
    const { location } = this.props;
    const items = arr.map((item) => {
      return (
        <li key={item.id}>
          {item.skill}
          <span>{item.value}</span>
          <TaskButton onMinus={this.onMinus} onPlus={this.onPlus} clickCurrent={() => this.clickCurrent(item.id)} />
        </li>
      );
    });
    if (location == 'top') {
      return (
        <div className='container'>
          <button className="btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
          <div
            className={location == 'top' ? 'list top' : 'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <span>{count}</span>
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
        </div>
      );
    } else if (location == 'button') {
      return (
        <div className='container'>
          <div
            className={location == 'top' ? 'list top' : 'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <span>{count}</span>
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
          <button className="btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
        </div>
      );
    } else if (location == 'right') {
      return (
        <div className='container-right'>
          <button className="btn" onClick={this.onChangeHead}>
            {nameHead ? "Expand" : "Hide"}
          </button>
          <div
            className={location == 'top' ? 'list top' : 'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <span>{count}</span>
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-right'>
          <div
            className={location == 'top' ? 'list top' : 'list'}
            style={nameHead ? { display: "none" } : { display: "block" }}
          >
            <ul className="ul">
              {items}
              <span>{count}</span>
              <TaskAddItem onAddItem={this.onAddItem} />
            </ul>
          </div>
          <button className="btn" onClick={this.onChangeHead}>
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
    this.props.onPlus(1, this.state.value);
    console.log(this.state.value);
    

  };
  onMinus = () => {
    this.setState(({ value }) => {
      return {
        value: value - 1,
      };
    });
    this.props.onMinus(1, this.state.value);
    console.log(this.state.value);

  };

  render() {
    return (

      <div onClick = {()=>this.props.clickCurrent()}>
        <button onClick={this.onMinus}>-</button>
        <button onClick={this.onPlus}>+</button>
      </div>
    );
  }
}
class TaskAddItem extends Component {
  state = {
    item: ''
  }
  onItemChange = (e) => {
    const item = e.target.value;
    this.setState({ item })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.item);
    this.setState({ item: '' })


  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Added text" onChange={this.onItemChange} value={this.state.item} />
        <button >Add</button>
      </form>
    );
  }
}

export default Task10;
