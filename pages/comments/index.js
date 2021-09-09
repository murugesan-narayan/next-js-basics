import React, {useState} from 'react'

function Comments() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
    const addComments = async (e) => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        setComment('')
        fetchComments()
    }
    const deleteComment = async (commentId)=> {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }
    return (
        <div>
            <input value={comment} onChange={(e)=>setComment(e.target.value)}></input>
            <button onClick={addComments}>Add Comment</button>

            <button onClick={fetchComments}>Load Comments</button>
            
            <ol>
            {comments.map(comment => {
                return <li key={comment.id}>{comment.comment} 
                <button onClick={()=>deleteComment(comment.id)}>Delete</button></li>
            })}
            </ol>
        </div>
    )
}

export default Comments
