import Task8 from './Task8';
import Task9 from './Task9/';
import Task10 from './Task10/';
import Task11 from './Task11/';

import data from '../../data.json';
import './2502.css'

export default function Day2502() {
    return (
        <div className = 'day-25-03'>
            <h1>25/02/21</h1>
            <Task8 arr={data} />
            <div style = {{marginBottom:30+'px'}}></div>
            <Task9 />
            <div style = {{marginBottom:30+'px'}}></div>
            <Task10 location='button'/>
            <div style = {{marginBottom:30+'px'}}></div>
            <Task11 loaded={false} /> 
        </div>
    )
}