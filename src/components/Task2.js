import React from 'react';

const Task2 = ({ color, size, text, textDec }) => {
    return <div style={{ color: color, fontSize: size + 'px', textDecoration: textDec ? 'underline' : 'none' }}>{text}</div>
}
export default Task2;

// const Header1 = ({
//     color = 'black',
//     size = 14,
//     text,
//     underline
//   }) => {
//     const style = {
//       color,
//       fontSize: size + 'px',
//       textDecoration: underline ? 'underline' : 'none'
//     }
//     return <div style={style}>{text}</div>
//   }