// // {useState} is a hook that is imported in start of document
// import {useState} from 'react'
// We should install react-icons and then import remover of a feedback with FaTimes
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

// function FeedbackItem({item, handleDelete}) {
   // handleDelete is removed after using context in below line

  function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext)
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState("This is an example of feedback item")
    // const handleClick = () =>{
    //     // setRating(10 )
    //     setRating((previousNum)=>{
    //         console.log(previousNum)
    //         return previousNum + 1
    //     })
    // }

    // for deleting a feedback
    // const  handleClick = (id) =>{
    //   console.log(id)
    // }

  return ( 
    // Assing true for reverse if you want to display the reverse styles
    // so it is a conditional class
    <Card >
        <div className="num-display">{item.rating}</div>
        


        {/* <button className='close' onClick={() => handleClick(item.id)}>  just to show id*/}
        
        {/* <button className='close' onClick={() => handleDelete(item.id)}> 
        //handleDelete is removed by context */}
        <button className='close' onClick={() => deleteFeedback(item.id)}>  
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

export default FeedbackItem