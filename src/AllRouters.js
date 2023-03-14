import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Question/Questions'
import Askquestion from './pages/AskQuestion/Askquestion'
import DisplayQuestions from './pages/Question/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const AllRouters = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<Askquestion />} />
        <Route path='/Questions/:id' element={<DisplayQuestions />} />
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserProfile />} />
      </Routes>

    </div>
  )
}

export default AllRouters

