// src/services/courseService.js
import { doc, setDoc, updateDoc, increment } from 'firebase/firestore';

// Enroll user in a course
export const enrollInCourse = async (userId, courseId, courseName) => {
  const enrollmentRef = doc(db, 'users', userId, 'enrolledCourses', courseId);
  
  await setDoc(enrollmentRef, {
    courseId: courseId,
    courseName: courseName,
    enrolledDate: new Date().toISOString(),
    progress: 0,
    completed: false,
    completedDate: null,
    lastAccessedDate: new Date().toISOString(),
    timeSpent: 0
  });
  
  // Update course statistics
  const courseRef = doc(db, 'courses', courseId);
  await updateDoc(courseRef, {
    enrolledStudents: increment(1)
  });
};

// Check if user is enrolled
export const isEnrolled = async (userId, courseId) => {
  const enrollmentRef = doc(db, 'users', userId, 'enrolledCourses', courseId);
  const docSnap = await getDoc(enrollmentRef);
  return docSnap.exists();
};
