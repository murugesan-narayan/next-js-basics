import React from 'react'
import Link from 'next/link'
function PostList({posts}){ 
    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h2>List of Posts</h2>
            <ul>
            {
                posts.map(post=> <li key={post.id}>
                    <Link href={`/posts/${post.id}`} passHref>{post.title}</Link></li>)
            }
            </ul>
        </div>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    //console.log(data);
    return {
        props: {
            posts: data
        }
    }
}