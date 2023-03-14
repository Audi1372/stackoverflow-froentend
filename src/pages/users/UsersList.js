import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import './users.css'
const UsersList = () => {
    const users = useSelector((state) => (state.usersReducer));
    console.log(users)
    return (
        <div className='userList-conatiner'>

            {
                users.map((user) => {
                    return (
                        <User user={user} key={user?._id} />

                    )
                })}



        </div>
    )
}

export default UsersList
