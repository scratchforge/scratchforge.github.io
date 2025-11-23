import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { coursesArray } from '../courses';

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the course
    const foundCourse = coursesArray.find(c => c.id === courseId);
    setCourse(foundCourse);

    // Check if user is logged in
    const currentUser = auth.currentUser;
    setUser(currentUser);

    if (currentUser && foundCourse) {
      checkEnrollment(currentUser.uid, courseId);
    } else {
      setLoading(false);
    }
  }, [courseId]);

  const checkEnrollment = async (userId, courseId) => {
    try {
      const enrollmentRef = doc(db, 'users', userId, 'enrolledCourses', courseId);
      const enrollmentSnap = await getDoc(enrollmentRef);
      setIsEnrolled(enrollmentSnap.exists());
      setLoading(false);
    } catch (error) {
      console.error('Error checking enrollment:', error);
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const enrollmentRef = doc(db, 'users', user.uid, 'enrolledCourses', courseId);
      
      await setDoc(enrollmentRef, {
        courseId: courseId,
        courseName: course.title,
        enrolledDate: new Date().toISOString(),
        progress: 0,
        completed: false,
        lastAccessedDate: new Date().toISOString(),
        timeSpent: 0
      });

      setIsEnrolled(true);
      alert('Successfully enrolled! You can now start learning.');
    } catch (error) {
      alert('Error enrolling: ' + error.message);
    }
  };

  const handleStartLearning = () => {
    navigate(`/course/${courseId}`);
  };

  if (!course) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <Link to="/explore" style={{ color: '#4CAF50' }}>← Back to Courses</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Back Button */}
      <Link to="/explore" style={{ 
        color: '#666', 
        textDecoration: 'none', 
        marginBottom: '20px',
        display: 'inline-block'
      }}>
        ← Back to All Courses
      </Link>

      {/* Course Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '50px 40px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h1 style={{ fontSize: '42px', marginBottom: '15px' }}>{course.title}</h1>
        <p style={{ fontSize: '20px', opacity: 0.9, marginBottom: '25px' }}>
          {course.description || 'Master the fundamentals with comprehensive lessons'}
        </p>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.2)', 
            padding: '10px 20px', 
            borderRadius: '20px'
          }}>
            📚 {course.sessions ? course.sessions.length : 10} Lessons
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.2)', 
            padding: '10px 20px', 
            borderRadius: '20px'
          }}>
            ⏱️ 5+ Hours
          </div>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.2)', 
            padding: '10px 20px', 
            borderRadius: '20px'
          }}>
            🎓 Beginner Level
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Main Content */}
        <div>
          {/* What You'll Learn */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>What You'll Learn 🎯</h2>
            <ul style={{ lineHeight: '2', color: '#666' }}>
              <li>✓ Understand core concepts from scratch</li>
              <li>✓ Build practical skills through hands-on exercises</li>
              <li>✓ Apply knowledge to real-world projects</li>
              <li>✓ Master advanced techniques step-by-step</li>
              <li>✓ Earn a certificate upon completion</li>
            </ul>
          </div>

          {/* Course Content */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Course Content 📋</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              {course.sessions ? course.sessions.length : 10} lessons • 5+ hours of content
            </p>
            
            {course.sessions ? (
              <div>
                {course.sessions.map((session, index) => (
                  <div key={index} style={{
                    padding: '15px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      backgroundColor: '#E3F2FD',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2196F3',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                        {session.title}
                      </div>
                      <div style={{ fontSize: '14px', color: '#999' }}>
                        30 min • Video + Quiz
                      </div>
                    </div>
                    {isEnrolled ? (
                      <span style={{ color: '#4CAF50', fontSize: '14px' }}>✓ Enrolled</span>
                    ) : (
                      <span style={{ color: '#999', fontSize: '14px' }}>🔒 Locked</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {[...Array(10)].map((_, index) => (
                  <div key={index} style={{
                    padding: '15px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}>
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      backgroundColor: '#E3F2FD',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2196F3',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                        Lesson {index + 1}
                      </div>
                      <div style={{ fontSize: '14px', color: '#999' }}>
                        30 min • Video + Quiz
                      </div>
                    </div>
                    {isEnrolled ? (
                      <span style={{ color: '#4CAF50', fontSize: '14px' }}>✓ Enrolled</span>
                    ) : (
                      <span style={{ color: '#999', fontSize: '14px' }}>🔒 Locked</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Requirements */}
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Requirements 📌</h2>
            <ul style={{ lineHeight: '2', color: '#666' }}>
              <li>No prior experience required - perfect for beginners!</li>
              <li>A computer or laptop with internet access</li>
              <li>Enthusiasm to learn and practice</li>
              <li>Approximately 5-10 hours to complete the course</li>
            </ul>
          </div>
        </div>

        {/* Sidebar - Enrollment Card */}
        <div>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            position: 'sticky',
            top: '20px'
          }}>
            <div style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#4CAF50',
              marginBottom: '10px'
            }}>
              Free
            </div>
            <p style={{ color: '#666', marginBottom: '25px' }}>
              Full access to all course content
            </p>

            {loading ? (
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#ccc',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'not-allowed'
              }}>
                Loading...
              </button>
            ) : !user ? (
              // Not logged in - Show Login button
              <Link to="/login" style={{
                display: 'block',
                width: '100%',
                padding: '15px',
                backgroundColor: '#FF9800',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'none'
              }}>
                Login to Enroll →
              </Link>
            ) : isEnrolled ? (
              // Enrolled - Show Start Learning button
              <button
                onClick={handleStartLearning}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Start Learning →
              </button>
            ) : (
              // Logged in but not enrolled - Show Enroll button
              <button
                onClick={handleEnroll}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Enroll Now (Free)
              </button>
            )}

            <div style={{ marginTop: '25px', paddingTop: '25px', borderTop: '1px solid #eee' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#333' }}>This course includes:</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#666', lineHeight: '2' }}>
                <li>📹 Video lessons</li>
                <li>📝 Practice exercises</li>
                <li>🎯 Quizzes & assessments</li>
                <li>📜 Certificate of completion</li>
                <li>⏰ Lifetime access</li>
                <li>📱 Mobile & desktop access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
