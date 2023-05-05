import React, { useEffect, useState } from 'react'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../Database/FirebaseConfig'
const ReadMovies = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        console.log(movies)
    }, [movies])

    const getMovies = () => {
        const movieCollectionRef = collection(db, 'movies')
        getDocs(movieCollectionRef)
            .then(response => {
                // console.log(response)
                const movs = response.docs?.map(doc => ({ data: doc.data(), id: doc.id }))
                setMovies(movs);
            }).catch(error => { console.log(error) })
    }

    return (
        <>
            <h1>list of movies</h1>
            <ul>

                {movies.map((movie) => (<li key={movie.id}>{movie.data.name}</li>))}
            </ul>
        </>
    )
}

export default ReadMovies