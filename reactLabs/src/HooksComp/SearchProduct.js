import React, { useState , useEffect} from 'react'
import axios from 'axios';

function SearchProduct() {

    const [post , setPost] = useState({});
    const [id , setId ] = useState(1);
    const [idEnserted , setIdIns] = useState(1);
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
          console.log(response);
          setPost(response.data)
      })
      .catch(error => {
          console.log(error);
      })
  }, [idEnserted])

  const handeleClick = () => {
      setIdIns(id)
  }
    // const hadelSearch = ()=>{
    //     setIdIns(id);
    // }

  return (
   <div>
    <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
    <button onClick={handeleClick}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7R6VX-y9s8duJomLK2dpviMrdG6VfV8P9m7XpVqGLAA&s" width="25" height="25"/> 
    </button>
    <h3>{post.title}</h3>
   </div>
  )
}
//! still doing ****
//? icon lens => when clicked on an input appears => the result of the search appears in the top of the page 

export default SearchProduct