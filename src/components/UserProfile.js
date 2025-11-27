import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import VerticalAd from './VerticalAd';

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    if (!auth.currentUser) {
      navigate('/login');
      return;
    }

    try {
      // Get user profile
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        setUserProfile(userDoc.data());
      }

      // Get enrolled courses
      const coursesRef = collection(db, 'users', auth.currentUser.uid, 'enrolledCourses');
      const coursesSnap = await getDocs(coursesRef);
      const courses = [];
      coursesSnap.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      setEnrolledCourses(courses);
      setLoading(false);
    } catch (error) {
      console.error('Error loading profile:', error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      alert('Error logging out: ' + error.message);
    }
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading profile...</div>;
  }

  if (!userProfile) {
    return <div style={{ padding: '20px' }}>User profile not found.</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr 160px',
      gap: '20px',
      padding: '20px',
      minHeight: '100vh'
    }}>
      {/* Left Ad */}
      <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
        <VerticalAd position="left" />
      </div>

      {/* Main Content */}
      <div style={{ minWidth: 0, maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            color: 'white',
            fontWeight: 'bold',
            marginRight: '20px'
          }}>
            {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h1 style={{ margin: '0 0 5px 0' }}>{userProfile.name}</h1>
            <p style={{ margin: 0, color: '#666' }}>{userProfile.email}</p>
          </div>
        </div>

        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2>Profile Information</h2>
          <p><strong>Occupation:</strong> {userProfile.occupation || 'Not specified'}</p>
          <p><strong>Education Level:</strong> {userProfile.education || 'Not specified'}</p>
          <p><strong>Interests:</strong> {userProfile.interests || 'Not specified'}</p>
          <p><strong>Member Since:</strong> {new Date(userProfile.joinedDate).toLocaleDateString()}</p>
          <p><strong>Courses Completed:</strong> {userProfile.totalCoursesCompleted || 0}</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Enrolled Courses ({enrolledCourses.length})</h2>
          {enrolledCourses.length === 0 ? (
            <p>You haven't enrolled in any courses yet.</p>
          ) : (
            <div>
              {enrolledCourses.map((course) => (
                <div key={course.id} style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0' }}>{course.courseName}</h3>
                    <p style={{ margin: 0, color: '#666' }}>
                      Progress: {course.progress || 0}% |
                      Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    {course.completed ? (
                      <span style={{ color: 'green', fontWeight: 'bold' }}>✓ Completed</span>
                    ) : (
                      <span style={{ color: 'orange', fontWeight: 'bold' }}>In Progress</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: '12px 24px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Logout
        </button>
      </div>

      {/* Right Ad */}
      <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
        <VerticalAd position="right" />
      </div>
    </div>
  );
}

export default UserProfile;
