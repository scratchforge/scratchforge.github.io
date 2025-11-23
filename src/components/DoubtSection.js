import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase';

function DoubtSection({ courseId, sessionIndex, sessionTitle }) {
    const [doubts, setDoubts] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [filter, setFilter] = useState('all'); // all, answered, unanswered

    useEffect(() => {
        loadDoubts();
    }, [courseId, sessionIndex]);

    const loadDoubts = async () => {
        try {
            const doubtsRef = collection(db, 'doubts', courseId, `session${sessionIndex}`);
            const doubtsSnap = await getDocs(query(doubtsRef, orderBy('timestamp', 'desc')));

            const doubtsData = [];
            doubtsSnap.forEach(doc => {
                doubtsData.push({ id: doc.id, ...doc.data() });
            });

            setDoubts(doubtsData);
        } catch (error) {
            console.error('Error loading doubts:', error);
        }
    };

    const submitQuestion = async () => {
        if (!newQuestion.trim()) {
            alert('Please enter your question');
            return;
        }

        if (!auth.currentUser) {
            alert('Please login to ask questions');
            return;
        }

        setLoading(true);
        try {
            const doubtsRef = collection(db, 'doubts', courseId, `session${sessionIndex}`);
            await addDoc(doubtsRef, {
                userId: auth.currentUser.uid,
                userName: auth.currentUser.displayName || auth.currentUser.email,
                userEmail: auth.currentUser.email,
                question: newQuestion,
                timestamp: new Date().toISOString(),
                answered: false,
                adminReply: '',
                replyTimestamp: null,
                helpful: 0,
                sessionTitle: sessionTitle
            });

            setNewQuestion('');
            setShowForm(false);
            loadDoubts();
            alert('Question submitted successfully! Admin will respond soon.');
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Error submitting question. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const markHelpful = async (doubtId, currentCount) => {
        try {
            const doubtRef = doc(db, 'doubts', courseId, `session${sessionIndex}`, doubtId);
            await updateDoc(doubtRef, {
                helpful: currentCount + 1
            });
            loadDoubts();
        } catch (error) {
            console.error('Error marking helpful:', error);
        }
    };

    const deleteQuestion = async (doubtId) => {
        if (!window.confirm('Are you sure you want to delete this question?')) {
            return;
        }

        try {
            const doubtRef = doc(db, 'doubts', courseId, `session${sessionIndex}`, doubtId);
            await deleteDoc(doubtRef);
            loadDoubts();
            alert('Question deleted successfully!');
        } catch (error) {
            console.error('Error deleting question:', error);
            alert('Error deleting question. Please try again.');
        }
    };

    const filteredDoubts = doubts.filter(doubt => {
        if (filter === 'answered') return doubt.answered;
        if (filter === 'unanswered') return !doubt.answered;
        return true;
    });

    return (
        <div style={{
            marginTop: '40px',
            padding: '30px',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            borderRadius: '15px',
            border: '2px solid #ddd'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>❓ Questions & Doubts</h3>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                        Ask questions about this session or browse answers from others
                    </p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    style={{
                        padding: '12px 24px',
                        background: showForm ? '#f44336' : '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {showForm ? '✕ Cancel' : '+ Ask Question'}
                </button>
            </div>

            {/* Question Form */}
            {showForm && (
                <div style={{
                    background: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '25px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h4 style={{ marginBottom: '15px' }}>Ask Your Question</h4>
                    <textarea
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Type your question here... Be specific and clear."
                        style={{
                            width: '100%',
                            minHeight: '120px',
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
                            onClick={submitQuestion}
                            disabled={loading}
                            style={{
                                padding: '12px 30px',
                                background: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                opacity: loading ? 0.6 : 1
                            }}
                        >
                            {loading ? 'Submitting...' : 'Submit Question'}
                        </button>
                        <button
                            onClick={() => setShowForm(false)}
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
            )}

            {/* Filter Buttons */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <button
                    onClick={() => setFilter('all')}
                    style={{
                        padding: '8px 20px',
                        background: filter === 'all' ? '#2196F3' : 'white',
                        color: filter === 'all' ? 'white' : '#333',
                        border: '1px solid #ddd',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    All ({doubts.length})
                </button>
                <button
                    onClick={() => setFilter('answered')}
                    style={{
                        padding: '8px 20px',
                        background: filter === 'answered' ? '#4CAF50' : 'white',
                        color: filter === 'answered' ? 'white' : '#333',
                        border: '1px solid #ddd',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Answered ({doubts.filter(d => d.answered).length})
                </button>
                <button
                    onClick={() => setFilter('unanswered')}
                    style={{
                        padding: '8px 20px',
                        background: filter === 'unanswered' ? '#FF9800' : 'white',
                        color: filter === 'unanswered' ? 'white' : '#333',
                        border: '1px solid #ddd',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Pending ({doubts.filter(d => !d.answered).length})
                </button>
            </div>

            {/* Questions List */}
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                {filteredDoubts.length === 0 ? (
                    <div style={{
                        background: 'white',
                        padding: '40px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        color: '#999'
                    }}>
                        <div style={{ fontSize: '48px', marginBottom: '15px' }}>💭</div>
                        <p>No questions yet. Be the first to ask!</p>
                    </div>
                ) : (
                    filteredDoubts.map(doubt => (
                        <div key={doubt.id} style={{
                            background: 'white',
                            padding: '25px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                        }}>
                            {/* Question */}
                            <div style={{ marginBottom: '15px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: '#2196F3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 'bold'
                                        }}>
                                            {doubt.userName.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{doubt.userName}</div>
                                            <div style={{ fontSize: '12px', color: '#999' }}>
                                                {new Date(doubt.timestamp).toLocaleDateString()} at {new Date(doubt.timestamp).toLocaleTimeString()}
                                            </div>
                                        </div>
                                    </div>
                                    {doubt.answered && (
                                        <span style={{
                                            padding: '5px 15px',
                                            background: '#e8f5e9',
                                            color: '#2e7d32',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            fontWeight: 'bold'
                                        }}>
                                            ✓ Answered
                                        </span>
                                    )}
                                </div>
                                <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '10px 0', color: '#333' }}>
                                    {doubt.question}
                                </p>
                            </div>

                            {/* Admin Reply */}
                            {doubt.answered && doubt.adminReply && (
                                <div style={{
                                    background: '#f0f7ff',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    borderLeft: '4px solid #2196F3',
                                    marginTop: '15px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            background: '#2196F3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '16px'
                                        }}>
                                            👨‍🏫
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#2196F3' }}>Admin Reply</div>
                                            {doubt.replyTimestamp && (
                                                <div style={{ fontSize: '12px', color: '#666' }}>
                                                    {new Date(doubt.replyTimestamp).toLocaleDateString()}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '15px', lineHeight: '1.6', margin: 0, color: '#333' }}>
                                        {doubt.adminReply}
                                    </p>
                                </div>
                            )}

                            {/* Helpful Button and Delete Button */}
                            <div style={{ marginTop: '15px', display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'space-between' }}>
                                <button
                                    onClick={() => markHelpful(doubt.id, doubt.helpful || 0)}
                                    style={{
                                        padding: '8px 16px',
                                        background: '#f5f5f5',
                                        border: '1px solid #ddd',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    👍 Helpful ({doubt.helpful || 0})
                                </button>
                                {auth.currentUser && (auth.currentUser.email === 'immanueldavidckp@gmail.com' || auth.currentUser.uid === doubt.userId) && (
                                    <button
                                        onClick={() => deleteQuestion(doubt.id)}
                                        style={{
                                            padding: '8px 16px',
                                            background: '#ffebee',
                                            border: '1px solid #ef5350',
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            color: '#c62828',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        🗑️ Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default DoubtSection;
