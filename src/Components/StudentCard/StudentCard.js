import React, { useState } from 'react'
import './StudentCard.css'

const StudentCard = ({ id, name, favoriteBands, favoriteFoods, location, pets, image, deleteStudent }) => {
    const [flip, setFlip] = useState(false)
        return (
            <div>
            <div className={`card ${flip ? 'flip' : ''}`}>
                <div className='front' onClick={() => setFlip(!flip)}>
                    {image && <img src={image} alt={`${name} picture`}/>}
                    {!image && <h2>No Image Available!</h2>}
                </div>
                <div className='back' onClick={() => setFlip(!flip)}>
                    <h2 className='name'>Name: {name}</h2>
                    <h3 className='bands'>Favorite Bands: {favoriteBands}</h3>
                    <h3 className='food'>Favorite Foods: {favoriteFoods}</h3>
                    <h3 className='pets'>Pets: {pets}</h3>
                    <h3>Location: {location}</h3>
                </div>
            </div>
                <button className='delete-button' onClick={() => deleteStudent(id)}>🗑</button>
            </div>
        )
}

export default StudentCard