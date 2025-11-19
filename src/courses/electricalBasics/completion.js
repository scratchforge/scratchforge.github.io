export const completion = {
  title: "🎓 Course Completed!",
  content: `
    <style>
      .completion-page {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      
      .completion-container {
        text-align: center;
        padding: 60px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      
      .celebration-animation {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 0 auto 40px;
      }
      
      .celebration-main {
        font-size: 120px;
        animation: bounce 1s infinite, rotate 3s infinite;
        display: inline-block;
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-30px); }
      }
      
      @keyframes rotate {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-10deg); }
      }
      
      .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        animation: fall 3s infinite;
      }
      
      @keyframes fall {
        to {
          transform: translateY(300px) rotate(360deg);
          opacity: 0;
        }
      }
      
      .confetti:nth-child(1) { left: 10%; animation-delay: 0s; background: #FF6B6B; border-radius: 50%; }
      .confetti:nth-child(2) { left: 20%; animation-delay: 0.3s; background: #FFD93D; transform: rotate(45deg); }
      .confetti:nth-child(3) { left: 30%; animation-delay: 0.6s; background: #6BCB77; border-radius: 50%; }
      .confetti:nth-child(4) { left: 40%; animation-delay: 0.9s; background: #4D96FF; }
      .confetti:nth-child(5) { left: 50%; animation-delay: 1.2s; background: #FF6B6B; border-radius: 50%; }
      .confetti:nth-child(6) { left: 60%; animation-delay: 1.5s; background: #FFD93D; }
      .confetti:nth-child(7) { left: 70%; animation-delay: 1.8s; background: #6BCB77; border-radius: 50%; }
      .confetti:nth-child(8) { left: 80%; animation-delay: 0.4s; background: #4D96FF; }
      .confetti:nth-child(9) { left: 90%; animation-delay: 0.8s; background: #FF6B6B; }
      .confetti:nth-child(10) { left: 15%; animation-delay: 1.1s; background: #FFD93D; border-radius: 50%; }
      
      .completion-content {
        background: white;
        padding: 60px 40px;
        border-radius: 20px;
        max-width: 700px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: scaleIn 0.8s ease-out;
      }
      
      @keyframes scaleIn {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      .completion-title {
        font-size: 3em;
        color: #667eea;
        margin: 0 0 20px 0;
        font-weight: bold;
      }
      
      .completion-subtitle {
        font-size: 1.8em;
        color: #764ba2;
        margin: 0 0 30px 0;
        font-weight: 600;
      }
      
      .completion-message {
        font-size: 1.2em;
        color: #333;
        line-height: 1.8;
        margin: 30px 0;
        font-weight: 500;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin: 40px 0;
      }
      
      .stat-item {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        padding: 20px;
        border-radius: 12px;
        border: 2px solid #667eea;
      }
      
      .stat-number {
        font-size: 2.5em;
        color: #667eea;
        font-weight: bold;
        margin: 10px 0;
      }
      
      .stat-label {
        color: #666;
        font-size: 0.95em;
      }
      
      .achievements {
        background: #fff9e6;
        padding: 25px;
        border-radius: 12px;
        margin: 30px 0;
        border: 2px solid #FFB800;
      }
      
      .achievements h3 {
        color: #FF9800;
        margin: 0 0 15px 0;
        font-size: 1.3em;
      }
      
      .achievement-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        text-align: left;
      }
      
      .achievement-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px;
      }
      
      .achievement-icon {
        font-size: 1.5em;
      }
      
      .achievement-text {
        color: #333;
        font-size: 0.95em;
      }
      
      .certificate {
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        padding: 30px;
        border-radius: 15px;
        margin: 30px 0;
        border: 3px solid #FF8C00;
        box-shadow: 0 10px 30px rgba(255, 165, 0, 0.3);
      }
      
      .certificate-text {
        font-size: 1.1em;
        color: #333;
        font-weight: bold;
        margin: 10px 0;
      }
      
      .certificate-name {
        font-size: 1.5em;
        color: #8B4513;
        font-weight: bold;
        margin: 15px 0;
        font-style: italic;
      }
      
      .certificate-footer {
        font-size: 0.9em;
        color: #666;
        margin-top: 10px;
      }
      
      .button-group {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin: 40px 0 0 0;
        flex-wrap: wrap;
      }
      
      .btn {
        padding: 15px 35px;
        border: none;
        border-radius: 10px;
        font-size: 1.1em;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }
      
      .btn-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      }
      
      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      }
      
      .btn-secondary {
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
      }
      
      .btn-secondary:hover {
        background: #f0f4ff;
      }
      
      .next-steps-section {
        background: #E8F5E9;
        padding: 25px;
        border-radius: 12px;
        margin: 30px 0;
        border-left: 5px solid #4CAF50;
      }
      
      .next-steps-section h3 {
        color: #2E7D32;
        margin: 0 0 15px 0;
      }
      
      .next-steps-section p {
        color: #1B5E20;
        margin: 8px 0;
      }
      
      .motivational-quote {
        font-size: 1.3em;
        color: #667eea;
        font-style: italic;
        font-weight: 600;
        margin: 30px 0;
        padding: 20px;
        border-left: 5px solid #667eea;
      }
      
      @media (max-width: 768px) {
        .completion-title {
          font-size: 2.2em;
        }
        
        .completion-subtitle {
          font-size: 1.4em;
        }
        
        .stats-grid {
          grid-template-columns: 1fr;
        }
        
        .achievement-list {
          grid-template-columns: 1fr;
        }
        
        .button-group {
          flex-direction: column;
        }
        
        .btn {
          width: 100%;
        }
        
        .completion-container {
          padding: 30px 15px;
        }
      }
    </style>


    <div class="completion-page">
      <div class="completion-container">
        <div class="celebration-animation">
          <div class="celebration-main">🎉</div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
        </div>

        <div class="completion-content">
          <h1 class="completion-title">🎓 Congratulations!</h1>
          <p class="completion-subtitle">You Have Completed The Entire Course!</p>
          
          <p class="completion-message">
            You've successfully mastered all 10 sessions of Electrical Basics! 
            From understanding electrons to designing real-world circuits, 
            you've achieved what takes many students weeks to complete.
          </p>

          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">10</div>
              <div class="stat-label">Sessions Completed</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Quiz Questions</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">16+</div>
              <div class="stat-label">Interactive Tools</div>
            </div>
          </div>

          <div class="achievements">
            <h3>🏆 Skills You've Mastered</h3>
            <div class="achievement-list">
              <div class="achievement-item">
                <span class="achievement-icon">⚡</span>
                <span class="achievement-text">Understand Electricity</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">📐</span>
                <span class="achievement-text">Apply Ohm's Law</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">⛓️</span>
                <span class="achievement-text">Design Series Circuits</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">🔀</span>
                <span class="achievement-text">Design Parallel Circuits</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">📏</span>
                <span class="achievement-text">Measure with Multimeter</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">🎨</span>
                <span class="achievement-text">Read Resistor Codes</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">🔧</span>
                <span class="achievement-text">Troubleshoot Circuits</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">🌍</span>
                <span class="achievement-text">Real-World Applications</span>
              </div>
            </div>
          </div>

          <div class="certificate">
            <div class="certificate-text">🎓 CERTIFICATE OF COMPLETION 🎓</div>
            <p style="margin: 20px 0; color: #333; font-weight: bold;">This certifies that</p>
            <div class="certificate-name">Electronics Learner</div>
            <p style="color: #333;">has successfully completed the</p>
            <p style="color: #333; font-size: 1.2em; font-weight: bold;">Electrical Basics Course</p>
            <p style="color: #333; margin-top: 15px;">All 10 sessions completed with mastery</p>
            <div class="certificate-footer">
              Issued on: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          <div class="motivational-quote">
            "You now understand the language of electricity. 
            The future of innovation is in your hands!"
          </div>

          <div class="next-steps-section">
            <h3>🚀 What's Next?</h3>
            <p>✓ Practice building real circuits with Arduino or Raspberry Pi</p>
            <p>✓ Explore advanced topics: microcontrollers, digital electronics</p>
            <p>✓ Join maker communities and share your projects</p>
            <p>✓ Build something amazing with your new knowledge!</p>
          </div>

          <div class="button-group">
            <button class="btn btn-primary" onclick="window.location.href='/'">
              🏠 Back to Home
            </button>
            <button class="btn btn-secondary" onclick="window.location.href='/course/electricalBasics'">
              📚 Review Course
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  questions: [],
  tools: []
};
