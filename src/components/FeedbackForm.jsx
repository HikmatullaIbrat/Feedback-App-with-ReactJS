import React from 'react'
import Card from './shared/card'
import { useState } from 'react'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState()
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    
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
    }
    
  return (
    <Card>
        <form action="">
            <h2>How would you rate your service with us?</h2>
            {/* rating Select component  */}
            <div className="input-group">
                <input type="text"  placeholder='Write a review' value={text}/>
                <Button type='submit' version="secondary" isDisabled={btnDisabled}>Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm