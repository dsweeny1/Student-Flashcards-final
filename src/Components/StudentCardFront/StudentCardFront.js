import React from 'react'
import StudentCardBack from '../StudentCardBack/StudentCardBack'
import './StudentCardFront.css'

const StudentCardFront = ({ id, name, favoriteBands, favoriteFoods, location, pets, image, deleteStudent}) => {

    const cardFlip = () => {
        console.log('hi')
       return <StudentCardBack />
    }

//     var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });

    return (
        // <div className='student-card' id={id} key={id}>
            <div className="scene scene--card">
                <div className="card" id={id} key={id}>
                    <div className="card__face card__face--front">
                        <img onClick={() => cardFlip()} src={image}/>
                    </div>
                    {/* <div className="card__face card__face--back">
                        <h2 className='name'>Name: {name}</h2>
                        <h3 className='bands'>Favorite Bands: {favoriteBands}</h3>
                        <h3 className='food'>Favorite Foods: {favoriteFoods}</h3>
                        <h3 className='pets'>Pets: {pets}</h3>
                        <h3>Location: {location}</h3>
                    </div> */}
                </div>
                        <button onClick={() => deleteStudent(id)}>🗑</button>
                </div>
        // </div>
    )
}

export default StudentCardFront