import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { isAdmin } from '../utils/adminAuth';

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalEnrollments: 0,
    totalCompletions: 0,
    courseStats: {},
    recentActivity: [],
    doubtStats: {
      total: 0,
      pending: 0,
      answered: 0
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser || !isAdmin(currentUser)) {
        navigate('/');
        return;
      }
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user && isAdmin(user)) {
      loadAdminStats();
    }
  }, [user]);

  const loadAdminStats = async () => {
    try {
      setLoading(true);

      // Get all users
      const usersSnap = await getDocs(collection(db, 'users'));
      const totalUsers = usersSnap.size;

      // Calculate active users (accessed in last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      let activeUsers = 0;

      // Get enrollment and completion data
      let totalEnrollments = 0;
      let totalCompletions = 0;
      const courseStats = {};
      const recentActivity = [];

      for (const userDoc of usersSnap.docs) {
        const userData = userDoc.data();

        // Check if user is active
        if (userData.lastLoginDate) {
          const lastLogin = new Date(userData.lastLoginDate);
          if (lastLogin > sevenDaysAgo) {
            activeUsers++;
          }
        }

        // Get user's enrolled courses
        const enrolledCoursesSnap = await getDocs(
          collection(db, 'users', userDoc.id, 'enrolledCourses')
        );

        enrolledCoursesSnap.forEach(courseDoc => {
          const courseData = courseDoc.data();
          const courseId = courseDoc.id;

          totalEnrollments++;
          if (courseData.completed) {
            totalCompletions++;
          }

          // Track per-course stats
          if (!courseStats[courseId]) {
            courseStats[courseId] = {
              enrollments: 0,
              completions: 0,
              totalProgress: 0,
              avgProgress: 0
            };
          }

          courseStats[courseId].enrollments++;
          if (courseData.completed) {
            courseStats[courseId].completions++;
          }
          courseStats[courseId].totalProgress += courseData.progress || 0;

          // Add to recent activity
          if (courseData.lastAccessedDate) {
            recentActivity.push({
              userName: userData.displayName || userData.email,
              courseId: courseId,
              action: courseData.completed ? 'completed' : 'studying',
              date: courseData.lastAccessedDate,
              progress: courseData.progress
            });
          }
        });
      }

      // Calculate average progress per course
      Object.keys(courseStats).forEach(courseId => {
        const stats = courseStats[courseId];
        stats.avgProgress = Math.round(stats.totalProgress / stats.enrollments);
        stats.completionRate = Math.round((stats.completions / stats.enrollments) * 100);
      });

      // Sort recent activity by date
      recentActivity.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Get doubt statistics
      const doubtStats = await getDoubtStats();

      setStats({
        totalUsers,
        activeUsers,
        totalEnrollments,
        totalCompletions,
        courseStats,
        recentActivity: recentActivity.slice(0, 10), // Top 10 recent
        doubtStats
      });

    } catch (error) {
      console.error('Error loading admin stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDoubtStats = async () => {
    try {
      // List of all courses in the system
      const courses = [
        'electrical-basics',
        'microprocessor',
        'microcontroller',
        'networking',
        'embedded-firmware',
        'c-programming'
      ];

      let total = 0;
      let pending = 0;
      let answered = 0;

      // For each course, check sessions 0-24 (25 sessions max)
      for (const courseId of courses) {
        for (let sessionIndex = 0; sessionIndex < 25; sessionIndex++) {
          const sessionId = `session${sessionIndex}`;

          try {
            // Try to get doubts for this session
            const sessionDoubtsRef = collection(db, 'doubts', courseId, sessionId);
            const sessionDoubtsSnap = await getDocs(sessionDoubtsRef);

            sessionDoubtsSnap.forEach(doubtDoc => {
              const doubtData = doubtDoc.data();
              total++;
              if (doubtData.answered) {
                answered++;
              } else {
                pending++;
              }
            });
          } catch (error) {
            // Session doesn't exist, skip it
          }
        }
      }

      return { total, pending, answered };
    } catch (error) {
      console.error('Error loading doubt stats:', error);
      return { total: 0, pending: 0, answered: 0 };
    }
  };

  const getCourseTitle = (courseId) => {
    const titles = {
      'electrical-basics': 'Electrical Basics',
      'microprocessor': 'Microprocessor',
      'microcontroller': 'Microcontroller',
      'networking': 'Networking',
      'embedded-firmware': 'Embedded Firmware',
      'c-programming': 'C Programming'
    };
    return titles[courseId] || courseId;
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>📊</div>
        <h2>Loading Analytics...</h2>
      </div>
    );
  }

  const completionRate = stats.totalEnrollments > 0
    ? Math.round((stats.totalCompletions / stats.totalEnrollments) * 100)
    : 0;

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>📊 Admin Dashboard</h1>
        <p style={{ color: '#666', fontSize: '16px' }}>Platform Analytics and Management</p>
      </div>

      {/* Key Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '10px' }}>Total Users</div>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{stats.totalUsers}</div>
          <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
            {stats.activeUsers} active (7 days)
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '10px' }}>Total Enrollments</div>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{stats.totalEnrollments}</div>
          <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
            Across all courses
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '10px' }}>Completions</div>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{stats.totalCompletions}</div>
          <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
            {completionRate}% completion rate
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '10px' }}>Student Questions</div>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{stats.doubtStats.total}</div>
          <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '10px' }}>
            {stats.doubtStats.pending} pending
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>📚 Course Performance</h2>
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '15px', textAlign: 'left' }}>Course</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Enrollments</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Completions</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Completion Rate</th>
                <th style={{ padding: '15px', textAlign: 'center' }}>Avg Progress</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(stats.courseStats).map(([courseId, data]) => (
                <tr key={courseId} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>
                    {getCourseTitle(courseId)}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    {data.enrollments}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    {data.completions}
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    <span style={{
                      padding: '5px 15px',
                      borderRadius: '20px',
                      background: data.completionRate > 50 ? '#e8f5e9' : '#fff3e0',
                      color: data.completionRate > 50 ? '#2e7d32' : '#f57c00',
                      fontWeight: 'bold'
                    }}>
                      {data.completionRate}%
                    </span>
                  </td>
                  <td style={{ padding: '15px', textAlign: 'center' }}>
                    <div style={{
                      width: '100px',
                      height: '8px',
                      background: '#e0e0e0',
                      borderRadius: '4px',
                      margin: '0 auto',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${data.avgProgress}%`,
                        height: '100%',
                        background: '#4CAF50',
                        borderRadius: '4px'
                      }} />
                    </div>
                    <div style={{ fontSize: '12px', marginTop: '5px', color: '#666' }}>
                      {data.avgProgress}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity & Doubts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Recent Activity */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>🕐 Recent Activity</h2>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {stats.recentActivity.map((activity, index) => (
              <div key={index} style={{
                padding: '15px',
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    {activity.userName}
                  </div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    {activity.action === 'completed' ? '✅ Completed' : '📖 Studying'} {getCourseTitle(activity.courseId)}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#999' }}>
                    {new Date(activity.date).toLocaleDateString()}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#4CAF50' }}>
                    {activity.progress}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doubt Management */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>❓ Student Questions</h2>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span style={{ color: '#666' }}>Total Questions:</span>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{stats.doubtStats.total}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span style={{ color: '#666' }}>Answered:</span>
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#4CAF50' }}>
                {stats.doubtStats.answered}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ color: '#666' }}>Pending:</span>
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#FF9800' }}>
                {stats.doubtStats.pending}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate('/admin/doubts')}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Manage Questions →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
