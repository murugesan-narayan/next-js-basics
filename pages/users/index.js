import React from 'react'
import UserDetail from '../../components/user'
import Link from 'next/link'

function UserList({users}) {
    return (
        <div>
            <Link href='/'>Back to Home</Link>
            <h2>User List</h2>
            <ol>
            {users.map(user=><li key={user.id}><UserDetail user={user}/></li>)}
            </ol>
        </div>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    const data =  await response.json()
    //console.log(data)
    return {
        props: {
            users: data
        }
    }
}
