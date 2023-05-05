import React from 'react'
import { useEffect } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../Database/FirebaseConfig'
import { useState } from 'react'

const RealtimeMovies = () => {

    const movieCollectionRef = collection(db, 'movies')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(movieCollectionRef, snapshot => {
            setMovies(snapshot.docs.map(doc => ({ data: doc.data(), id: doc.id })))
        })
        return () => {
            unsubscribe()
        }
    }, [])


    return (

        <>
            <h1>RealtimeMovies</h1>
            <ul>

                {movies.map((movie) => (<li key={movie.id}>{movie.data.name}</li>))}
            </ul>
        </>
    )
}

export default RealtimeMovies