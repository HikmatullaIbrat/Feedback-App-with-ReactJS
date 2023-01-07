import React from 'react'
// import PropTypes from 'prop-types'
import {useContext} from 'react' 
import FeedbackContext from '../context/FeedbackContext'
//function FeedbackStats({feedback}) {  feedback prop not used in new version after using context, below line
  function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)


    // Calculating rating Avg
    let Average = feedback.reduce((accumolator, current) => {
        return accumolator + current.rating
    },0) / feedback.length
    // ToFixed is applied on Average of rating to have just one decimal after the integer number
    // and replace is applied to not a fixed number 9.0 but show it with just 9, after some regex
    Average = Average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
      
        <h4>Average Rating: {isNaN(Average) ? 0 : Average}</h4>
    </div>
  )
}

  /* component level state  to review*/
export default FeedbackStats