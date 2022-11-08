import React from 'react'

const StudentCard = ({ id, name, favoriteBands, favoriteFoods, pets, image, deleteStudent}) => {
    return (
        <div className='student-card' id={id} key={id}>
            <img src={image}/>
            <h2 className='name'>Name: {name}</h2>
            <h3 className='bands'>Favorite Bands: {favoriteBands}</h3>
            <h3 className='food'>Favorite Foods: {favoriteFoods}</h3>
            <h3 className='pets'>Pets: {pets}</h3>
            <button onClick={(id) => deleteStudent(id)}>🗑</button>
        </div>
    )
}

export default StudentCard