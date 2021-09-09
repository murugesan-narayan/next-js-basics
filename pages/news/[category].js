import React from 'react'
//import {useRouter} from 'next/router'
import Link from 'next/link'


function NewsByCategory({newsList, category}) {
    //const router = useRouter()
    //const {category} = router.query
    return (
        <div>
            <Link href='/news'>Back to News</Link>
            <h2>{category.toUpperCase( )} NEWS</h2>
            <ul>
            {
                newsList.map(news=> <li key={news.id}>
                    {news.title}<p style={{border: 1, borderStyle: 'dotted'}}>{news.description}</p></li>)
            }
            </ul>
        </div>
    )
}

/**
 * calls every time request comes,
 * generates data and sent it to the UI
 */
 export async function getServerSideProps(context) {
    const {params, req, res, query} = context
    //console.log(req.headers.cookie)
    //res.setHeader('Set-Cookie', ['Name=Peter Sands'])
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    //console.log('Calling getServerSideProps to get news for', category);
    //console.log(data)
    return {
        props: {
            newsList: data,
            category
        }
    }
}

export default NewsByCategory
