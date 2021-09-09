import React from 'react'

function UserDetail({user}) {
    return (
        <div>
            {user.name} - {user.email}
        </div>
    )
}

export default UserDetail
