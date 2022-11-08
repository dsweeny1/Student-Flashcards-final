import React, {useState} from 'react'

const Form = ({ addStudent }) => {
    const [name, setName] = useState('')
    const [favoriteBands, setFavoriteBands] = useState('')
    const [favoriteFoods, setFavoriteFoods] = useState('')
    const [pets, setPets] = useState('')
    const [image, setImage] = useState('')

    const submitNewStudent = () => {
        const newStudent = {
            id: Date.now(),
            name,
            favoriteBands,
            favoriteFoods,
            pets,
            image
        }
        addStudent(newStudent)
        clearInputs()
    }

    const clearInputs = () => {
        setName('')
        setFavoriteBands('')
        setFavoriteFoods('')
        setPets('')
        setImage('')
    }

    return (
        <form>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input
                type='text'
                placeholder='Favorite Bands'
                name='favoriteBands'
                value={favoriteBands}
                onChange={event => setFavoriteBands(event.target.value)}
            />
            <input
                type='text'
                placeholder='Favorite Foods'
                name='favoriteFoods'
                value={favoriteFoods}
                onChange={event => setFavoriteFoods(event.target.value)}
            />
            <input
                type='text'
                placeholder='Pets'
                name='pets'
                value={pets}
                onChange={event => setPets(event.target.value)}
            />
            <input
                type='text'
                placeholder='Image'
                name='image'
                value={image}
                onChange={event => setImage(event.target.value)}
            />
            <button onClick={() => submitNewStudent()}>Add Student</button>
        </form>
    )
}

export default Form