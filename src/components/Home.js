import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Home() {
  const user = auth.currentUser;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Learn Anything From Scratch 🚀
        </h1>
        <p style={{
          fontSize: '22px',
          marginBottom: '30px',
          maxWidth: '700px',
          margin: '0 auto 40px'
        }}>
          Master new skills with expert-led courses. Start your learning journey today and transform your career!
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {user ? (
            <Link to="/dashboard" style={{
              padding: '15px 40px',
              backgroundColor: '#4CAF50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              Go to Dashboard →
            </Link>
          ) : (
            <Link to="/login" style={{
              padding: '15px 40px',
              backgroundColor: '#4CAF50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              Get Started Free →
            </Link>
          )}
          <Link to="/explore" style={{
            padding: '15px 40px',
            backgroundColor: 'transparent',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: '2px solid white'
          }}>
            Explore Courses
          </Link>
        </div>
      </section>

      {/* What is ScratchForge Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '20px',
            color: '#333'
          }}>
            What is ScratchForge? 🎯
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto 50px',
            lineHeight: '1.8'
          }}>
            ScratchForge is an innovative online learning platform designed to help you master new skills from the ground up.
            Whether you're a beginner or looking to advance your knowledge, our comprehensive courses guide you step-by-step
            through practical, hands-on learning experiences.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>📚</div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Expert-Led Courses</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Learn from industry professionals with years of experience in their fields
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>🎓</div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Practical Learning</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Hands-on exercises and real-world projects to apply what you learn
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Learn at Your Pace</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Access courses anytime, anywhere and learn at your own comfortable speed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ScratchForge Section */}
      <section style={{ padding: '60px 40px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '50px',
            color: '#333'
          }}>
            Why Choose ScratchForge? 💡
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '24px',
                  color: '#4CAF50',
                  fontWeight: 'bold'
                }}>
                  ✓ Beginner-Friendly
                </div>
                <p style={{ color: '#666', lineHeight: '1.6', paddingLeft: '30px' }}>
                  Start with zero knowledge. Our courses are designed for absolute beginners and gradually build your skills.
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '24px',
                  color: '#4CAF50',
                  fontWeight: 'bold'
                }}>
                  ✓ Track Your Progress
                </div>
                <p style={{ color: '#666', lineHeight: '1.6', paddingLeft: '30px' }}>
                  Monitor your learning journey with detailed progress tracking and personalized dashboards.
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '24px',
                  color: '#4CAF50',
                  fontWeight: 'bold'
                }}>
                  ✓ Get Certified
                </div>
                <p style={{ color: '#666', lineHeight: '1.6', paddingLeft: '30px' }}>
                  Earn certificates upon course completion to showcase your newly acquired skills.
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  fontSize: '24px',
                  color: '#4CAF50',
                  fontWeight: 'bold'
                }}>
                  ✓ Free to Start
                </div>
                <p style={{ color: '#666', lineHeight: '1.6', paddingLeft: '30px' }}>
                  Create your account for free and start learning immediately. No credit card required.
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: '#f0f4ff',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '28px', marginBottom: '15px', color: '#333' }}>
                Join Our Happy Learners
              </h3>
              <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6' }}>
                Start your learning journey today and become part of our growing community of skilled professionals.
              </p>
              {!user && (
                <Link to="/login" style={{
                  display: 'inline-block',
                  marginTop: '25px',
                  padding: '15px 40px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '30px',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}>
                  Sign Up Free
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '50px',
            color: '#333'
          }}>
            How It Works 🚀
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#4CAF50',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Create Account</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Sign up for free and tell us about your learning goals
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#2196F3',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Choose Course</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Browse our courses and enroll in topics that interest you
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#FF9800',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Start Learning</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Watch lessons, complete exercises, and track your progress
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#9C27B0',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                4
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Get Certified</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Complete the course and receive your certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 40px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '50px',
            color: '#333'
          }}>
            Platform Features ⚙️
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              padding: '25px',
              border: '2px solid #4CAF50',
              borderRadius: '10px',
              backgroundColor: '#f9fff9'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>📊</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#333' }}>Progress Dashboard</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Track your learning progress, see completed courses, and monitor your achievements
              </p>
            </div>

            <div style={{
              padding: '25px',
              border: '2px solid #2196F3',
              borderRadius: '10px',
              backgroundColor: '#f0f8ff'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>💻</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#333' }}>Interactive Lessons</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Engage with interactive content, code examples, and hands-on exercises
              </p>
            </div>

            <div style={{
              padding: '25px',
              border: '2px solid #FF9800',
              borderRadius: '10px',
              backgroundColor: '#fff8f0'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎯</div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#333' }}>Practice Arena</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Test your skills with quizzes, challenges, and real-world projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>
          Ready to Start Learning? 🎓
        </h2>
        <p style={{ fontSize: '20px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Join ScratchForge today and unlock your potential with expert-led courses
        </p>
        {!user ? (
          <Link to="/login" style={{
            padding: '18px 50px',
            backgroundColor: 'white',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            display: 'inline-block'
          }}>
            Create Free Account →
          </Link>
        ) : (
          <Link to="/dashboard" style={{
            padding: '18px 50px',
            backgroundColor: 'white',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            display: 'inline-block'
          }}>
            Go to Your Dashboard →
          </Link>
        )}
      </section>
    </div>
  );
}

export default Home;
