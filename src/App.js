import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotFound } from './pages/NotFound'
import { Menu } from './components/Menu'
import { BlogPost } from './components/BlogPost'

export default function App() {
    return (
        <>
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        </>
    )
}
