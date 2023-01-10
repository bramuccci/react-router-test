import React from 'react'
import { useAuth } from '../components/auth'

export function ProfilePage() {
    const auth = useAuth()

    return (
        <>
            <h1>Hello, {auth.user.username}</h1>
        </>
    )
}
