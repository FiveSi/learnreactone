import {FaTimes} from 'react-icons/fa' // icon fa library use <Fatimes / >
import { useState } from "react"
import Card from "./Card"
function FeebackItem(props) {
    console.log('feebackitem props', props)
    return (
        <Card>
            <div className="num-display">{props.item.rating}</div>
            <div className="text-display">{props.item.text}</div>
            <button className="close" onClick={()=>{props.handleDelete(props.item.id)}}><FaTimes color='red'/></button>
        </Card>
    )
    }
// this is  add 1 
///* <button className="close" onClick= {()=>{setAbc((prev)=>{return prev+1
// }) }}>hi</button>
// const [abc,setAbc] = useState(props.item.rating)  *///

// {/* <button className="btn" onClick= {()=>{return setAbc((prev)=>{return prev+1}) }}
//     const [abc,setAbc] = useState(5) */}
    // onClick= {()=>{return setAbc((prev)=>{return prev+1})
export default FeebackItem
