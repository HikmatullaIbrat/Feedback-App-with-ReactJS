import React from 'react'
import Card from './shared/card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    
    const handleTextChange = (e) => {
        // console.log(e.target.value)
        // setText(e.target.value)
        // Form validation for getting feedback:
                
        if(text === ''){    // if feedback is submitted empty, so btn is disabled for submiting 
            setBtnDisabled(true)
            setMessage(null)

        }else if(text !== '' && text.trim().length <= 10){// if feedback is submitted with less than 10 chars
            setMessage('Text must be at least 10 Characters')
            setBtnDisabled(true)
        }else{  // if feedback is submitted with more than 10 chars, so btn is set to be enabled fo submitting
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,   
            }
            // console.log(newFeedback)
            handleAdd(newFeedback)
            setText('')
        }
    }
  return (
    <Card>
        <form action="" onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            {/*By default feedback rate is ten, but if any other rate is selected so that value will
            be passed to RatingSelect component, and then Rating Select will catch and replace the value*/}
            <RatingSelect select={(rating) =>setRating(rating)}/>
            {/* rating Select component  */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                <Button type='submit' version="secondary" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm