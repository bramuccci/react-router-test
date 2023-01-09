import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export function Menu() {
    const auth = useAuth()

    return (
        <nav>
            <ul>
                {routes.map(route => {
                    if (route.onlyIfNotAuth && auth.user) return null
                    if (route.private && !auth.user) return null

                    return (
                        <li key={route.text}>
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'green' : 'red',
                                })}
                                to={route.to}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

const routes = []
routes.push({
    to: '/',
    text: 'Home',
    private: false,
})
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false,
})
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true,
})
routes.push({
    to: '/login',
    text: 'Login',
    private: false,
    onlyIfNotAuth: true,
})
routes.push({
    to: '/logout',
    text: 'Log out',
    private: true,
})
