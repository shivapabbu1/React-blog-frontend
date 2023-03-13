import React from 'react';
import './App.css';
import Header from './Comp/Header';
import BlogRouter from './Comp/BlogRouter';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
 <Header/>
      <div className='nav'>

       <Link to="/Home"><li>Home</li></Link>
        <Link to="/Bollywood"><li>BOLLYWOOD</li></Link>
        <Link to="/Hollywood"><li>Hollywood</li></Link>
        <Link to="/food"><li>food</li></Link>
        <Link to="/technology"><li>technology</li></Link>
        <Link to="/fitness"><li>fitness</li></Link>
        
        </div>
      <BlogRouter/>
    
    </>
  );
}

export default App;
