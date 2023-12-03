import './App.css';
import { useState } from 'react';
function App() {
  const [course, setCourse] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handleChange = (event)=> {
    setNewCourse(event.target.value)
  }
  const appendToList = ()=> {
    const newList = [...course, newCourse]
    setCourse(newList)
  }
  const deleteCourse = (courseName)=> {
    const del = course.filter((course)=> {
      if (course === courseName) return false
      else return true
    })
    setCourse(del)
  }
  return (
    <div className="App">
      <div className='add-course text-center my-3'>
        <input type='text' onChange={handleChange} placeholder='add your course' style={{fontFamily: "monospace", width: "300px", height: "38px", border: "2px solid #ccc", borderRadius: "7px"}}></input>
        <button onClick={appendToList} className='btn btn-primary'>Add Course</button>
        <div className='list my-3'>
          {course.map((course, index)=> {
            return (
              <div>
                <h1>{course}</h1>
                <button className='btn btn-danger' onClick={()=> deleteCourse(course)}>x</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
