import React from 'react'
import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react' 
import FeedbackContext from '../context/FeedbackContext'
import Spinnner from './shared/Spinnner'
// function FeedbackList({feedback, handleDelete}) {

  // deletion for feedback and handleDelete props and using context instead of them  
function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)


    // console.log(feedback)
    // if there is no data and not Loading icon
    if(!isLoading && (!feedback || feedback.length === 0)){
        return  <Spinnner />
        
    }
  return isLoading ? (

    <Spinnner />
  ) : (

    // <div className='feedback-list'>{feedback.map((item)=>(
    //     // <FeedbackItem key={item.id} item={item} handleDelete={(id) => console.log(id)} />
    //     <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    // ))}</div>

    // The animated version
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div key={item.id} initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            {/* <FeedbackItem key={item.id} item={item} handleDelete={(id) => console.log(id)} /> */}
            
            <FeedbackItem key={item.id} item={item} />  
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

}
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }



export default FeedbackList