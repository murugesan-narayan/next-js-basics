import React from 'react'
import Link from 'next/link'

function ProductList({products}) {
    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h2>Product List</h2>
            <ul>
            {
                products.map(product=> <li key={product.id}>
                    <Link href={`/products/${product.id}`} passHref>{product.title}</Link></li>)
            }
            </ul>
        </div>
    )
}

export default ProductList

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    //console.log(data);
    //console.log('Calling getStaticProps to get products');
    return {
        props: {
            products: data
        },
        revalidate: 12
    }
}
