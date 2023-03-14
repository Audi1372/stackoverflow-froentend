import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar'
import { FaBirthdayCake, FaPen } from 'react-icons/fa';
import moment from 'moment'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'



const UserProfile = () => {
    const [Switch, setSwitch] = useState(false);

    const users = useSelector(state => state.usersReducer);
    const { id } = useParams();
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    console.log(currentProfile)
    console.log(currentUser);

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <section>
                    <div className='user-details-container' marginTop='50px'>
                        <div className='user-details'>
                            <Avatar backgroundColor='purple' color='white' fontSize='50px' px='40px' py='30px' borderRadius='2%' >
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className='user-name'>
                                <h1>name:{currentProfile?.name}</h1>
                                <p><FaBirthdayCake /></p>
                                <p>JoinedOn:{moment(currentProfile.joinedOn).fromNow()}</p>
                            </div>
                        </div>

                        {
                            currentUser?.result._id === id && (
                                <button type='button' onClick={() => setSwitch(true)}>Edit profile<span style={{ marginLeft: '20px' }}><FaPen /></span></button>
                            )
                        }
                    </div>
                    <>
                        {
                            Switch ? <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} /> : <ProfileBio currentProfile={currentProfile} />
                        }
                    </>

                </section>
            </div>
            <h1>userprofile page </h1>
        </div>
    )
}

export default UserProfile
