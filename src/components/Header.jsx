
import PropTypes from 'prop-types'
// function Header(props) { if we iport props in this way, we should write props.propsName
function Header({ text }) { // we directly passed the prop by its name and called like this {text}
  return (
    <header>
         <div className="container">
            <h2>Feedback UI from Header</h2>
            {/* <h2>{props.text}</h2> */}
            <h2>{text}</h2>
         </div>
    </header>
   
  )
}
// We can assign default prop if don't assign it on main body of
Header.defaultProps = {
    text:'How was your interview?',
}

// And we can also specify Prop types by importing PropTypes property to restrict the variables.
Header.propTypes = {
    text:PropTypes.string,
};
export default Header;
