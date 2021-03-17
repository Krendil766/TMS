import Task12 from './Task12';
import Task13 from './Task13/';
import Task14 from './Task14/';
import Task15 from './Task15/';

import './0203.css'

export default function Day0203() {
    return (
        <div className = 'day-02-03'>
            <h1>02/03/21</h1>
            <Task12 />
            <div style = {{marginBottom:30+'px'}}></div>
            <Task13 />
            <div style = {{marginBottom:30+'px'}}></div>
            <Task14 />
            <div style = {{marginBottom:30+'px'}}></div>
            <Task15/>
        </div>
    )
}