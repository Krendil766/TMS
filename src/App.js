//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import data from './data.json'
// import Task1 from './components/Task1';
// import Task2 from './components/Task2';
// import Task3 from './components/Task3';
//import Task4 from './components/Task4';
// import Task5 from './components/Task5';
// import Task6 from './components/Task6';
// import Task7 from './components/Task7';
// import Task8 from './components/Task8';
// import Task9 from './components/Task9';
import Task10 from './components/Task10';
// import Task11 from './components/Task11';
// import Task12 from './components/Task12';
import Task13 from './components/Task13';
// import Task14 from './components/Task14';
// import Task15 from './components/Task15';
import Task16 from './components/Task16';
import Task17 from './components/Task17';



function App() {
  return (
    //<React.Fragment> <>
    <div className="App">
      
      {/* <div>Задание на уроке</div>

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
      <Task8 arr={data} /> */}
      {/* <h2>Задание на уроке</h2> */}
      {/* <h4>Задание 9 </h4> */}
      {/* <Task9 /> */}
      {/* <h4>Задание 10 </h4> */}
      <Task10 location='button'/>
      {/* <h4>Задание 11 </h4> */}
      {/* <Task11 loaded={false} />  */}
      {/* <h2>Задание на дома</h2> */}
      {/* <h4>Задание 12 </h4> */}
      {/* <Task12 /> */}
      {/* <h4>Задание 13 </h4> */}
      <Task13 />
      {/* <h4>Задание 14 </h4> */}
      {/* <Task14 /> */}
      {/* <h2>Задание на уроке</h2> */}
      {/* <Task15/>  */}
      {/* <Task16 /> */}
      {/* <Task17/> */}
    </div>
    //</React.Fragment>  </>
  );
}

export default App;
