import React from 'react';
import './leftsidebar.css'
import { NavLink } from 'react-router-dom'
import globe from '../../images/globe.jpg'
const LeftSidebar = () => {
    return (
        <div className='left-sidebar' style={{ width: "50%", paddingTop: "30px" }}>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClassName='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <p>PUBLIC</p>
                </div>
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active' style={{ paddingLeft: '20px' }}>
                    <img src={globe} width={20} alt='globe' />
                    <p style={{ paddingLeft: '2px' }}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{ paddingLeft: '30px' }}>
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClassName='active' style={{ paddingLeft: '30px' }}>
                    <p>User</p>
                </NavLink>

            </nav>


        </div>
    )
}

export default LeftSidebar
