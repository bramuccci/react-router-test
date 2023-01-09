import React from 'react'
import { NavLink } from 'react-router-dom'
import { blogData } from './blogdata'

export function BlogPage() {
    return (
        <>
            <h1>BlogPage</h1>
            <ul>
                {blogData.map(post => (
                    <BlogLink key={post.slug} post={post}></BlogLink>
                ))}
            </ul>
        </>
    )
}

function BlogLink({ post }) {
    return (
        <li>
            <NavLink to={`/blog/${post.slug}`}>{post.title}</NavLink>
        </li>
    )
}
