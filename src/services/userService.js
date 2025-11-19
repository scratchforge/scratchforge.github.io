// src/services/userService.js
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

// Create user profile after signup
export const createUserProfile = async (email, name) => {
  const userId = auth.currentUser.uid;
  
  await setDoc(doc(db, 'users', userId), {
    email: email,
    name: name,
    joinedDate: new Date().toISOString(),
    totalCoursesCompleted: 0,
    totalTimeSpent: 0,
    level: 'beginner'
  });
};

// Get user profile
export const getUserProfile = async (userId) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};
