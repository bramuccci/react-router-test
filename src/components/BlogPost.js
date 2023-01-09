import React from 'react'
import { useParams } from 'react-router-dom'
import { blogData } from '../data/blogdata'

export function BlogPost() {
    const { slug } = useParams()

    const blogPost = blogData.find(post => post.slug === slug)

    return (
        <>
            <h2>{blogPost.title}</h2>
            <li>{blogPost.author}</li>
            <p>{blogPost.content}</p>
        </>
    )
}
