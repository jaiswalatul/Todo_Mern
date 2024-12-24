import logo from './logo.svg';
import './App.css';
import Navabar from './components/Navabar';
import Home from './components/Home';
import Footer from './components/footer/Footer';
import About from './components/About/About';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup/Signup';
import SignIn from './components/Signup/SignIn';
import Todo from './components/Todo/Todo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {authActions, useActions} from "../src/components/Store_redux"

function App() {
  const dispatch=useDispatch();

  useEffect(() => {
       if(sessionStorage.getItem("id")){
        dispatch(authActions.login());
       }

      console.log(sessionStorage.getItem)
  }, [])
  
  return (
    <div className="App">
    
     <Router>
     <Navabar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/todo' element={<Todo/>}/>

      </Routes>
     </Router>

    
     
     <Footer/>
    </div>
  );
}

export default App;
