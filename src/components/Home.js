import React from "react";
import { Link } from "react-router-dom";
import { coursesArray } from "../courses";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Learn Anything From Scratch</h1>
          <p>Master new skills with expert-led courses. Start learning today!</p>
          <button className="cta-button">Explore Courses</button>
        </div>
        <div className="hero-image">
          <div className="hero-icon">📚</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>{coursesArray.reduce((sum, c) => sum + parseInt(c.students), 0).toLocaleString()}+</h3>
          <p>Students Learning</p>
        </div>
        <div className="stat-item">
          <h3>{coursesArray.length}</h3>
          <p>Expert Courses</p>
        </div>
        <div className="stat-item">
          <h3>{coursesArray.length * 10}</h3>
          <p>Total Sessions</p>
        </div>
        <div className="stat-item">
          <h3>{coursesArray.reduce((sum, c) => sum + parseFloat(c.duration), 0).toFixed(0)}+</h3>
          <p>Hours of Content</p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          {coursesArray.map((course) => (
            <Link key={course.id} to={`/course/${course.id}`} className="course-card-link">
              <div className="course-card" style={{ borderTopColor: course.color }}>
                <div className="course-icon" style={{ backgroundColor: course.color }}>
                  {course.icon}
                </div>
                <h3>{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                
                <div className="course-meta">
                  <span className="level">{course.level}</span>
                  <span className="duration">⏱️ {course.duration}</span>
                </div>
                
                <div className="course-students">
                  👥 {course.students} students
                </div>
                
                <button className="start-button">Start Learning →</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Learn With Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Structured Learning</h3>
            <p>Follow a clear path from basics to advanced concepts</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎮</div>
            <h3>Interactive Activities</h3>
            <p>Practice with hands-on projects and quizzes</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey with detailed analytics</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏆</div>
            <h3>Get Certified</h3>
            <p>Earn certificates upon course completion</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of students learning new skills every day</p>
        <Link to={`/course/${coursesArray[0]?.id}`} className="cta-button-large">
          Begin Your Learning Journey
        </Link>
      </section>
    </div>
  );
}

export default Home;
