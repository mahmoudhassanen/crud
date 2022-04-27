import React from 'react'

function CourseForm(props) {
  
  return (
    <div>
         <form onSubmit={props.AddCourse}>
             <input type="text" value={props.name} onChange={(e)=> {props.setName(e.target.value)}}/>
             <button type="submit"> Add Course 🤗</button>
         </form>   
    
    </div>
  )
}

export default CourseForm