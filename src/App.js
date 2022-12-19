import React from "react"

// function App(){
//     // return (
//     //     <div>
//     //         <h5>first element</h5>
//     //         <h6>Second Element</h6>
//     //         <p> And both of them placed in one parent div, because just one parent can be
//     //             returned.</p>        
//     //     </div>

//     // )
//     // return <h1>Hello from the app component with a closing tag</h1>

//     // 15.	In JSX we don’t have class attribute but instead we write ClassName attribute.
//     // 17.	By the help of createElement() we can also create Element without JSX.
//     // return React.createElement(
//     //     'div',
//     //     {className:'container'},
//     //     React.createElement ('h1',{},'MY APP not JSX but by JavaScript')

//     // )
//     return (
//         // 15.	In JSX we don’t have class attribute but instead we write ClassName attribute.
//         // <div className="firstClass">
//         //     <h5>first element</h5>
//         //     <h6>Second Element</h6>
//         //     <p> And both of them placed in one parent div, because just one parent can be
//         //         returned.</p>        
//         // </div>

         
//             // 14.	It is not necessary that we return a named parent element like div or h1 but we can return 
//     // an empty element as well, and JSX will handle it in directly adding them div with id of root.
//     // 16.	We use htmlFor instead of for.
//          <>
//             <h5 id="elementFive">first element</h5>
//             <label htmlFor="elementfive"></label>
            
//             <h6>Second Element</h6>
//             <p> And both of them placed in one parent div, because just one parent can be
//             returned.</p>
                
//          </>
         
//     )
   
// }
// function App(){
//     let title1 =   'Blog Post'
//     const body = 'This is body contents'
//     const comments = [
//         {id:1, text:'comment one'},
//         {id:2, text:'comment two'},
//         {id:3, text:'comment three'},
//     ]
//     const loading = false
//     // if (loading){
//     //     return <h1>Loading done...</h1>
//     // }
    
//     return(
//         <div className="container" >
//             {/* {loading ? "yes" : "no"} */}
            
//             <h1>{title1.toUpperCase()}</h1>
//             <p>{body}</p>
//             or any other JavaScript content like {Math.random() * (5*4)}
//             <h3>Comments length ({comments.length})</h3>
//             {loading ? (
//             <ul>
//                 {comments.map((comment, index)=>(
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>) : 'nothing here...'}
            
//         </div>
//     )
// }

import Header from "./components/Header"
function App(){
   return(
    <>
    {/* <Header text="Hello World" /> */}
    {/* <Header text = "How are you doing?" textColor="SlateBlue" bgColor="Salmon"/> */}
    <Header/>
    <div className="container">
        <h1>My App</h1>
    </div>
    </>
   )
}

// export the app.js components to index.js
export default App