import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Students from '../Students/Students';
import Form from '../Form/Form'
import Header from '../Header/Header';

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
      console.log('students', students.students)
    } catch(error) {
    }
  }

  useEffect(() => {
    getStudents()
  }, [])

  const deleteStudent = (id) => {
    console.log(id)
    const deletedStudent = students.filter(student => student.id !== id)
    try {
      const response = fetch(`http://localhost:3001/api/v1/students/${id}`, {
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

  const addStudent = (newStudent) => {
    console.log(newStudent)
    try {
      const response = fetch('http://localhost:3001/api/v1/students', {
        method: 'POST',
        body: JSON.stringify({
          id: newStudent.id,
          name: newStudent.name,
          favoriteBands: newStudent.favoriteBands,
          favoriteFoods: newStudent.favoriteFoods,
          pets: newStudent.pets,
          location: newStudent.location,
          image: newStudent.image
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = response.json();
      return data;
    }
    catch (error) {
      console.log(error.message)
    }
    setStudents([...students, newStudent])
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route 
        exact path='/'
        render={ () => {
          return (
            <Students 
              students={students}
              deleteStudent={deleteStudent}
            />
          )
        }}
        />
        <Route 
        path='/students/form'
        render={ () => {
          return (
            <div>
              <Form 
              addStudent={addStudent}
              />
            </div>
          )
        }}
        />
      </Switch>
    </div>
  );
}

export default App;
