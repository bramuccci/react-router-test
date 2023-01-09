import React, { useState } from 'react'
import { useAuth } from '../components/auth'

export function LoginPage() {
    const auth = useAuth()
    const [username, setUsername] = useState('')

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
