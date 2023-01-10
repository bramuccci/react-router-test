import React, { createContext, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const moderators = ['m1', 'm2', 'm3']
const spellCheckers = ['sp1', 'sp2', 'sp3']
const editors = ['e1', 'e2', 'e1']

export function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const login = ({ username }) => {
        const isModerator = moderators.find(mod => mod === username)
        const isSpellChecker = spellCheckers.find(sp => sp === username)
        const isEditor = editors.find(ed => ed === username)

        setUser({ username, isModerator, isEditor, isSpellChecker })
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
