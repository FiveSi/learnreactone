import { useState } from "react"
function RatingSelect(props) {
    const [selected, setSelected] = useState(10)
   
    const handleChange = (e) => {
      //change string to number with +
    //   console.log(e)
      console.log(e)
      console.log(+e.currentTarget.value)
      setSelected(+e.currentTarget.value)
      props.select(+e.currentTarget.value)
    }
   
    return (
      <ul className='rating'>
        {Array.from({ length: 10 }, (v , i) => i + 1).map((num) => (
          <li key={num}>
            <input
              type='radio'
              id={`num${num}`}
              name='rating'
              onChange={handleChange}
              value={num}
            />
            <label htmlFor={`num${num}`}>{`${num}`}</label>
          </li>
        ))}
      </ul>
    )
  }
  

export default RatingSelect
