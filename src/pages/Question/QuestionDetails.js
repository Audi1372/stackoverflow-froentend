import React, { useState } from 'react'
import upvote from './upvote.png'
import downvote from './downvote.png'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import './question.css'
import Avatar from '../../components/Avatar/Avatar'
import Displayanswer from './Displayanswer'
import { useSelector, useDispatch } from 'react-redux'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard';


const QuestionDetails = () => {
    const { id } = useParams()
    console.log(id)
    // var questionList = [{
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 4,
    //     questionTitle: 'Linux Replacing range of blanks in a file with while leaving the single blanks between titles and data values alone using Regex?',
    //     questionBody: 'It meant to be linkux using problem',
    //     questionTags: ['java', 'react', 'javascript', 'linux'],
    //     userPosted: 'mano',
    //     askedOn: 'jan 1',
    //     userId: 1,
    //     answer: [{
    //         answerBody: 'my answers is this to go for pdf ',
    //         userAnswered: 'audi',
    //         answeredOn: 'jan 2',
    //         userId: 2
    //     }]
    // },
    // {
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 9,
    //     questionTitle: 'It seems the weak reference to the function Foo.bar is not destroyed when the strong reference is destroyed, why?',
    //     questionBody: 'It meant to be',
    //     questionTags: ['java', 'react js', 'nodeJS', 'javascript', 'linux'],
    //     userPosted: 'audi',
    //     askedOn: 'jan 10',
    //     userId: 2,
    //     answer: [{
    //         answerBody: 'Answer',
    //         userAnswered: 'lakshmi',
    //         answeredOn: 'jan 2',
    //         userId: 3
    //     }]
    // },
    // {
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 5,
    //     questionTitle: 'Test one detail page of django website using TestCase',
    //     questionBody: 'It meant to be',
    //     questionTags: ['java', 'react js', 'nodeJS', 'Django', 'javascript', 'linux'],
    //     userPosted: 'lakshmi',
    //     askedOn: 'jan 10',
    //     userId: 3,
    //     answer: [{
    //         answerBody: 'Answer',
    //         userAnswered: 'mano',
    //         answeredOn: 'jan 2',
    //         userId: 1
    //     }]
    // }]
    const [Answer, setAnswer] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation();
    const url = 'http://localhost:3000'
    const User = useSelector((state) => (state.currentUserReducer));
    const questionList = useSelector((state) => (state.questionReducer));


    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if (User === null) {
            alert('Login or Signup to answer a question  before submitting')
            navigate('/Auth')
        } else {
            if (Answer === '') {
                alert('Enter an answer before submitting')
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
            }
        }
    }


    const handleShare = () => {
        copy(url + location.pathname)
        alert('Copied url:' + url + location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate))
    }
    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }

    return (
        <div className='question-details-page'>
            {questionList.data === null ? <h1>Loading...</h1> :
                <>
                    {
                        questionList.data.filter(question => question._id === id).map(question => (
                            <div key={question._id}>
                                <section className='fixed-width'>
                                    <div className='question-details-container'>
                                        <h3>{question.questionTitle}</h3>
                                        <hr />
                                        <div className='fixed-width'>
                                            <div className='question-details-container-2'>
                                                <div className='question-votes'>
                                                    <img src={upvote} alt='' width='40' onClick={handleUpVote} />
                                                    <p>{question.upVote.length - question.downVote.length}</p>
                                                    <img src={downvote} alt='' width='25' onClick={handleDownVote} />
                                                </div>
                                                <div style={{ width: '100%' }}>
                                                    <p className='question-body'>{question.questionBody}</p>
                                                    <div className='questions-details-tags'>
                                                        {question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))}
                                                    </div>
                                                    <div className='question-actions-user'>
                                                        <div className='btn-class'>
                                                            <button type='button' className='btns' onClick={handleShare}>Share</button>
                                                            {
                                                                User?.result?._id === question?.userId && (
                                                                    <button type='button' className='btns' onClick={handleDelete}>Delete</button>

                                                                )
                                                            }
                                                        </div>
                                                        <div className='user'>
                                                            <p>postedon{moment(question.postedOn).fromNow()}</p>
                                                            <Link to={`/User/${question.userId} `} classname='user-link' style={{ color: '#BFDB38', textDecoration: 'none' }}>
                                                                <Avatar backgroundColor='orange' px='2px' py='8px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                                <div>
                                                                    {question.userPosted}
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </section>

                                {
                                    question.noOfAnswers !== 0 && (
                                        <section className='fixed-width'>
                                            <div className='question-details-container'>
                                                <h3>{question.noOfAnswers}answers</h3>
                                                <Displayanswer key={question._id} question={question} handleShare={handleShare} />
                                            </div>
                                        </section>
                                    )
                                }

                                <section className='fixed-width' id='post-ans-container'>
                                    <div className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form onSubmit={(e) => { handlePostAns(e, question.answer.length) }}>
                                            <textarea style={{ width: "80%", paddingTop: "30px" }} name='' id='' rows='10' cols='87' onChange={e => setAnswer(e.target.value)}></textarea>
                                            <input type='Submit' className='post-ans-btn' value='Post your answer' />
                                        </form>
                                        <p className='question-details-tags'>
                                            Browse other Question taged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                                )
                                                )}  or
                                            <Link to='/AskQuestions' style={{ textDecoration: 'none', color: '#009dff' }}>ask your own question</Link>

                                        </p>
                                    </div>

                                </section>
                            </div>))

                    }
                </>
            }
        </div>

    )
}

export default QuestionDetails
