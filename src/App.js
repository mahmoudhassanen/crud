import { useEffect, useState } from 'react';


import './App.css';
import CourseForm from './component/CourseForm/CourseForm';
import CourseList from './component/CourseList/CourseList';



function App() {
 
  const [Courses, setCourses] = useState([
    {
         
        name  : "css"
    },
    {
     
        name : "Html"
    },
    {
     
        name : "bootstrap"
    },
    
  ]
  
  
  )
  const [name, setName] = useState("");

 
  // let UpdateTodo = (e) => 
  // {
  //   setCourses(e.target.value)
  // }
  
   function AddCourse(e) {
     e.preventDefault();
     let MyCourse = [...Courses]
      let current = name;
     MyCourse.push({   name:current  })
     localStorage.setItem("NewCourses" , JSON.stringify(MyCourse))
    setCourses(  MyCourse );
    setName("")
    
    console.log(MyCourse)

    
  }
  // function  DeleteCourse  (index)  {
 
  
  // }
   let EditCourse = (  index , value) => 
   {
    
     let MyCourse = [...Courses]
     let MyIndex = MyCourse[index]
     MyIndex["name"] = value;
     localStorage.setItem("NewCourses" , JSON.stringify(MyCourse))
     setCourses(MyCourse)
         
   }

  let  NewCourses = JSON.parse(localStorage.getItem('NewCourses'));
useEffect(() => {

 
  if (NewCourses) {
   setCourses(NewCourses);
   console.log(NewCourses)
   
  }
},[]);


   let CourseSet = Courses.map((Course , index) => 
   {
     return <CourseList  Courses={Courses} index={index} EditCourse={EditCourse}  key={index} setCourses={setCourses} name={name} Course={Course}  setName={setName}  />
   } ) 
  return ( 
    
    <div className="App">
   <h2>  My Courses : 😀  </h2>
   <CourseForm     setName={setName}   AddCourse={AddCourse}  name={name}   Courses = {Courses} />
      
         <ul>
           {CourseSet}
         </ul>
  

 
    </div>
  );
}

export default App;
