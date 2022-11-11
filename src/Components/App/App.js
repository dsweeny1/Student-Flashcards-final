import './App.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import Students from '../Students/Students';
import Form from '../Form/Form'
import Header from '../Header/Header';
import Error from '../Error/Error'

function App() {
  const [students, setStudents] = useState([])
  const [error, setError] = useState(false)

  const getStudents = async () => {
    const url = (`http://localhost:3001/api/v1/students`)
    try {
      const response = await fetch(url)
      const students = await response.json()
      console.log(response)
      if (!response.ok) {
        setError(true)
        throw new Error(response.status)
      }
      setStudents(students.students)
    } catch(error) {
      setError(true)
      console.log(error)
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
      console.log('error', error.message)
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
            <>
            {error && <Error />}
            {!error && <Students 
              students={students}
              deleteStudent={deleteStudent}
            />}
            </>
          )
        }}
        />
        <Route 
        exact path='/students/form'
        render={ () => {
          return (
            <div>
              {error && <Error />}
             {!error && <Form 
              addStudent={addStudent}
              />}
            </div>
          )
        }}
        />
        <Route 
        path='*' component={Error}
        />
      </Switch>
    </div>
  );
}

export default App;
