import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function ProductDetail({product}) {
    const router = useRouter()
    if (router.isFallback) {
        return <h2>Loading.....</h2>
    }
    return (
        <div>
            <Link href='/products'>Back to Post</Link>
            <h2>{product.title}</h2>
            <p><b>Cost:</b> {product.price} Euro</p>
            
            <p><b>Description:</b> {product.description}</p>
        </div>
    )
}

export default ProductDetail


export async function getStaticPaths(){
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    const paths = data.slice(0, 3).map(product=> {
        return {
            params: {
                productId: `${product.id}`
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
    const {productId} = context.params
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const data = await response.json()
    //console.log('Calling getStaticProps for', postId);
    if(!data.id) {
        return {notFound: true}//when data not found returns page not found redirection
    }
    return {
        props: {
            product: data
        },
        revalidate: 12
    }
}
