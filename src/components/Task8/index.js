import './style.css'

const Task8 = (props) => {
    const arr = props.arr;
    const listItems = arr.map(item =>
        < li key={item._id.toString()} className='arr-name' ><h3>{item.name.first}</h3><h4>{item.name.last}</h4></ li>
    )
    return (
        <div><ul>{listItems}</ul></div>
    )
}
export default Task8;