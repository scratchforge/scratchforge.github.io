import React from 'react';
import VerticalAd from './VerticalAd';

function PracticeArena() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr 160px', // Left ad | Content | Right ad
      gap: '20px',
      padding: '20px',
      minHeight: '100vh'
    }}>
      {/* LEFT AD COLUMN */}
      <div style={{
        position: 'sticky',
        top: '80px',
        height: 'fit-content'
      }}>
        <VerticalAd position="left" />
      </div>

      {/* CENTER CONTENT COLUMN */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>

        <h1 style={{ marginBottom: '10px' }}>Practice Arena 💡</h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>
          Test your knowledge and sharpen your skills with hands-on exercises
        </p>

        {/* cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          alignItems: 'start'
        }}>
          {/* Quick Quizzes */}
          <div style={{ border: '2px solid #2196F3', borderRadius: '10px', padding: '25px', backgroundColor: '#E3F2FD' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎯</div>
            <h3 style={{ marginTop: 0 }}>Quick Quizzes</h3>
            <p style={{ color: '#666' }}>Test your understanding with short quizzes</p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Start Quiz
            </button>
          </div>

          {/* Coding Challenges */}
          <div style={{ border: '2px solid #FF9800', borderRadius: '10px', padding: '25px', backgroundColor: '#FFF3E0' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ marginTop: 0 }}>Coding Challenges</h3>
            <p style={{ color: '#666' }}>Solve real-world coding problems</p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Try Challenge
            </button>
          </div>

          {/* Practice Projects */}
          <div style={{ border: '2px solid #4CAF50', borderRadius: '10px', padding: '25px', backgroundColor: '#E8F5E9' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏆</div>
            <h3 style={{ marginTop: 0 }}>Practice Projects</h3>
            <p style={{ color: '#666' }}>Build projects to apply your skills</p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT AD COLUMN */}
      <div style={{
        position: 'sticky',
        top: '80px',
        height: 'fit-content'
      }}>
        <VerticalAd position="right" />
      </div>
    </div>
  );
}

export default PracticeArena;
