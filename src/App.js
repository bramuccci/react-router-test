import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { BlogPage } from './components/BlogPage'
import { ProfilePage } from './components/ProfilePage'
import { NotFound } from './components/NotFound'
import { Menu } from './components/Menu'

export default function App() {
    return (
        <>
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        </>
    )
}
