import React, { useState } from 'react'
import { addDoc, collection } from '@firebase/firestore'
import { db } from '../Database/FirebaseConfig'

const AddMovie = () => {
    const [name, setName] = useState('')
    const [director, setDirector] = useState('john wick')
    const addMovie = (e) => {
        e.preventDefault();
        if (name == '') { return }
        // console.log(name)
        const moviesCollectionRef = collection(db, 'movies')
        addDoc(moviesCollectionRef, { name: name, director: director })
            .then((response) => {
                console.log(response)
                setName('')
            })
            .catch((error) => console.log(error))

    }
    return (
        <>
            <h1>AddMovie</h1>
            <form onSubmit={addMovie}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button type="submit" >Add movie</button>
            </form>
        </>
    )
}

export default AddMovie