import React from 'react'
import Link from 'next/link'

function PageNotFound() {
    return (
        <div>
            <Link href='/'>Back to Home</Link>

            <p style={{color:'brown'}}>Page you have request is not found.<br />
            Plesae contact customer service if URL is correct.</p>
        </div>
    )
}

export default PageNotFound
