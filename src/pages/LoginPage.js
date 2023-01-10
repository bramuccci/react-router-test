import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../components/auth'

export function LoginPage() {
    const auth = useAuth()
    const [username, setUsername] = useState('')

    if (auth.user) return <Navigate to="/profile" replace />

    const login = e => {
        e.preventDefault()
        auth.login({ username })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label htmlFor="">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <button type="submit">enter</button>
            </form>
        </>
    )
}
