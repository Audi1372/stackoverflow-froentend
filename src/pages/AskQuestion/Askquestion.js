import React, { useState } from 'react'
import './askquestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'



const Askquestion = () => {
    const User = useSelector((state) => (state.currentUserReducer))
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setQuestionTags] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(questionTitle, questionBody, questionTags)
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result._id }, navigate))

    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + '/n')
        }
    }


    return (
        <div className='ask-question' style={{ width: "100%", paddingTop: "30px" }}>
            <div className='ask-question-container' style={{ width: "70%", paddingTop: "30px" }}>
                <h1>Ask a public question</h1>
                <form onSubmit={handleSubmit}>
                    {/* <h1>{ questionBody}</h1> */}
                    <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imagine you’re asking a question to another person.</p>
                            <input style={{ width: "100%", paddingTop: "30px" }} type='text' id='ask-ques-title' onChange={(e) => { setQuestionTitle(e.target.value) }} placeholder='e.g is there an R function for finding the index of an element in avector?' />
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
                            </p>
                            <textarea style={{ width: "100%", paddingTop: "30px" }} className='textarea' id='ask-question-body' onKeyDown={handleEnter} onChange={(e) => { setQuestionBody(e.target.value) }} cols='30' rows='' />
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add up to 3 tags to describe what your question is about. Start typing to see suggestions.
                            </p>
                            <input style={{ width: "100%", paddingTop: "30px" }} type='text' id='ask-ques-title' onChange={(e) => { setQuestionTags(e.target.value.split(' ')) }} placeholder='' />
                        </label>
                    </div>
                    <input type='submit' value='Review your question' className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default Askquestion
