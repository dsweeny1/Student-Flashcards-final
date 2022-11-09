import React from 'react'
import StudentCardBack from '../StudentCardBack/StudentCardBack'
import StudentCardFront from '../StudentCardFront/StudentCardFront'

const Students = ({ students, deleteStudent }) => {
    const studentCards = students.map(student => {
        // {console.log(student.id)}
        return (
            <div>
                <StudentCardFront 
                    image={student.image}
                    id={student.id}
                    key={student.id}
                    />
                    <StudentCardBack 
                    name={student.name}
                    favoriteBands={student.favoriteBands}
                    favoriteFoods={student.favoriteFoods}
                    pets={student.pets}
                    location={student.location}
                    deleteStudent={deleteStudent}
                    />
            </div>
        )
    })
    return (
        <section className='card-container'>
            {studentCards}
        </section>
    )
}

export default Students