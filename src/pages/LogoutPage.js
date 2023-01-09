import React from 'react'
import { useAuth } from '../components/auth'

export function LogoutPage() {
    const auth = useAuth()

    const logout = e => {
        e.preventDefault()
        auth.logout()
    }

    return (
        <>
            <h1>Log out</h1>
            <form onSubmit={logout}>
                <p>If you want to log out, click the button below</p>
                <button type="submit">Log out</button>
            </form>
        </>
    )
}
