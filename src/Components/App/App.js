import './App.css';
import React, {useState, useEffect} from 'react'
import Students from '../Students/Students';
import Form from '../Form/Form'

function App() {
  const [students, setStudents] = useState([])

  const getStudents = async () => {

    const url = (`http://localhost:3001/api/v1/students`)
    try {
      const response = await fetch(url)
      const students = await response.json()
      if (!response.ok) {
        throw new Error(response.status)
      }
      setStudents(students.students)
      console.log(students.students)
    } catch(error) {
    }
  }

  useEffect(() => {
    getStudents()
  }, [])

  const deleteStudent = async (id) => {
    const deletedStudent = students.filter(student => student.id !== id)
    try {
      const response = await fetch(`http://localhost:3001/api/v1/students/${id}`, {
        'method': 'DELETE'
      });
      if (!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
      }
      const newData = response.json();
      console.log('newData', newData)
      return newData;
    }
    catch (error) {
      console.log(error.message)
  };
    setStudents(deletedStudent)
  }

  const addStudent = async (newStudent) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/students', {
        method: 'POST',
        body: JSON.stringify({
          id: newStudent.id,
          name: newStudent.name,
          favoriteBands: newStudent.favoriteBands,
          favoriteFoods: newStudent.favoriteFoods,
          pets: newStudent.pets,
          image: newStudent.image
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.log(error.message)
    }
    setStudents([...students, newStudent])
  };

  return (
    <div className="App">
      <Form addStudent={addStudent}/>
      <Students 
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
