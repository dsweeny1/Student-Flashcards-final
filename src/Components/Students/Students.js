import React, { useState } from 'react'
// import StudentCardBack from '../StudentCardBack/StudentCardBack'
import StudentCard from '../StudentCard/StudentCard'
import './Students.css'

const Students = ({ students, deleteStudent }) => {
    const studentCards = students.map(student => {
        return (
            <section>
                <StudentCard 
                    image={student.image}
                    name={student.name}
                    favoriteBands={student.favoriteBands}
                    favoriteFoods={student.favoriteFoods}
                    pets={student.pets}
                    location={student.location}
                    deleteStudent={deleteStudent}
                    id={student.id}
                    key={student.id}
                    />
            </section>
        )
    })
    return (
        <section className='card-grid'>
            {studentCards}
        </section>
    )
}

export default Students