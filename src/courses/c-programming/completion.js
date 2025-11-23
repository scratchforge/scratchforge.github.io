import { useState, useEffect } from 'react';

export const useCompletion = () => {
    const [completedSessions, setCompletedSessions] = useState(() => {
        const saved = localStorage.getItem('c-programming-completed');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('c-programming-completed', JSON.stringify(completedSessions));
    }, [completedSessions]);

    const markComplete = (sessionIndex) => {
        if (!completedSessions.includes(sessionIndex)) {
            setCompletedSessions([...completedSessions, sessionIndex]);
        }
    };

    const isComplete = (sessionIndex) => {
        return completedSessions.includes(sessionIndex);
    };

    const progress = (totalSessions) => {
        return Math.round((completedSessions.length / totalSessions) * 100);
    };

    return { completedSessions, markComplete, isComplete, progress };
};
