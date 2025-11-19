// src/components/Lesson.js
import { useEffect, useState } from 'react';

function Lesson({ lessonId, courseId }) {
  const [startTime, setStartTime] = useState(null);
  
  useEffect(() => {
    // Track when user starts lesson
    setStartTime(Date.now());
    
    // Track when user leaves
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // in minutes
      saveTimeSpent(userId, courseId, lessonId, timeSpent);
    };
  }, []);
  
  return (
    <div>
      {/* Your lesson content */}
    </div>
  );
}

// Save time spent
const saveTimeSpent = async (userId, courseId, lessonId, minutes) => {
  const lessonRef = doc(db, 'users', userId, 'enrolledCourses', courseId, 'lessons', lessonId);
  await updateDoc(lessonRef, {
    timeSpent: increment(minutes)
  });
  
  // Also update course total time
  const enrollmentRef = doc(db, 'users', userId, 'enrolledCourses', courseId);
  await updateDoc(enrollmentRef, {
    timeSpent: increment(minutes)
  });
};
