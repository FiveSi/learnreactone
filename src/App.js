// function App() {
//     const a = 1
//     const b = 2 
//     const c = [{id:1 ,text:'abc'},{id:2 ,text:'abc'},{id:3 ,text:'abc'}]
//     const loading = false
//     const showComment = true
//     const commentBlock = (
//         <div className="Comment">
//         <ul>
//           {c.map((maps, index) => (
//               <li key={maps.id}>{maps.text}</li>
//               ))}
//          </ul>
//       </div>)
//     if(loading) {return (<h1>loading...</h1>)}
//   return (
//   <div>
//       <h1>this is import {a} {b}</h1>
//       {showComment ? (commentBlock):(<h1>no</h1>)}
      
//       <h1>this is import {a} {b}</h1>
//     </div>
//   )
// }
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid" //uuid one
import { useState } from "react"
import Card from "./components/Card"
import FeebackList from "./components/FeebackList"
import FeebackStats from "./components/FeebackStats"
import FeebackForm from "./components/FeebackForm"
import Header from './components/Header'
import FeedbackData from './data/FeebackData'
import AboutPage from './components/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'

function App() {
    const [data, setData] = useState(FeedbackData)
    const newFeeback = (qqq) =>{
        qqq.id = uuidv4() ////uuid one
        console.log('hi', qqq);
        setData([qqq, ...data])
        console.log('hi',data)
    }
    const feebackDelete = (id) =>{
        console.log('app' ,id)
        if(window.confirm('a u sure delete that')){
        setData(data.filter((item) => item.id !== id))
    }
    }
    return (
        <>
        <Router>
            <div className="container">
                <h1>Metahkg</h1>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <FeebackForm addFeeback={newFeeback} />
                        <FeebackStats data={data}/>
                        <FeebackList handleDelete={feebackDelete} data={data}/>
                    </>
                }>
                </Route>
                <Route path='/about' element={
                    <>
                    <AboutPage />
                    </>
                }></Route>
                <Route path='/post/:id/:name' element={<><Post /></>}></Route>
            </Routes>
            <AboutIconLink />
                </div>
        </Router>
     </>

    )
}

export default App