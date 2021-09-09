import React from 'react'
import Link from 'next/link'


function NewsList({newsList}) {
    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h2>News Article List</h2>
            <ol>
            {
                newsList.map(news=> <li key={news.id}>
                    <Link href={`/news/${news.category}`} passHref>{news.title}</Link></li>)
            }
            </ol>
        </div>
    )
}

export default NewsList

/**
 * calls every time request comes,
 * generates data and sent it to the UI
 */
export async function getServerSideProps() {
    const response = await fetch(`http://localhost:4000/news/`)
    const data = await response.json()
    //console.log('Calling getServerSideProps to get news');
    return {
        props: {
            newsList: data
        }
    }
}
