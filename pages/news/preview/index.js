import React from 'react'

function News({data}) {
    return (
        <div>
            <h1 className='content'>{data}</h1>
        </div>
    )
}

export default News

export async function getStaticProps(context) {
    console.log('calling getStaticProps...',context.previewData)
    return {
        props: {
            data: context.preview ? 'List of draft Articles' : 'List of published Articles'
        }
    }
}
