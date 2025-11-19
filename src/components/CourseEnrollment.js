import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function CourseEnrollment() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate('/profile');
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async () => {
    if (!name || !email || !password || !occupation || !education) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      
      await setDoc(doc(db, 'users', userId), {
        email: email,
        name: name,
        occupation: occupation,
        education: education,
        interests: interests,
        joinedDate: new Date().toISOString(),
        totalCoursesCompleted: 0,
        totalTimeSpent: 0
      });
      
      alert('Account created successfully! Welcome ' + name);
      navigate('/profile');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully!');
      navigate('/profile');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          {isLogin ? 'Welcome Back!' : 'Join ScratchForge'}
        </h1>
        
        {!isLogin && (
          <>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '12px', margin: '0 0 15px 0', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
            />

            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Occupation *</label>
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '12px', margin: '0 0 15px 0', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
            >
              <option value="">Select your occupation</option>
              <option value="Student">Student</option>
              <option value="Professional">Working Professional</option>
              <option value="Teacher">Teacher/Educator</option>
              <option value="Engineer">Engineer</option>
              <option value="Other">Other</option>
            </select>

            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Education Level *</label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '12px', margin: '0 0 15px 0', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
            >
              <option value="">Select your education</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Self-taught">Self-taught</option>
            </select>

            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>What interests you?</label>
            <input
              type="text"
              placeholder="E.g., Electronics, Programming, Arduino"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '12px', margin: '0 0 15px 0', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </>
        )}
        
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email *</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '12px', margin: '0 0 15px 0', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password *</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '12px', margin: '0 0 20px 0', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        
        <button 
          onClick={isLogin ? handleLogin : handleSignup}
          style={{ width: '100%', padding: '14px', fontSize: '18px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isLogin ? 'Login' : 'Create Account'}
        </button>
        
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: '#4CAF50', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CourseEnrollment;
