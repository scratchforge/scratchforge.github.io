// src/components/AdminDashboard.js
import { collection, getDocs, query, where } from 'firebase/firestore';

function AdminDashboard() {
  const [stats, setStats] = useState({});
  
  useEffect(() => {
    loadAdminStats();
  }, []);
  
  const loadAdminStats = async () => {
    // Get total users
    const usersSnap = await getDocs(collection(db, 'users'));
    const totalUsers = usersSnap.size;
    
    // Get all feedback
    const feedbackData = [];
    for (const userDoc of usersSnap.docs) {
      const feedbackSnap = await getDocs(
        collection(db, 'users', userDoc.id, 'feedback')
      );
      feedbackSnap.forEach(doc => feedbackData.push(doc.data()));
    }
    
    // Get most requested courses
    const courseRequests = {};
    feedbackData.forEach(feedback => {
      feedback.wantsMoreCourses?.forEach(course => {
        courseRequests[course] = (courseRequests[course] || 0) + 1;
      });
    });
    
    setStats({
      totalUsers,
      totalFeedback: feedbackData.length,
      mostRequestedCourses: courseRequests,
      averageRatings: calculateAverageRatings(feedbackData)
    });
  };
  
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Total Feedback: {stats.totalFeedback}</p>
      
      <h3>Most Requested Courses:</h3>
      <ul>
        {Object.entries(stats.mostRequestedCourses || {}).map(([course, count]) => (
          <li key={course}>{course}: {count} requests</li>
        ))}
      </ul>
    </div>
  );
}
