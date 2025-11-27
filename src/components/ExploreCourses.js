import React from 'react';
import { Link } from 'react-router-dom';
import { coursesArray } from '../courses';
import VerticalAd from './VerticalAd';

function ExploreCourses() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr 160px',
      gap: '20px',
      padding: '20px',
      minHeight: '100vh'
    }}>
      {/* Left Ad */}
      <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
        <VerticalAd position="left" />
      </div>

      {/* Main Content */}
      <div style={{ minWidth: 0 }}>
        <h1 style={{ marginBottom: '10px' }}>Explore All Courses 🔍</h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>
          Discover our comprehensive collection of courses designed to help you learn from scratch
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
          {coursesArray.map((course) => (
            <div key={course.id} style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '25px',
              backgroundColor: 'white',
              boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.1)';
              }}>
              <h2 style={{ marginTop: 0, color: '#2196F3' }}>{course.title}</h2>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                {course.description || 'Master the fundamentals with hands-on lessons'}
              </p>
              <div style={{ marginBottom: '15px' }}>
                <span style={{
                  backgroundColor: '#E3F2FD',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '14px',
                  color: '#1976D2',
                  marginRight: '8px'
                }}>
                  10 Lessons
                </span>
                <span style={{
                  backgroundColor: '#F3E5F5',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '14px',
                  color: '#7B1FA2'
                }}>
                  Beginner
                </span>
              </div>
              <Link
                to={`/course-details/${course.id}`}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  marginTop: '15px'
                }}
              >
                View Course Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right Ad */}
      <div style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
        <VerticalAd position="right" />
      </div>
    </div>
  );
}

export default ExploreCourses;
