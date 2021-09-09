import React from 'react'
import Link from 'next/link'

function ProductList() {
    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h2><Link href='/product/1' replace>Product 1</Link></h2>
            {/* when you set replace, after the navigation back button will move to -2 instead of -1  */}
            <h2><Link href='/product/2'>Product 2</Link></h2>
            <h2><Link href='/product/3'>Product 3</Link></h2>
        </div>
    )
}

export default ProductList
