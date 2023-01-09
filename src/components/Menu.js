import React from 'react'
import { NavLink } from 'react-router-dom'

export function Menu() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
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
                ))}
            </ul>
        </nav>
    )
}

const routes = []
routes.push({
    to: '/',
    text: 'Home',
})
routes.push({
    to: '/blog',
    text: 'blog',
})
routes.push({
    to: '/profile',
    text: 'profile',
})
