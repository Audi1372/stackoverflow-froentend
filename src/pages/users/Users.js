import React from 'react'
// import { useLocation } from 'react-router-dom';
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar';
import UsersList from './UsersList';
import './users.css'

const Users = () => {
    // const location = useLocation();
    // console.log(location)
    return (
        <div className='home-container-1'>
            <LeftSidebar />

            <div className='home-container-2'>
                <h1>Users</h1>
                <UsersList />
            </div>



        </div>
    )
}

export default Users
