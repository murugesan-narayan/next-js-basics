import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

/**
 * Dynamic route always try to match exact file match
 * in case not found, will route it to dynamic.
 */
function ProductDetail(props) {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>
            <Link href='/product'>Back to Products</Link>
            <h2>Product Detail {productId}</h2>
        </div>
    )
}

export default ProductDetail
