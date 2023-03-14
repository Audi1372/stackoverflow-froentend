import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import stack from '../../images/stack.png';
import search from '../../images/search.png';
import Avatar from '../Avatar/Avatar';
import './navbar.css'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';
// import decode from 'jwt-decode'
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const User = useSelector(state => (state.currentUserReducer));

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }



  useEffect(() => {
    // const token = User?.token
    // if (token) {
    //   const decodeToken = decode(token)
    //   if (decodeToken.exp * 1000 < new Date().getTime()) {
    //     handleLogout()
    //   }
    // }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])




  return (
    <nav className='main-nav' style={{ width: "100%", paddingTop: "30px" }}>
      <div className='navbar' >
        <Link to='/' className='nav-item nav-logo'>
          <img src={stack} alt='logo1' width={200} />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For teams</Link>

        <form>
          <input type="text" placeholder='Search....' />
          <img src={search} alt='search' width={18} className="search-icon " />
        </form>
        {User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
          <>
            <Avatar backgroundColor='#820000' px='10px' py='7px' borderRadius='50%' color='white'><Link to={`/Users/${User?.result._id}`} style={{ color: 'white', textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}
            </Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>
        }
      </div>
    </nav>

  )
}

export default Navbar
