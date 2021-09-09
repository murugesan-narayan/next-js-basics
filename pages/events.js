import React,{useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function Events({eventsList}) {
    const router = useRouter()
    const [events, setEvents] = useState(eventsList)
    const fetchEvents = async (cat)=>{
        const response = await fetch(`http://localhost:4000/events?category=${cat}`)
        const data = await response.json()
        setEvents(data)
        router.push(`/events?category=${cat}`, undefined, {shallow: true})
    }
    return (
        <div>
            <Link href='/'>Back to Home</Link><br/><br/>
            Filter: <button onClick={()=>fetchEvents('sports')}>Sports</button> 
            <button onClick={()=>fetchEvents('technology')}>Technology</button> 
            <button onClick={()=>fetchEvents('food')}>Food</button> 
            <button onClick={()=>fetchEvents('art')}>Art</button>
            <h2>Events List</h2>
            <ul>
            {
                events.map(event=> <li key={event.id}>
                    {event.category} | {event.date}
                    <p>{event.title}: {event.description}</p><hr/>
                    </li>)
            }
            </ul>    
        </div>
    )
}

export default Events

export async function getServerSideProps(context) {
    const {category} = context.query
    //console.log(category)
    const qryStr = category ? `?category=${category}` : ''
    //console.log(qryStr)
    const response = await fetch(`http://localhost:4000/events${qryStr}`)
    const data = await response.json()
    //console.log('Calling getServerSideProps to get events');
    return {
        props: {
            eventsList: data
        }
    }
}