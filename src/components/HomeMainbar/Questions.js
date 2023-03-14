import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Questions = ({ question }) => {
    return (
        <div className='display-question-container'>

            <div className='display-vote-ans' >
                <p>{question.upVote.length - question.downVote.length}</p>
                <p>voted</p>
            </div >
            <div className='display-vote-ans'>
                <p>{question.noOfAnswers}</p>
                <p>answers</p>
            </div>
            <div className='list'>
                <div className='display-question-details'>
                    <Link to={`/Questions/${question._id}`} className='question-link-title' style={{ color: '#DC0000', fontSize: '15px', textDecoration: 'none' }}>{question.questionTitle}</Link>
                </div>


                <div className='display-tags-time'>
                    <div className='display-tags'>
                        {
                            question.questionTags.map((tag) => {
                                return (
                                    <p className='tags' key={tag} >{tag}</p>
                                )
                            })
                        }
                    </div>
                    <div />
                </div>
            </div>
            <div className='display-user'>
                <p className='display-time' style={{ color: '#3330E4', fontSize: '12px', textDecoration: 'none' }}>
                    Asked <br />{moment(question.postedOn).fromNow()} <br />{question.userPosted}
                </p>
            </div>

        </div>






    )
}

export default Questions
