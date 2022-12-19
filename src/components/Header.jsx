
import PropTypes from 'prop-types'
// function Header(props) { if we iport props in this way, we should write props.propsName
function Header({ text, textColor, bgColor }) { // we directly passed the prop by its name and called like this {text}
    const headerStyles = {
        // backgroundColor: "darkkhaki",
        // color : 'teal'
        // we defined backgroundColor and textcolor on App.js and pass them to this header
        backgroundColor: bgColor,
        color:textColor

    }
  return (
    <header style = {headerStyles}>
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
    // or if didn't define anythin in app.js or header we can assign in defaultProps of Header
    bgColor: "LightSalmon",
    textColor: "#808000"

}

// And we can also specify Prop types by importing PropTypes property to restrict the variables.
Header.propTypes = {
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
};
export default Header;
