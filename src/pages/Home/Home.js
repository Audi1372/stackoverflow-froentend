import React from 'react'
import '../../App.css'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Home = () => {
    return (

        <div className='home-container-1'>
            <div className='fixed-width' id='left-side' style={{ width: "100%", paddingTop: "30px" }}>
                <LeftSidebar />
            </div>
            <div className='fixed-width' id='middle' style={{ width: "100%", paddingTop: "30px" }}>
                <HomeMainbar />
            </div>
            <div className='fixed-width' id='right-side' style={{ width: "100%", paddingTop: "30px" }}>
                <RightSidebar />
            </div>
        </div >

    )
}

export default Home
