import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid' // uuid is installing by internet

const FeedbackContext = createContext()

export const  FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This is item 1 from context',
            rating:10
        },
        {
            id:2,
            text: 'This is item 2 from context',
            rating:9
        },
        {
            id:3,
            text: 'This is item 3 from context',
            rating:6
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
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
    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    // update feedback item
    const updateFeedback = (id, updItem) =>{
        // console.log(id, updItem)
        setFeedback(//...item means current item which is selected to edit, ...upditem to update current item
            feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )
    }
    return (
        <FeedbackContext.Provider value={{

            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback, // it is function
            feedbackEdit, // it is the state that holds the item
            updateFeedback
     }} 
        >
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext