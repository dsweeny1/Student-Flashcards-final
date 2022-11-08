import React from 'react'
import StudentCard from '../StudentCard/StudentCard'

const Students = ({ students, deleteStudent }) => {
    const studentCards = students.map(student => {
        return (
            <StudentCard 
                image={student.image}
                name={student.name}
                favoriteBands={student.favoriteBands}
                favoriteFoods={student.favoriteFoods}
                pets={student.pets}
                deleteStudent={deleteStudent}
                key={student.id}
            />
        )
    })
    return (
        <section className='card-container'>
            {studentCards}
        </section>
    )
}

export default Students