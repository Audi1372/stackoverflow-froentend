import React from 'react'
import './homemainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Questionlist from './Questionlist'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()
    const questionList = useSelector(state => state.questionReducer);



    const checkauth = () => {
        if (user === null) {
            alert('need to login')
            navigate('/Auth')
        }
        else {
            navigate('/AskQuestion')
        }
    }
    return (
        <div className='main-bar' style={{ width: "100%", paddingTop: "30px" }}>
            <div className='main-bar-header'>
                {location.pathname === '/' ? <h1>Top Question</h1> : <h1>All   Questions</h1>}
                <button className='ask-btn' onClick={checkauth}>Ask Question</button>
            </div>
            {questionList.data === null ?
                <h1>loading.....</h1> : <>
                    <p>{questionList.data.length}questions</p>
                    <Questionlist questionList={questionList.data} />
                </>}



        </div>
    )
}

export default HomeMainbar
