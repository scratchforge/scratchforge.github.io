import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';
import { coursesArray } from '../courses';
import Quiz from './Quiz';
import DoubtSection from './DoubtSection';
import AdComponent from './AdComponent';

function Course() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [courseData, setCourseData] = useState(null);
  const [user, setUser] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizPassed, setQuizPassed] = useState([]);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);

    const course = coursesArray.find((c) => c.id === courseId);
    if (course) {
      setCourseData(course);
      loadUserProgress(currentUser.uid, courseId);
    }
  }, [courseId, navigate]);

  const loadUserProgress = async (userId, courseId) => {
    try {
      const enrollmentRef = doc(db, 'users', userId, 'enrolledCourses', courseId);
      const enrollmentSnap = await getDoc(enrollmentRef);

      if (enrollmentSnap.exists()) {
        const data = enrollmentSnap.data();
        setCurrentSessionIndex(data.currentLesson || 0);
        setQuizPassed(data.quizPassed || []);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const handleQuizPass = async (score, totalQuestions) => {
    if (!user || !courseData) return;

    try {
      const newQuizPassed = [...new Set([...quizPassed, currentSessionIndex])];
      setQuizPassed(newQuizPassed);

      // Calculate overall progress
      const totalLessons = courseData.sessions.length;
      const progressPercent = Math.round((newQuizPassed.length / totalLessons) * 100);
      const isCompleted = progressPercent === 100;

      // Update Firebase
      const enrollmentRef = doc(db, 'users', user.uid, 'enrolledCourses', courseId);

      await updateDoc(enrollmentRef, {
        currentLesson: currentSessionIndex,
        quizPassed: newQuizPassed,
        progress: progressPercent,
        completed: isCompleted,
        completedDate: isCompleted ? new Date().toISOString() : null,
        lastAccessedDate: new Date().toISOString()
      });

      if (isCompleted) {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          totalCoursesCompleted: increment(1)
        });
      }

      setShowQuiz(false);
      alert(`Great job! You scored ${score}/${totalQuestions}.`);

      // Move to next lesson
      if (currentSessionIndex < courseData.sessions.length - 1) {
        setCurrentSessionIndex(currentSessionIndex + 1);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleQuizFail = () => {
    alert('You must answer all questions correctly to pass. Please review the lesson and try again.');
    setShowQuiz(false);
  };

  const handleTakeQuiz = () => {
    setShowQuiz(true);
  };

  const canAccessLesson = (lessonIndex) => {
    if (lessonIndex === 0) return true;
    return quizPassed.includes(lessonIndex - 1);
  };

  if (!courseData) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  }

  const currentSession = courseData.sessions[currentSessionIndex];

  // Get quiz from current session - adapt to your format
  const currentQuiz = currentSession.questions ? {
    questions: currentSession.questions.map(q => ({
      question: q.q,
      options: q.options,
      correctAnswer: q.answer
    })),
    passingScore: currentSession.questions.length
  } : null;

  const totalLessons = courseData.sessions.length;
  const progressPercent = Math.round((quizPassed.length / totalLessons) * 100);
  const isCurrentLessonPassed = quizPassed.includes(currentSessionIndex);
  const canAccessCurrent = canAccessLesson(currentSessionIndex);

  if (showQuiz && currentQuiz) {
    return (
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <Quiz
          quiz={currentQuiz}
          onPass={handleQuizPass}
          onFail={handleQuizFail}
          lessonTitle={currentSession.title}
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Progress Header */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div>
            <h1 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>{courseData.title}</h1>
            <p style={{ margin: 0, color: '#666' }}>
              Lesson {currentSessionIndex + 1} of {totalLessons}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#4CAF50' }}>
              {progressPercent}%
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>Complete</div>
          </div>
        </div>

        <div style={{
          width: '100%',
          height: '12px',
          backgroundColor: '#e0e0e0',
          borderRadius: '6px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progressPercent}%`,
            height: '100%',
            backgroundColor: '#4CAF50',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px' }}>
        {/* Lesson Sidebar */}
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          maxHeight: '700px',
          overflowY: 'auto'
        }}>
          <h3 style={{ marginBottom: '20px' }}>Course Content</h3>
          {courseData.sessions.map((session, index) => {
            const canAccess = canAccessLesson(index);
            const isPassed = quizPassed.includes(index);

            return (
              <div
                key={index}
                onClick={() => canAccess && setCurrentSessionIndex(index)}
                style={{
                  padding: '15px',
                  marginBottom: '10px',
                  borderRadius: '8px',
                  cursor: canAccess ? 'pointer' : 'not-allowed',
                  backgroundColor: currentSessionIndex === index ? '#E3F2FD' : 'white',
                  border: `2px solid ${currentSessionIndex === index ? '#2196F3' : '#eee'}`,
                  opacity: canAccess ? 1 : 0.5
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isPassed ? '#4CAF50' : canAccess ? '#2196F3' : '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {isPassed ? '✓' : canAccess ? index + 1 : '🔒'}
                  </div>
                  <div style={{ flex: 1, fontSize: '14px', fontWeight: 'bold' }}>
                    Lesson {index + 1}
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: '#666', paddingLeft: '38px' }}>
                  {session.title}
                </div>
                {isPassed && (
                  <div style={{ fontSize: '12px', color: '#4CAF50', paddingLeft: '38px', marginTop: '5px' }}>
                    Quiz Passed ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '40px'
        }}>
          {canAccessCurrent ? (
            <>
              <div dangerouslySetInnerHTML={{ __html: currentSession.content }} />

              {/* Quiz Section */}
              {currentQuiz && !isCurrentLessonPassed && (
                <div style={{
                  marginTop: '40px',
                  padding: '30px',
                  backgroundColor: '#FFF3E0',
                  borderRadius: '10px',
                  border: '2px solid #FF9800'
                }}>
                  <h3 style={{ marginBottom: '15px', color: '#333' }}>
                    📝 Complete the Quiz to Continue
                  </h3>
                  <p style={{ marginBottom: '20px', color: '#666' }}>
                    Pass the quiz to unlock the next lesson. You need at least {currentQuiz.passingScore} out of {currentQuiz.questions.length} correct answers.
                  </p>
                  <button
                    onClick={handleTakeQuiz}
                    style={{
                      padding: '15px 40px',
                      backgroundColor: '#FF9800',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Take Quiz →
                  </button>
                </div>
              )}

              {isCurrentLessonPassed && (
                <div style={{
                  marginTop: '30px',
                  padding: '20px',
                  backgroundColor: '#E8F5E9',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#2E7D32', fontSize: '18px' }}>
                      ✓ Lesson Completed
                    </div>
                    <div style={{ color: '#666', fontSize: '14px' }}>
                      Quiz passed! Ready for next lesson.
                    </div>
                  </div>
                  {currentSessionIndex < courseData.sessions.length - 1 && (
                    <button
                      onClick={() => setCurrentSessionIndex(currentSessionIndex + 1)}
                      style={{
                        padding: '12px 30px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Next Lesson →
                    </button>
                  )}
                </div>
              )}

              {/* Ad Section */}
              <AdComponent
                scriptSrc="//pl28132632.effectivegatecpm.com/cf49e39e74e5701f8c0e899dfa62dc5b/invoke.js"
                containerId="container-course-ad-cf49e39e74e5701f8c0e899dfa62dc5b"
                position="bottom"
              />

              {/* Doubt Section - Always visible */}
              <DoubtSection
                courseId={courseId}
                sessionIndex={currentSessionIndex}
                sessionTitle={currentSession.title}
              />
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '80px', marginBottom: '20px' }}>🔒</div>
              <h2 style={{ marginBottom: '15px' }}>Lesson Locked</h2>
              <p style={{ color: '#666', fontSize: '18px' }}>
                Complete the previous lesson's quiz to unlock this lesson.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Course;
