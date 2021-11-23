import { getSession, useSession } from 'next-auth/client'
import React from 'react'

function BlogWithAuth({ data }) {
  const [session] = useSession()
  //console.log(session)
  //console.log('data', data)
  return (
    <div>
      <h2>Blog with Auth Page.</h2>
      <div>{data}</div>
      <div>
        With Next, you have a few different options when it comes to page
        rendering: you can choose to do it “on-demand” (server-side rendering)
        or ahead of time (static site generation). I have opted to build all the
        blog posts ahead of time, when the site is generated.
      </div>
    </div>
  )
}

export default BlogWithAuth

export async function getServerSideProps(context) {
  const session = await getSession(context)
  //console.log('BlogWithAuth:getServerSideProps:',session)
  if (!session) {
    return {
      redirect: {
        destination:
          '/api/auth/signin?callbackUrl=http://localhost:3000/blog/blog-auth',
        permanent: false,
      },
    }
  }
  return {
    props: {
      session,
      data: session ? 'List of personalized blogs' : 'List of free blogs',
    },
  }
}
