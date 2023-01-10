import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BlogPage } from './pages/BlogPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotFound } from './pages/NotFound'
import { Menu } from './components/Menu'
import { BlogPost } from './components/BlogPost'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { AuthProvider, AuthRoute } from './components/auth'

export default function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogPage />}>
                            <Route path=":slug" element={<BlogPost />} />
                        </Route>
                        <Route
                            path="/profile"
                            element={
                                <AuthRoute>
                                    <ProfilePage />
                                </AuthRoute>
                            }
                        />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/logout"
                            element={
                                <AuthRoute>
                                    <LogoutPage />
                                </AuthRoute>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </>
    )
}
