import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogData } from '../data/blogdata'
import { useAuth } from './auth'

export function BlogPost() {
    const navigate = useNavigate()
    const { slug } = useParams()
    const { user } = useAuth()

    const blogPost = blogData.find(post => post.slug === slug)
    const userIsAuthor = user?.username === blogPost.author
    const userIsEditor = user?.isEditor
    const userIsSpellChecker = user?.isSpellChecker
    const userIsModerator = user?.isModerator

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <>
            <button onClick={returnToBlog}>return to blog</button>
            <h2>{blogPost.title}</h2>
            <li>{blogPost.author}</li>
            <p>{blogPost.content}</p>

            {userIsModerator && <button>mark as best</button>}
            {(userIsModerator || userIsAuthor) && <button>delete blog</button>}
            {(userIsEditor || userIsAuthor) && <button>Modify blog</button>}
            {(userIsSpellChecker || userIsAuthor) && (
                <button>Correct spelling</button>
            )}
        </>
    )
}
