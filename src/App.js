//import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './data.json'

// class Comp2 extends React.Component{
//     state = {
//         number:this.props.default
//     }
//     plus = () => {
//         this.setState({number:this.state.number+1})
//     }
//     minus = ()=> {
//         this.setState({number:this.state.number-1})
//     }
//     render() {
//         return (<div>
//             <button onClick={this.minus}>-</button>
//             {this.state.number}
//             <button onClick={this.plus}>+</button>
//             </div>
//         )
//     }
//}


// const Component = ({ number, name }) => {
//     return <div style={{border:`${number}px solid black `}}>{ name}</div>
// }



const Task1 = ({ color, size, text, textDec }) => {
  return <div style={{ color: color, fontSize: size + 'px', textDecoration: textDec ? 'underline' : 'none' }}>{text}</div>
}

const Header1 = ({
  color = 'black',
  size = 14,
  text,
  underline
}) => {
  const style = {
    color,
    fontSize: size + 'px',
    textDecoration: underline ? 'underline' : 'none'
  }
  return <div style={style}>{text}</div>
}
class Task2 extends React.Component {
  state = {
    value: "✔"
  }
  change = () => {
    this.setState({ value: !this.state.value })
  }
  render() {
    return (<div className="task2" onClick={this.change}>{this.state.value ? '✔' : '✖'}</div>)

  }
}
class Task3 extends React.Component {
  state = {
    newIndex: 0,
    value: ['🔁', '🔄', '🔂']
  }
  setting = () => {
    this.setState({ newIndex: this.countIndex() })
  }
  countIndex() {
    if (this.state.newIndex > this.state.value.length - 1) {
      return 1;
    } else {
      return this.state.newIndex + 1;
    }
  }
  render() {
    return (
      <div style={{ fontSize: 50 + 'px' }} onClick={this.setting}>{this.state.value[this.state.newIndex] || this.state.value[0]}</div>
    )
  }
}
class Task4 extends React.Component {
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
class Square extends React.Component {
  render() {
    return (
      <div className={this.props.cssClass}>{this.props.label}</div>
    )
  }
}

class Task5 extends React.Component {
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

class Task6 extends React.Component {
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


const Task7 = (props) => {
  const arr = props.arr;
  const listItems = arr.map(item =>
    < li key={item._id.toString()} className='arr-name' ><h3>{item.name.first}</h3><h4>{item.name.last}</h4></ li>
  )
  return (
    <div><ul>{listItems}</ul></div>
  )
}

function App() {
  return (
    <div className="App">
      <div>Задание на уроке</div>

      <div className='space'></div>

      <Task1 color="red" size={16} text="Hello1" textDec />
      <Task1 color="blue" size={20} text="Hello2" textDec={false} />
      <Task1 color="blue" size={30} text="Hello3" textDec />
      <Task1 color="blue" size={40} text="Hello4" textDec={false} />
      <Header1 color="green" size={50} text='Hello minsk' underline />

      <div className='space'></div>

      <Task2 />

      <div className='space'></div>

      <Task3 value='' />

      <div>Домащнее задание</div>

      <div className='space'></div>

      <Task4 />

      <div className='space'></div>

      <Task5 value="Как установить курсивное начертание в зависимости от текущего стейта: просто создаем css-класс в котором будет одна строчка, отвечающая за установку  курсива: font-style: italic" />

      <div className='space'></div>

      <Task6 value="Sign In" users="Hello Aleh" />

      <div className='space'></div>

      <Task7 arr={data} />

    </div>
  );
}

export default App;
