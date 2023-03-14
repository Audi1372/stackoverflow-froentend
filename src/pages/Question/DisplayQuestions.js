import React from 'react'
import LeftSidebar from '../../components/Leftsidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
const DisplayQuestions = () => {
    return (

        <div className='home-container-1'>


            <div className='fixed-width' id='left-side' style={{ width: "100%", paddingTop: "30px" }}>
                <LeftSidebar />
            </div>
            <div className='fixed-width' id='middle' style={{ width: "100%", paddingTop: "30px" }}>
                <QuestionDetails />

            </div>
            <div className='fixed-width' id='right-side' style={{ width: "100%", paddingTop: "30px" }}>
                <RightSidebar />
            </div>


        </div>
    )
}

export default DisplayQuestions
