import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogData } from '../data/blogdata'

export function BlogPost() {
    const navigate = useNavigate()
    const { slug } = useParams()

    const blogPost = blogData.find(post => post.slug === slug)

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <>
            <button onClick={returnToBlog}>return to blog</button>
            <h2>{blogPost.title}</h2>
            <li>{blogPost.author}</li>
            <p>{blogPost.content}</p>
        </>
    )
}
