import FeedbackForm from "./FeedbackForm"
import FeedbackStats from "./FeedbackStats"
import FeedbackList from "./FeedbackList"


// import { useState } from "react"
// import FeedbackData from "../data/FeedbackData"


function Container() {
    // const [feedback, setFeedback] = useState(FeedbackData) // no longer need after using context

    // const addFeedback = (newFeedback) =>{ // Adding a new Feedback
    //     newFeedback.id = uuidv4()
    //     console.log(newFeedback)
    //     setFeedback([newFeedback, ...feedback])
    // } 
    // const deleteFeedback = (id) => {
    //     if(window.confirm("Are you sure want to delete?")){
    //         // the below line means to return all items without this clicked one, so we used filter()
    //         setFeedback(feedback.filter((item) => item.id !==id))
    //     }
    //     console.log("App", id)
    // }

   
  return (
    <div className="container">

        {/* <FeedbackForm handleAdd = {addFeedback}/> passing addFeedback to Feedbackform */}
        <FeedbackForm />
        {/* Feedback Prop passed to FeedbackStats component */}
        {/* <FeedbackStats feedback={feedback} /> */}
        <FeedbackStats />
        {/* <FeedbackItem /> */}

        {/* <FeedbackList  feedback = {feedback} handleDelete = {deleteFeedback}/> */}
         
        {/* The above feedback= {feedback} and handleDelete attrs
         which used for bringing feedback item from feedbackData,
        is deleted after using context. */}
        <FeedbackList/>
    </div>
  )
}

export default Container