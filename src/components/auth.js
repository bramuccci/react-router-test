import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = ({ username }) => {
        setUser({ username })
        navigate('/profile')
    }

    const logout = () => {
        setUser(null)
    }

    const auth = { user, login, logout }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
export function useAuth() {
    const auth = useContext(AuthContext)
    return auth
}
