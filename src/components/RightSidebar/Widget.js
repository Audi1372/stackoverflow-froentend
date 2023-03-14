import React from 'react';
import './rightsidebar.css'
// import comment from '../RightSidebar/comment-alt-solid.svg'
import pen from '../RightSidebar/pen-solid.svg'
import blacklogo from '../RightSidebar/blacklogo.png'
const Widget = () => {
    return (
        <div className='widget'>

            <h4>The overflow blog</h4>
            <div className='right-sidebar-div-1'>
                <ul className='list'>
                    <li style={{ listStyleType: "none" }}>
                        <div className='right-sidebar-div-2'>
                            <p>
                                <img src={pen} alt='pen' width='12' /><span>You don’t have to build a browser in JavaScript anymore (Ep. 538)</span>
                            </p>
                        </div>
                    </li>
                    <li style={{ listStyleType: "none" }}>
                        <div className='right-sidebar-div-2'>
                            <p>
                                <img src={pen} alt='pen' width='12' />
                                <span>Coding 102: Writing code other people can read</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <ul className='list'>
                    <li style={{ listStyleType: "none" }}>

                        <div className='right-sidebar-div-2'>
                            <p>
                                <img src={blacklogo} alt='pen' width='15' />
                                <span> Should we burninate the [amazon] tag?</span>
                            </p>
                        </div>
                    </li>
                    <li style={{ listStyleType: "none" }}>

                        <div className='right-sidebar-div-2'>
                            <p>
                                <img src={blacklogo} alt='pen' width='15' />
                                <span>Temporary policy: ChatGPT is banned</span>
                            </p>
                        </div>
                    </li>
                    <li style={{ listStyleType: "none" }}>
                        <div className='right-sidebar-div-2'>
                            <p>
                                <img src={blacklogo} alt='pen' width='15' />
                                <span>We’ve made changes to our Privacy Notice for Collectives™</span>
                            </p>
                        </div>
                    </li>
                    <li style={{ listStyleType: "none" }}>
                        <div className='right-sidebar-div-2'>
                            <p>
                                <img src={blacklogo} alt='pen' width='15' />
                                <span> Collectives: The next iteration</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div >
        </div>
    )
}

export default Widget
