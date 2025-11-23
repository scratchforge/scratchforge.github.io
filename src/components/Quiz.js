import React, { useState } from 'react';

function Quiz({ quiz, onPass, onFail, lessonTitle }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelect = (questionIndex, answerIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answerIndex
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        // Check if all questions are answered
        if (Object.keys(selectedAnswers).length < quiz.questions.length) {
            alert('Please answer all questions before submitting.');
            return;
        }

        // Calculate score
        let correctCount = 0;
        quiz.questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correctAnswer) {
                correctCount++;
            }
        });

        setShowResults(true);

        // Check if passed
        if (correctCount >= quiz.passingScore) {
            setTimeout(() => {
                onPass(correctCount, quiz.questions.length);
            }, 1500);
        } else {
            setTimeout(() => {
                onFail();
            }, 1500);
        }
    };

    if (showResults) {
        const correctCount = quiz.questions.filter(
            (question, index) => selectedAnswers[index] === question.correctAnswer
        ).length;
        const passed = correctCount >= quiz.passingScore;

        return (
            <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
            }}>
                <div style={{
                    fontSize: '80px',
                    marginBottom: '20px'
                }}>
                    {passed ? '🎉' : '😔'}
                </div>
                <h2 style={{
                    fontSize: '32px',
                    marginBottom: '15px',
                    color: passed ? '#4CAF50' : '#f44336'
                }}>
                    {passed ? 'Congratulations!' : 'Not Quite There Yet'}
                </h2>
                <p style={{
                    fontSize: '20px',
                    color: '#666',
                    marginBottom: '30px'
                }}>
                    You scored {correctCount} out of {quiz.questions.length}
                </p>
                <div style={{
                    width: '100%',
                    maxWidth: '400px',
                    margin: '0 auto',
                    height: '20px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${(correctCount / quiz.questions.length) * 100}%`,
                        height: '100%',
                        backgroundColor: passed ? '#4CAF50' : '#f44336',
                        transition: 'width 0.5s ease'
                    }} />
                </div>
            </div>
        );
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
            {/* Header */}
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>
                    Quiz: {lessonTitle}
                </h2>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </p>

                {/* Progress Bar */}
                <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '4px',
                    marginTop: '15px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#2196F3',
                        transition: 'width 0.3s ease'
                    }} />
                </div>
            </div>

            {/* Question */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                    fontSize: '22px',
                    marginBottom: '25px',
                    color: '#333',
                    lineHeight: '1.5'
                }}>
                    {currentQuestion.question}
                </h3>

                {/* Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswers[currentQuestionIndex] === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
                                style={{
                                    padding: '20px',
                                    border: `2px solid ${isSelected ? '#2196F3' : '#ddd'}`,
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    backgroundColor: isSelected ? '#E3F2FD' : 'white',
                                    transition: 'all 0.2s ease',
                                    fontSize: '16px'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor = '#f5f5f5';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor = 'white';
                                    }
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: `2px solid ${isSelected ? '#2196F3' : '#999'}`,
                                        backgroundColor: isSelected ? '#2196F3' : 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        {isSelected && (
                                            <div style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                backgroundColor: 'white'
                                            }} />
                                        )}
                                    </div>
                                    <span>{option}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '15px',
                marginTop: '40px'
            }}>
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    style={{
                        padding: '12px 30px',
                        backgroundColor: currentQuestionIndex === 0 ? '#e0e0e0' : '#9E9E9E',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
                        opacity: currentQuestionIndex === 0 ? 0.5 : 1
                    }}
                >
                    ← Previous
                </button>

                {currentQuestionIndex === quiz.questions.length - 1 ? (
                    <button
                        onClick={handleSubmit}
                        style={{
                            padding: '12px 40px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Submit Quiz
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        style={{
                            padding: '12px 30px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Next →
                    </button>
                )}
            </div>

            {/* Answer Status */}
            <div style={{
                marginTop: '30px',
                padding: '15px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                    Answered: {Object.keys(selectedAnswers).length} / {quiz.questions.length}
                </p>
            </div>
        </div>
    );
}

export default Quiz;
