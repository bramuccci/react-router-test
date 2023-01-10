import React, { createContext, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const adminList = ['a1', 'b2', 'c3']

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = ({ username }) => {
        const isAdmin = adminList.find(admin => admin === username)
        setUser({ username, isAdmin })
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

export function AuthRoute({ children }) {
    const auth = useAuth()

    if (!auth.user) return <Navigate to="/login" />
    return children
}
