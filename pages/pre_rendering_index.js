import React from 'react'
import Link from 'next/link'

function Home() {
    return (
        <div>
            <h2>Pre rendering home page</h2>
            <Link href='/users'>Users</Link><br/>
            <Link href='/posts'>Posts</Link><br/>
            <Link href='/products'>Products</Link><br/>
            <Link href='/news'>News</Link><br/>
            <Link href='/events'>Events</Link>
        </div>
    )
}

export default Home
