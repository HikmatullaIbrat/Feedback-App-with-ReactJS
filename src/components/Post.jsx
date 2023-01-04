// import { useParams } from "react-router-dom"    
import { Navigate, useNavigate, Routes, Route } from "react-router-dom" // is used to redirect to a page
function Post() {
    // const param = useParams()
    let status_page = 404
     status_page = 200
   
    
    const navigate = useNavigate()
    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }
    // if page not found in url
    if (status_page === 404){
        return <Navigate to='/Notfound' />
    }
  return (
    // <div>Post is shown</div>
    // <div>
    //     {/* <h1>Post {param.id} </h1>
    //     <p>Name: {param.name}</p> */}
    // </div>   
    
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
            {/* if url was /post/show */}
            <Route path="/show" element={<h1>Hello World</h1>} />
        </Routes>
    </div>
  )
}

export default Post