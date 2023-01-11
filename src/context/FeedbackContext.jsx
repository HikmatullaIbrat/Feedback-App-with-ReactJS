import {createContext, useState, useEffect} from 'react'
// import {v4 as uuidv4} from 'uuid' // uuid is installing by internet

const FeedbackContext = createContext()

export const  FeedbackProvider = ({children}) => {
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const [feedback, setFeedback] = useState([])
    const [ setIsLoading] = useState(true)
    // const [feedback, setFeedback] = useState([
    //     {
    //         id:1,
    //         text: 'This is item 1 from context',
    //         rating:10
    //     },
    //     {
    //         id:2,
    //         text: 'This is item 2 from context',
    //         rating:9
    //     },
    //     {
    //         id:3,
    //         text: 'This is item 3 from context',
    //         rating:6
    //     }
    // ])
    // fetch feedback items from json file or backend
    
    useEffect(()=>{
        fetchfeedback()
    }, [] )

    const fetchfeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        // console.log(data)
        setFeedback(data)
        // console.log(data)
        setIsLoading(false)
    }
    
    
    
    const addFeedback = async (newFeedback) => { // Adding a new Feedback
      
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
          // newFeedback.id = uuidv4()
        // console.log(newFeedback)
        // setFeedback([newFeedback, ...feedback])
        // console.log(data)
        setFeedback([data, ...feedback])
    }
    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure want to delete?")){
            // this below line deletes the feedback from json server
            await fetch(`/feedback/${id}`,{method:'DELETE'})
            // the below line means to return all items without this clicked one, so we used filter()
            setFeedback(feedback.filter((item) => item.id !==id))
        }
        // console.log("App", id)
    }
    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    // update feedback item
    const updateFeedback = async (id, updItem) =>{
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        // after updated action executed on json, we show json.db content by below line
        const data= await response.json()

        // console.log(id, updItem)
        setFeedback(//...item means current item which is selected to edit, ...upditem to update current item
            feedback.map((item) => (item.id === id ? {...item, ...data} : item))
        )
    }
    return (
        <FeedbackContext.Provider value={{

            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback, // it is function
            feedbackEdit, // it is the state that holds the item
            updateFeedback,
            setIsLoading
     }} 
        >
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext