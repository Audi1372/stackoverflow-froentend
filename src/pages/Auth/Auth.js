import React, { useState } from 'react'
import './Auth.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup, login } from '../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
const Auth = () => {
    const [isSignup, setisSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSwitch = () => {
        setisSignup(!isSignup)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!email) || (!password)) {
            console.log('audi')
            toast.warn('required field is missing')
            alert('required field is missing')

        }

        if (isSignup) {
            if (!name) {
                alert('required field is missing')
                toast.warn('required field is missing')


            }
            dispatch(signup({ name, email, password }, navigate))
        }
        else {
            dispatch(login({ email, password }, navigate))
        }
        console.log(name, password, email)

    }


    return (
        <section className='auth-section' style={{ width: "100%", paddingTop: "30px" }}>
            <ToastContainer />
            <div className='auth-container'>
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type='text' id='name' onChange={(e) => { setName(e.target.value) }} />
                            </label>)}
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <h4>passwoord</h4>
                            <input type='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
                            {isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>forgotpassword</p>}
                        </div>
                        {isSignup && <p style={{ fontSize: '10px' }} className='caution'>Password must contain at least 8 charecters.Including 1 letter and1 symbol. </p>}
                    </label>
                    {isSignup && (
                        <label htmlFor='check' id='check'>
                            <input type='checkbox' id='check' className='check' />
                            <p style={{ fontSize: '10px' }}>
                                0pt-in to receive occasional,
                                product updates user research invitations company announcement,and digests
                            </p>
                        </label>

                    )
                    }
                    <button className='auth-btn' type='submit' >{isSignup ? 'sign up' : 'Log in'}</button>
                    {
                        isSignup &&
                        <p style={{ color: '#666767', fontSize: '10px' }}>
                            By clicking 'Sign up' you agree to our
                            <span style={{ color: '#007ac6' }}>terms of<br />services</span>
                            <span style={{ color: '#007ac6' }}>privacy policy<br />and</span>
                            <span style={{ color: '#007ac6' }}> cookie policy<br /></span>
                        </p>}
                </form>

                {/* <button type='button' onClick={handleSwitch} className=''>Submit</button> */}
                {isSignup ? <p style={{ fontSize: '12px' }} >Already have an account?
                    <span onClick={handleSwitch} style={{ color: '#007ac6' }}>login</span>
                </p> : <p style={{ fontSize: '12px' }} onClick={handleSwitch}>don't have an account</p>}

            </div>

        </section>
    )
}

export default Auth
