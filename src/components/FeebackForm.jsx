import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import RatingSelect from './RatingSelect'
function FeebackForm(props) {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [messsage,setMessage] = useState('😆')
    const handleChange = (e)=>{
        if(text === '') {
            setBtnDisabled(true)
            setMessage('😆')
        }else if(text !== '' && text.trim().length < 10){
            setBtnDisabled(true)
            setMessage('😆 text mush more than 10 characters')
        }else {
            setBtnDisabled(false)
            setMessage('😆')
        }
        setText(e.target.value)
      }
      const handleFeeback = (e)=>{
          e.preventDefault() // can stop button send
          if (text.trim().length > 10) {
              const newFeedback = {
                  text,
                  rating
              }
             props.addFeeback(newFeedback)
          }
     }
    return (
        <Card>
            <RatingSelect select={(a)=>{setRating(a)
            console.log(a, 'rating')
            }}/>
            <form onSubmit={handleFeeback}>
            <h2>Say someting else</h2>
            <div className='input-group'>
            <input onChange={handleChange}
            type='text' placeholder='write here'
            value={[text]}
            />
            <Button isDisabled={btnDisabled} type="submit">Send</Button>

            </div>
            {messsage && <div className='message'>{messsage}</div>}

            </form>
        </Card>
            
        
    )
}

export default FeebackForm
