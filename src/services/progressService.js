// src/services/progressService.js
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

// Mark lesson as completed
export const markLessonComplete = async (userId, courseId, lessonId, lessonData) => {
  // Save lesson progress
  const lessonRef = doc(db, 'users', userId, 'enrolledCourses', courseId, 'lessons', lessonId);
  
  await setDoc(lessonRef, {
    lessonId: lessonId,
    lessonTitle: lessonData.title,
    completed: true,
    completedDate: new Date().toISOString(),
    score: lessonData.score || null,
    timeSpent: lessonData.timeSpent || 0,
    attempts: lessonData.attempts || 1
  });
  
  // Update course progress
  await updateCourseProgress(userId, courseId);
};

// Calculate and update overall course progress
export const updateCourseProgress = async (userId, courseId) => {
  // Get total lessons in course
  const courseRef = doc(db, 'courses', courseId);
  const courseSnap = await getDoc(courseRef);
  const totalLessons = courseSnap.data().totalLessons;
  
  // Get completed lessons count
  const lessonsRef = collection(db, 'users', userId, 'enrolledCourses', courseId, 'lessons');
  const lessonsSnap = await getDocs(lessonsRef);
  const completedLessons = lessonsSnap.size;
  
  // Calculate progress percentage
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  
  // Update enrollment document
  const enrollmentRef = doc(db, 'users', userId, 'enrolledCourses', courseId);
  await updateDoc(enrollmentRef, {
    progress: progressPercent,
    completed: progressPercent === 100,
    completedDate: progressPercent === 100 ? new Date().toISOString() : null,
    lastAccessedDate: new Date().toISOString()
  });
  
  // If course completed, update user profile
  if (progressPercent === 100) {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      totalCoursesCompleted: increment(1)
    });
  }
};
