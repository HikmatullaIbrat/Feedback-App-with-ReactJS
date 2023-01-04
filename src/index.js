import React from 'react'
import ReactDOM from 'react-dom'

// Importing the app.js data to this file
import App from './App' 
// Importing the index.css file contents
import './index.css'

// render() get two args, first what we want to show and second we specify the target place with help DOM
// ReactDOM.render(<h1>sanga yi from render?</h1>,document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'))

// or for adding some additional warning and checks
ReactDOM.render(
<React.StrictMode>
<App></App>
</React.StrictMode>,

document.getElementById('root'))



