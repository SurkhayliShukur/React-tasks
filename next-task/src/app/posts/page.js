import React from 'react'
import PostCard from '@/components/PostCard/PostCard'
import axios from 'axios'

const fetchPost = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const post = response.data
    return post
}

const page = async () => {
    const posts = await fetchPost()
    console.log(posts)
    return (
        <div>
            <h1 className='text-center text-2xl py-4'>Posts</h1>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default page
