import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRouters from './AllRouters';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';
function App() {

  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())

  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRouters />
      </Router>
    </div>
  );
}

export default App;  
