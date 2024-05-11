import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './styles.css';
import BookBrowse from './components/BookBrowse';
import Navbar from './components/Navbar'; 
import LoginForm from './forms/LoginForm';
import Home from './components/Home';
// Updated import statement
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/allBooks" element={<BookBrowse/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

