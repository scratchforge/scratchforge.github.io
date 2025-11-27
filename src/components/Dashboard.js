import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { coursesArray } from '../courses';
import VerticalAd from './VerticalAd'; // Make sure the path is correct

function Dashboard() {
  const [userProfile, setUserProfile] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [stats, setStats] = useState({
    totalEnrolled: 0,
    completed: 0,
    inProgress: 0,
    totalProgress: 0
  });
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboard();
    // eslint-disable-next-line
  }, []);

  const loadDashboard = async () => {
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

      // Calculate stats
      const completed = courses.filter(c => c.completed).length;
      const inProgress = courses.filter(c => !c.completed).length;
      const totalProgress = courses.reduce((sum, c) => sum + (c.progress || 0), 0) / (courses.length || 1);

      setStats({
        totalEnrolled: courses.length,
        completed: completed,
        inProgress: inProgress,
        totalProgress: Math.round(totalProgress)
      });

      // Get recommended courses (courses not yet enrolled)
      const enrolledIds = courses.map(c => c.courseId);
      const recommended = coursesArray.filter(c => !enrolledIds.includes(c.id));
      setRecommendedCourses(recommended);

      setLoading(false);
    } catch (error) {
      console.error('Error loading dashboard:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading your dashboard...</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr 160px',
      gap: '30px',
      padding: '20px',
      minHeight: '100vh'
    }}>
      {/* Vertical Sidebar Ad on the left */}
      <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
        <VerticalAd position="left" />
      </div>

      {/* Main Dashboard Content */}
      <div style={{ minWidth: 0 }}>
        {/* Top Navigation Bar */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '30px',
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <Link to="/explore" style={{
            flex: 1,
            padding: '15px 25px',
            backgroundColor: '#4CAF50',
            color: 'white',
            textAlign: 'center',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            🔍 Explore All Courses
          </Link>
          <Link to="/practice" style={{
            flex: 1,
            padding: '15px 25px',
            backgroundColor: '#2196F3',
            color: 'white',
            textAlign: 'center',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            💡 Practice Arena
          </Link>
          <Link to="/profile" style={{
            flex: 1,
            padding: '15px 25px',
            backgroundColor: '#FF9800',
            color: 'white',
            textAlign: 'center',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            👤 My Profile
          </Link>
        </div>

        {/* Welcome Section */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ margin: '0 0 10px 0' }}>
            Welcome back, {userProfile?.name || 'Learner'}! 👋
          </h1>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Keep learning and growing your skills
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {/* Total Enrolled */}
          <div style={{
            backgroundColor: '#E3F2FD',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #2196F3'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📚</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1976D2', marginBottom: '5px' }}>
              {stats.totalEnrolled}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Total Courses Enrolled</div>
          </div>

          {/* Completed */}
          <div style={{
            backgroundColor: '#E8F5E9',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #4CAF50'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>✅</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#388E3C', marginBottom: '5px' }}>
              {stats.completed}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Courses Completed</div>
          </div>

          {/* In Progress */}
          <div style={{
            backgroundColor: '#FFF3E0',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #FF9800'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏳</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#F57C00', marginBottom: '5px' }}>
              {stats.inProgress}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>In Progress</div>
          </div>

          {/* Overall Progress */}
          <div style={{
            backgroundColor: '#F3E5F5',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #9C27B0'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📈</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#7B1FA2', marginBottom: '5px' }}>
              {stats.totalProgress}%
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Overall Progress</div>
          </div>
        </div>

        {/* My Courses Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px' }}>My Courses</h2>
          {enrolledCourses.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
                You haven't enrolled in any courses yet
              </p>
              <Link to="/explore" style={{
                padding: '12px 24px',
                backgroundColor: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold'
              }}>
                Explore Courses
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {enrolledCourses.map((course) => (
                <div key={course.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: 'white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px' }}>{course.courseName}</h3>
                    {course.completed ? (
                      <span style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        ✓ COMPLETED
                      </span>
                    ) : (
                      <span style={{
                        backgroundColor: '#FF9800',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        IN PROGRESS
                      </span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '14px', color: '#666' }}>Progress</span>
                      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{course.progress || 0}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${course.progress || 0}%`,
                        height: '100%',
                        backgroundColor: course.completed ? '#4CAF50' : '#2196F3',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>

                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}
                  </p>

                  <Link
                    to={`/course/${course.courseId}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '10px',
                      backgroundColor: '#2196F3',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold'
                    }}
                  >
                    {course.completed ? 'Review Course' : 'Continue Learning →'}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recommended Courses Section */}
        {recommendedCourses.length > 0 && (
          <div>
            <h2 style={{ marginBottom: '20px' }}>Recommended For You 🎯</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {recommendedCourses.slice(0, 3).map((course) => (
                <div key={course.id} style={{
                  border: '2px solid #4CAF50',
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: '#f9fff9'
                }}>
                  <h3 style={{ marginTop: 0, color: '#2E7D32' }}>{course.title}</h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                    {course.description || 'Learn essential skills in this comprehensive course'}
                  </p>
                  <Link
                    to={`/course/${course.id}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '15px',
                      padding: '10px 20px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold'
                    }}
                  >
                    Start Learning →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Vertical Sidebar Ad on the right */}
      <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
        <VerticalAd position="right" />
      </div>
    </div>
  );
}

export default Dashboard;
