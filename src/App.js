//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import data from './data.json'
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';
import Task7 from './components/Task7';
import Task8 from './components/Task8';



function App() {
  return (
    //<React.Fragment> <>
    <div className="App">
      
      <div>Задание на уроке</div>

      <div className='space'></div>
      <Task1 />
      <div className='space'></div>
      <Task2 color="red" size={16} text="Hello1" textDec />
      <Task2 color="green" size={36} text="Hello2" textDec={false}  />
      <Task2 color="blue" size={12} text="Hello1" textDec  />
      <div className='space'></div>
      <Task3/>

      <div>Домащнее задание</div>

      <div className='space'></div>
      <Task4 />
      <div className='space'></div>
      <Task5  />
      <div className='space'></div>
      <Task6 value="Как установить курсивное начертание в зависимости от текущего стейта: просто создаем css-класс в котором будет одна строчка, отвечающая за установку  курсива: font-style: italic" />
      <div className='space'></div>
      <Task7 value="Sign In" users="Hello Aleh" arr={data} />
      <Task8 arr={data} />
    </div>
    //</React.Fragment>  </>
  );
}

export default App;
