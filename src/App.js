import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from "./components/Home";
import Course from "./components/Course";
import CourseEnrollment from './components/CourseEnrollment';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import ExploreCourses from './components/ExploreCourses';
import PracticeArena from './components/PracticeArena';
import { coursesArray } from "./courses";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="app">
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '15px 30px',
          backgroundColor: '#2c3e50',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: 0, color: 'white', fontSize: '24px' }}>ScratchForge</h1>
          
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            gap: '10px',
            alignItems: 'center'
          }}>
            <li>
              <Link to="/" style={{
                color: 'white',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                transition: 'background 0.3s'
              }}>
                🏠 Home
              </Link>
            </li>
            
            {user && (
              <li>
                <Link to="/dashboard" style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  transition: 'background 0.3s'
                }}>
                  📊 Dashboard
                </Link>
              </li>
            )}

            <li>
              <Link to="/explore" style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'background 0.3s'
              }}>
                🔍 Explore All Courses
              </Link>
            </li>

            <li>
              <Link to="/practice" style={{
                backgroundColor: '#2196F3',
                color: 'white',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'background 0.3s'
              }}>
                💡 Practice Arena
              </Link>
            </li>
            
            {user ? (
              <li>
                <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    backgroundColor: '#FF9800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: '2px solid white'
                  }}>
                    {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                  </div>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" style={{
                  backgroundColor: '#FF9800',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontWeight: 'bold'
                }}>
                  Login/Signup
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<CourseEnrollment />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<ExploreCourses />} />
          <Route path="/practice" element={<PracticeArena />} />
          <Route path="/course/:courseId" element={<Course />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
