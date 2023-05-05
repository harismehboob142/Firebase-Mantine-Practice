import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Database/FirebaseConfig';

const AuthDetails = () => {

    const [user, setUser] = useState('')

    useEffect(() => {
        const listen = onAuthChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        })
    }, [])


    return (
        <div>{user ? <p>Signed in</p> : <p>Error</p>}</div>
    )
}

export default AuthDetails