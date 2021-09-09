import React from 'react'
import useSWR from 'swr'

const fetcher = async function(){
    const response = await fetch('http://localhost:4000/dashboard/')
    const data = await response.json()
    return data
}

/**
 * client side rendering with useSWR react hook.
 * This is simpler than normal react hook, and also updates the data
 * when there is any change, even without refreshing data.
 */
function DashboardSwr() {
    const {data, error} = useSWR('dashboard', fetcher)
    if(error) return <div>Error has occoured</div>
    if(!data) return <div>Loading</div>
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

export default DashboardSwr
