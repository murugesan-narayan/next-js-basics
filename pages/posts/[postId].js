import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function PostDetail({post}) {
    const router = useRouter()
    if (router.isFallback) {
        return <h2>Loading.....</h2>
    }
    return (
        <div>
            <Link href='/posts'>Back to Post</Link>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail


export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.slice(0, 3).map(post=> {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    //console.log(paths)
    return {
        paths: paths,
        //fallback: false //will result in 404 error
        fallback: true //will init the page like when it builds and caches it, serves it after that, 
                        //but we need fallback code to show when it is loading
        //fallback: 'blocking' //will init the page like when it builds and caches it, serves it after that, 
                            //but browser waits till it gets loading, no fallback code here.
    }
}

export async function getStaticProps(context) {
    const {postId} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await response.json()
    //console.log('Calling getStaticProps for', postId);
    if(!data.id) {
        return {notFound: true}//when data not found returns page not found redirection
    }
    return {
        props: {
            post: data
        }
    }
}
