import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5/';
import Task6 from './Task6/';
import Task7 from './Task7/';

import data from "../../data.json"
import './1902.css'

export default function Day1902() {
    return (
        <div className='day-02-03'>
            <h1>19/02/21</h1>
            <Task1 />
            <div style={{ marginBottom: 30 + 'px' }}></div>
            <Task2 color="red" size={16} text="Hello1" textDec />
            <Task2 color="green" size={36} text="Hello2" textDec={false} />
            <Task2 color="blue" size={12} text="Hello1" textDec />
            <div style={{ marginBottom: 30 + 'px' }}></div>
            <Task3 />
            <div style={{ marginBottom: 30 + 'px' }}></div>
            <Task4 />
            <div style={{ marginBottom: 30 + 'px' }}></div>
            <Task5 />
            <div style={{ marginBottom: 30 + 'px' }}></div>
            <Task6 value="Как установить курсивное начертание в зависимости от текущего стейта: просто создаем css-класс в котором будет одна строчка, отвечающая за установку  курсива: font-style: italic" />
            <div style={{ marginBottom: 30 + 'px' }}></div>
            <Task7 value="Sign In" users="Hello Aleh" arr={data} />
        </div>
    )
}