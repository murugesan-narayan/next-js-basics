import React, {useState, useEffect} from 'react'
import { signIn, getSession, useSession } from 'next-auth/client'

/**
 * client side rendering with useState and useEffect.
 */
function Dashboard() {
    const [session, authLoading] = useSession()
    console.log(session, authLoading)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    useEffect(() => {

        //check if signed in
        const securedPage = async() => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setLoading('false')
            }
        }
        securedPage()

        async function fetchData(){
            const response = await fetch('http://localhost:4000/dashboard/')
            const data = await response.json()
            setData(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    if(loading) return <div>Loading</div>
    return (
        <div>
            <h2>Dashboard Page</h2>
            <h3>Posts - {data.posts}</h3>
            <h3>Likes - {data.likes}</h3>
            <h3>Followers - {data.followers}</h3>
            <h3>Following - {data.following}</h3>
        </div>
    )
}

export default Dashboard
