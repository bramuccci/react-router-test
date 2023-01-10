import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogData } from '../data/blogdata'
import { useAuth } from './auth'

export function BlogPost() {
    const navigate = useNavigate()
    const { slug } = useParams()
    const auth = useAuth()

    const blogPost = blogData.find(post => post.slug === slug)
    const userHasPermission =
        auth.user?.isAdmin || auth.user?.username === blogPost.author

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <>
            <button onClick={returnToBlog}>return to blog</button>
            <h2>{blogPost.title}</h2>
            <li>{blogPost.author}</li>
            <p>{blogPost.content}</p>

            {userHasPermission && <button>delete blog</button>}
        </>
    )
}
