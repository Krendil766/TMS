import React, { Component } from 'react';
import './style.css'


const Task11 = ({ loaded }) => {
    if (!loaded) {
      return  <div >
            <button>Load</button>
        </div>
    } else {
        return <div>
            <div class="preloader">
            <div class="preloader__row">
                <div class="preloader__item"></div>
                <div class="preloader__item"></div>
            </div>
        </div>
        </div>
    }
}

export default Task11;