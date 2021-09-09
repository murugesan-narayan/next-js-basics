import React from 'react'

function Envs({user=''}) {
    return (
        <div>
            <h2>User Variable From Env: {user}</h2>

            <h2>User Variable From Process Env: {process.env.DB_USER}</h2>
            {/* this will disply empty value to avoid non intentional usage */}

            <h2>Public Variables Process Env: {process.env.NEXT_PUBLIC_ANALATICS_ID}</h2>
            {/* this will disply value because it starts with NEXT_PUBLIC_ */}

        </div>
    )
}

export default Envs

export async function getServerSideProps() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(user, password)
    //console.log(process.env)
    return {
        props: {
            user: user
        }
    }
}
