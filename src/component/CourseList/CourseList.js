import React, { useState, Fragment  } from 'react'
import "./CourselIST.css"


function CourseList(props , {index}) {
  const [Data, setData] = useState("")
  const [Toggle, setToggle] = useState(false)
  function UpdateCourses(e) {
    e.preventDefault();
    props.EditCourse(props.index , Data)
    setToggle(false)
    
  }
    

  return (



    <Fragment>

      {Toggle ?  <> 
        <form onSubmit={UpdateCourses}>
   <input type="text"   defaultValue={props.Course.name} onChange={(e) =>  setData(e.target.value)} />
   <button type="" className='btn btn-outline-dark yes '> Update Course</button>
 </form>
      
      </> : 
      <>
 <li>
        <span> {props.Course.name} </span>
        <button type="" className='btn btn-outline-dark m-1'
        onClick={()=> {setToggle(true)}} > Edit Course 🤔 </button>
        <button type="" className='btn btn-outline-dark'
          onClick={() => {
            console.log(index)
            let Cou = [...props.Courses]
            Cou.splice(props.index, 1)
            localStorage.setItem("NewCourses", JSON.stringify(Cou))
            props.setCourses(Cou)
            console.log(Cou)
          }}
        > Delete Course 😥 </button>
      </li>


      </>
      
      }
            


     



    </Fragment>





    // <ul>

    //  {
    //     Toggle ?
    //       <>
    //         <form>
    //           <input type="text" name="update" />
    //           <button type="" className='btn btn-outline-dark'> Update Course</button>
    //         </form>

    //       </>

    //       : <>
    //        {props.Courses.map((Course, index) => 
    //         <li key={index}>






    //           {Course.name}
    //           <button type="" className='btn btn-outline-danger' onClick={() => { setToggle(true) }}>Edit Course</button>
    //           <button className='btn btn-outline-dark m-1 ' onClick={(index) => {
    //             console.log(index)
    //             let Cou = [...props.Courses]
    //             Cou.splice(index, 1)
    //             localStorage.setItem("NewCourses", JSON.stringify(Cou))
    //             props.setCourses(Cou)
    //             console.log(Cou)
    //           }} > Delete </button>



    //         </li>
    //           )}
    //       </>

    //   }




    // </ul>

  )
}

export default CourseList