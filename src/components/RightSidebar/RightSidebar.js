import React from 'react'
import './rightsidebar.css'
import Widget from './Widget'
import Widgetags from './Widgetags'
const RightSidebar = () => {
    return (
        <div className='right-sidebar' style={{ width: "50%", paddingTop: "30px" }}>
            <Widget />
            <Widgetags />
        </div>
    )
}

export default RightSidebar
