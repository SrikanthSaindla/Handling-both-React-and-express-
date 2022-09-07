 import React from 'react'
 import { useState } from 'react'
 import axios from 'axios'
 
 const App = () => {
  const [data,setData]=useState({
    id:'',
    name:''
  })
  const {id,name} =data

  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const SubmitHandler=(e)=>{
    e.preventDefault()
       axios.post("http://localhost:8080/addproducts",data).then(
        ()=>{
          alert("data send sucessfully")
         setData({...data,id:'',name:''})
        }
       ).catch(err=>console.log(err))
      
  }
   
   
   return (
    <center> 
       <form onSubmit={SubmitHandler}>
        <label htmlFor='id1' >Enter The Id</label><br/>
        <input type='number' id='id1' name="id" value={id}  placeholder="id" onChange={changeHandler}/>
        <br/>
        <label htmlFor='name1' >Enter Name</label><br/>
        <input type='text' id='name1' name='name' value={name} placeholder='name' onChange={changeHandler}/>
        <br/>
        <input type="submit" />
       
       </form>
       </center>
   )
 }
 
 export default App