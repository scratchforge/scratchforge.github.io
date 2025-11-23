import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { isAdmin } from '../utils/adminAuth';

function AdminDoubts() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [allDoubts, setAllDoubts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // all, pending, answered
    const [selectedCourse, setSelectedCourse] = useState('all');
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');

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
            loadAllDoubts();
        }
    }, [user]);

    const loadAllDoubts = async () => {
        try {
            setLoading(true);
            const doubtsData = [];

            // List of all courses in the system
            const courses = [
                'electrical-basics',
                'microprocessor',
                'microcontroller',
                'networking',
                'embedded-firmware',
                'c-programming'
            ];

            console.log('Starting to load all doubts from known courses...');

            // For each course, check sessions 0-24 (25 sessions max)
            for (const courseId of courses) {
                console.log('Processing course:', courseId);

                for (let sessionIndex = 0; sessionIndex < 25; sessionIndex++) {
                    const sessionId = `session${sessionIndex}`;

                    try {
                        // Try to get doubts for this session
                        const sessionDoubtsRef = collection(db, 'doubts', courseId, sessionId);
                        const sessionDoubtsSnap = await getDocs(sessionDoubtsRef);

                        if (sessionDoubtsSnap.size > 0) {
                            console.log(`Found ${sessionDoubtsSnap.size} doubts in ${courseId}/${sessionId}`);

                            sessionDoubtsSnap.forEach(doubtDoc => {
                                const doubtData = {
                                    id: doubtDoc.id,
                                    courseId,
                                    sessionId,
                                    sessionIndex,
                                    ...doubtDoc.data()
                                };
                                doubtsData.push(doubtData);
                            });
                        }
                    } catch (error) {
                        // Session doesn't exist, skip it
                        console.log(`No doubts in ${courseId}/${sessionId}`);
                    }
                }
            }

            console.log('Total doubts loaded:', doubtsData.length);

            // Sort by timestamp (newest first)
            doubtsData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

            setAllDoubts(doubtsData);
        } catch (error) {
            console.error('Error loading doubts:', error);
        } finally {
            setLoading(false);
        }
    };

    const submitReply = async (doubt) => {
        if (!replyText.trim()) {
            alert('Please enter a reply');
            return;
        }

        try {
            const doubtRef = doc(db, 'doubts', doubt.courseId, doubt.sessionId, doubt.id);
            await updateDoc(doubtRef, {
                answered: true,
                adminReply: replyText,
                replyTimestamp: new Date().toISOString()
            });

            setReplyingTo(null);
            setReplyText('');
            loadAllDoubts();
            alert('Reply sent successfully!');
        } catch (error) {
            console.error('Error submitting reply:', error);
            alert('Error sending reply. Please try again.');
        }
    };

    const deleteQuestion = async (doubt) => {
        if (!window.confirm('Are you sure you want to delete this question? This action cannot be undone.')) {
            return;
        }

        try {
            const doubtRef = doc(db, 'doubts', doubt.courseId, doubt.sessionId, doubt.id);
            await deleteDoc(doubtRef);
            loadAllDoubts();
            alert('Question deleted successfully!');
        } catch (error) {
            console.error('Error deleting question:', error);
            alert('Error deleting question. Please try again.');
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

    const filteredDoubts = allDoubts.filter(doubt => {
        if (filter === 'pending' && doubt.answered) return false;
        if (filter === 'answered' && !doubt.answered) return false;
        if (selectedCourse !== 'all' && doubt.courseId !== selectedCourse) return false;
        return true;
    });

    const courses = [...new Set(allDoubts.map(d => d.courseId))];
    const pendingCount = allDoubts.filter(d => !d.answered).length;
    const answeredCount = allDoubts.filter(d => d.answered).length;

    if (loading) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>❓</div>
                <h2>Loading Questions...</h2>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>❓ Student Questions Management</h1>
                    <p style={{ color: '#666', fontSize: '16px' }}>
                        {pendingCount} pending • {answeredCount} answered • {allDoubts.length} total
                    </p>
                </div>
                <button
                    onClick={() => navigate('/admin')}
                    style={{
                        padding: '12px 24px',
                        background: '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    ← Back to Dashboard
                </button>
            </div>

            {/* Filters */}
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '30px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold', marginRight: '15px' }}>Status:</label>
                    <button
                        onClick={() => setFilter('all')}
                        style={{
                            padding: '8px 20px',
                            background: filter === 'all' ? '#2196F3' : '#f5f5f5',
                            color: filter === 'all' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '20px',
                            marginRight: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        All ({allDoubts.length})
                    </button>
                    <button
                        onClick={() => setFilter('pending')}
                        style={{
                            padding: '8px 20px',
                            background: filter === 'pending' ? '#FF9800' : '#f5f5f5',
                            color: filter === 'pending' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '20px',
                            marginRight: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Pending ({pendingCount})
                    </button>
                    <button
                        onClick={() => setFilter('answered')}
                        style={{
                            padding: '8px 20px',
                            background: filter === 'answered' ? '#4CAF50' : '#f5f5f5',
                            color: filter === 'answered' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer'
                        }}
                    >
                        Answered ({answeredCount})
                    </button>
                </div>

                <div>
                    <label style={{ fontWeight: 'bold', marginRight: '15px' }}>Course:</label>
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        style={{
                            padding: '8px 15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            fontSize: '14px'
                        }}
                    >
                        <option value="all">All Courses</option>
                        {courses.map(courseId => (
                            <option key={courseId} value={courseId}>
                                {getCourseTitle(courseId)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Questions List */}
            <div>
                {filteredDoubts.length === 0 ? (
                    <div style={{
                        background: 'white',
                        padding: '60px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ fontSize: '64px', marginBottom: '20px' }}>📭</div>
                        <h3>No questions found</h3>
                        <p style={{ color: '#666' }}>Try adjusting your filters</p>
                    </div>
                ) : (
                    filteredDoubts.map(doubt => (
                        <div key={`${doubt.courseId}-${doubt.sessionId}-${doubt.id}`} style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '12px',
                            marginBottom: '20px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            border: doubt.answered ? '2px solid #4CAF50' : '2px solid #FF9800'
                        }}>
                            {/* Course and Session Info */}
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                                <span style={{
                                    padding: '5px 15px',
                                    background: '#2196F3',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>
                                    {getCourseTitle(doubt.courseId)}
                                </span>
                                <span style={{
                                    padding: '5px 15px',
                                    background: '#9C27B0',
                                    color: 'white',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>
                                    Session {doubt.sessionIndex + 1}
                                </span>
                                {doubt.sessionTitle && (
                                    <span style={{
                                        padding: '5px 15px',
                                        background: '#f5f5f5',
                                        borderRadius: '20px',
                                        fontSize: '12px'
                                    }}>
                                        {doubt.sessionTitle}
                                    </span>
                                )}
                            </div>

                            {/* Student Info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: '#2196F3',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '18px'
                                }}>
                                    {doubt.userName.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{doubt.userName}</div>
                                    <div style={{ fontSize: '12px', color: '#999' }}>
                                        {doubt.userEmail} • {new Date(doubt.timestamp).toLocaleString()}
                                    </div>
                                </div>
                            </div>

                            {/* Question */}
                            <div style={{
                                background: '#f9f9f9',
                                padding: '20px',
                                borderRadius: '10px',
                                marginBottom: '15px'
                            }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Question:</div>
                                <p style={{ fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                                    {doubt.question}
                                </p>
                            </div>

                            {/* Admin Reply Section */}
                            {doubt.answered && doubt.adminReply ? (
                                <div style={{
                                    background: '#e8f5e9',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    borderLeft: '4px solid #4CAF50'
                                }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#2e7d32' }}>
                                        ✓ Your Reply:
                                    </div>
                                    <p style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                        {doubt.adminReply}
                                    </p>
                                    <div style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                                        Replied on {new Date(doubt.replyTimestamp).toLocaleString()}
                                    </div>
                                </div>
                            ) : replyingTo === doubt.id ? (
                                <div style={{
                                    background: '#fff3e0',
                                    padding: '20px',
                                    borderRadius: '10px'
                                }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>Write Your Reply:</div>
                                    <textarea
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        placeholder="Type your detailed answer here..."
                                        style={{
                                            width: '100%',
                                            minHeight: '150px',
                                            padding: '15px',
                                            fontSize: '16px',
                                            border: '2px solid #ddd',
                                            borderRadius: '8px',
                                            resize: 'vertical',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                                        <button
                                            onClick={() => submitReply(doubt)}
                                            style={{
                                                padding: '12px 30px',
                                                background: '#4CAF50',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Send Reply
                                        </button>
                                        <button
                                            onClick={() => {
                                                setReplyingTo(null);
                                                setReplyText('');
                                            }}
                                            style={{
                                                padding: '12px 30px',
                                                background: '#f5f5f5',
                                                color: '#333',
                                                border: '1px solid #ddd',
                                                borderRadius: '8px',
                                                fontSize: '16px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        onClick={() => setReplyingTo(doubt.id)}
                                        style={{
                                            padding: '12px 30px',
                                            background: '#FF9800',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        💬 Reply to Question
                                    </button>
                                    <button
                                        onClick={() => deleteQuestion(doubt)}
                                        style={{
                                            padding: '12px 30px',
                                            background: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        🗑️ Delete Question
                                    </button>
                                </div>
                            )}

                            {/* Stats */}
                            <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
                                👍 {doubt.helpful || 0} students found this helpful
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AdminDoubts;
