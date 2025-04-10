import React from 'react'
import styles from './PostCard.module.css'

const PostCard = ({post}) => {
  return (
    <div className={styles.card}>
       <h2 >{post.title}</h2>
       <p>{post.body}</p>
    </div>
  )
}

export default PostCard
