import React from 'react'
import { Link, useParams } from 'react-router-dom';
import moment from 'moment'
import Avatar from '../../components/Avatar/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAnswer } from '../../actions/question';


const Displayanswer = ({ question, handleShare }) => {
    const User = useSelector((state) => (state.currentUserReducer));
    const { id } = useParams();
    const dispatch = useDispatch();



    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
    }


    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className='display-ans' key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div className='btn-class'>
                                <button type='button' className='btns' onClick={handleShare}>Share</button>
                                {
                                    User?.result?._id === ans?.userId && (
                                        <button type='button' className='btns' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>

                                    )
                                }
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${question.userId}`} classname='user-link' style={{ color: '#BFDB38', textDecoration: 'none' }}>
                                    <Avatar backgroundColor='green' px='3px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                )
                )
            }
        </div>)
}
export default Displayanswer
