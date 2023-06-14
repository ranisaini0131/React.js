import React from 'react'
import { useParams } from 'react-router-dom'

const UsersDetail = () => {
    const params = useParams()
    const { userId } = params
    return (
        <div>
            Details about user {userId}
        </div>
    )
}

export default UsersDetail