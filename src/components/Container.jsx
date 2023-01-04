import FeedbackForm from "./FeedbackForm"
import FeedbackStats from "./FeedbackStats"
import FeedbackList from "./FeedbackList"

import {v4 as uuidv4} from 'uuid' // uuid is installing by internet
import { useState } from "react"
import FeedbackData from "../data/FeedbackData"


function Container() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) =>{ // Adding a new Feedback
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }  

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure want to delete?")){
            // the below line means to return all items without this clicked one, so we used filter()
            setFeedback(feedback.filter((item) => item.id !==id))
        }
        console.log("App", id)
    }
  return (
    <div className="container">
        <FeedbackForm handleAdd = {addFeedback}/> {/* passing addFeedback to Feedbackform */}
        {/* Feed Back Prop passed to FeedbackStats component */}
        <FeedbackStats feedback={feedback} />
        {/* <FeedbackItem /> */}
        <FeedbackList  feedback = {feedback} handleDelete = {deleteFeedback}/>
    </div>
  )
}

export default Container