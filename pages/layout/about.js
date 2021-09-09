import React from 'react'
import Footer from '../../components/layout/Footer'
import Head from 'next/head'

function About() {
    return (
        <>
        <Head>
            <title>Next JS Tutorials</title>
            <meta name='description' content='Codereveloution youtube channel tutorials'></meta>
        </Head>
        <div className='content'>
            <h3>Layout About Content Page</h3>
        </div>
        </>
    )
}

export default About

About.getLayout = function(page){
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}
