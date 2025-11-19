export const session10 = {
  title: "Course Review & Mastery",
  content: `
    <style>
      .review-lesson {
        padding: 0;
        margin: 0;
      }
      
      .review-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .review-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .review-lesson p {
        color: #333;
        margin-bottom: 15px;
        font-size: 1.05em;
        line-height: 1.7;
      }
      
      .hero-box {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border-radius: 15px;
        padding: 40px;
        margin: 30px 0;
        text-align: center;
        border: 3px solid #667eea;
      }
      
      .celebration-icon {
        font-size: 80px;
        margin-bottom: 15px;
        animation: celebrate 1s infinite;
        display: inline-block;
      }
      
      @keyframes celebrate {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1.15) rotate(-5deg); }
        75% { transform: scale(1.1) rotate(5deg); }
      }
      
      .hero-box h1 {
        color: #667eea;
        font-size: 2.2em;
        margin: 15px 0;
      }
      
      .hero-box p {
        font-size: 1.25em;
        color: #667eea;
        font-weight: 600;
        margin: 0;
      }
      
      .summary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin: 30px 0;
      }
      
      .summary-card {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid rgba(102, 126, 234, 0.2);
        transition: all 0.3s ease;
      }
      
      .summary-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        border-color: #667eea;
      }
      
      .card-number {
        display: inline-block;
        background: #667eea;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 10px;
      }
      
      .summary-card h4 {
        color: #667eea;
        margin: 10px 0;
        font-size: 1.2em;
      }
      
      .summary-card p {
        margin: 8px 0;
        font-size: 0.95em;
        color: #555;
      }
      
      .summary-card .key-points {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #ddd;
      }
      
      .summary-card ul {
        margin: 10px 0 0 20px;
        padding: 0;
      }
      
      .summary-card li {
        font-size: 0.9em;
        margin-bottom: 5px;
        color: #555;
      }
      
      .formula-reference {
        background: #fff9e6;
        border: 3px solid #FFB800;
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
      }
      
      .formula-reference h3 {
        color: #FF9800;
        margin-top: 0;
      }
      
      .formula-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin: 15px 0;
      }
      
      .formula-item {
        background: white;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #667eea;
      }
      
      .formula-item .formula {
        font-size: 1.2em;
        font-weight: bold;
        font-family: monospace;
        color: #333;
        margin: 10px 0;
      }
      
      .formula-item .description {
        font-size: 0.9em;
        color: #666;
      }
      
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 15px;
        text-align: left;
      }
      
      .comparison-table th {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-weight: bold;
      }
      
      .comparison-table tr:nth-child(even) {
        background: #f9f9f9;
      }
      
      .comparison-table tr:hover {
        background: #f0f4ff;
      }
      
      .learning-objectives {
        background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #4CAF50;
      }
      
      .learning-objectives h3 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .objectives-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 15px 0;
      }
      
      .objective-item {
        background: white;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .objective-item strong {
        color: #2E7D32;
      }
      
      .next-steps {
        background: linear-gradient(135deg, #F3E5F5 0%, #EDE7F6 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #9C27B0;
      }
      
      .next-steps h3 {
        color: #6A1B9A;
        margin-top: 0;
      }
      
      .next-steps p, .next-steps li {
        color: #4A148C;
      }
      
      .next-steps ul {
        margin-left: 20px;
      }
      
      .concepts-mastered {
        background: linear-gradient(135deg, #FFEBEE 0%, #FCE4EC 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #E91E63;
      }
      
      .concepts-mastered h3 {
        color: #880E4F;
        margin-top: 0;
      }
      
      .concepts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
        margin: 15px 0;
      }
      
      .concept-badge {
        background: linear-gradient(135deg, #E91E63 0%, #C2185B 100%);
        color: white;
        padding: 12px;
        border-radius: 8px;
        text-align: center;
        font-weight: bold;
        font-size: 0.95em;
      }
      
      .review-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .review-lesson li {
        margin-bottom: 10px;
        color: #555;
        line-height: 1.6;
      }
      
      .quiz-box {
        background: #fff9e6;
        padding: 25px;
        border-radius: 15px;
        margin-top: 30px;
        border: 3px solid #ffd700;
      }
      
      .quiz-box h3 {
        color: #f39c12;
        margin-top: 0;
        font-size: 1.4em;
      }
      
      .quiz-box h4 {
        color: #f39c12;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      
      .quiz-box ul {
        list-style-type: none;
        margin-left: 0;
      }
      
      .quiz-box li {
        padding: 8px 0;
        font-size: 1.05em;
      }
      
      .fun-fact {
        background: #e8f5e9;
        border-left: 5px solid #4caf50;
        padding: 20px;
        margin: 25px 0;
        border-radius: 8px;
      }
      
      .fun-fact strong {
        color: #4caf50;
        font-size: 1.1em;
      }
      
      .completion-badge {
        background: linear-gradient(135deg, #FFD700 0%, #FFC700 100%);
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        margin: 25px 0;
        border: 3px solid #FFA000;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
      }
      
      .completion-badge h2 {
        color: #FF6F00;
        margin: 0;
        border: none;
        padding: 0;
      }
      
      .completion-badge p {
        color: #FF6F00;
        font-size: 1.1em;
        margin: 10px 0;
      }
      
      @media (max-width: 768px) {
        .summary-grid {
          grid-template-columns: 1fr;
        }
        
        .objectives-grid {
          grid-template-columns: 1fr;
        }
        
        .concepts-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .formula-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>


    <div class="review-lesson">
      <div class="hero-box">
        <div class="celebration-icon">🎉</div>
        <h1>Congratulations!</h1>
        <p>You've completed the Electrical Basics course!</p>
      </div>


      <h2>📚 Course Summary</h2>
      <p>
        Over the past 9 sessions, you've learned the fundamental concepts that power our entire modern world. Let's review what you've mastered!
      </p>


      <div class="summary-grid">
        <div class="summary-card">
          <span class="card-number">1</span>
          <h4>Introduction to Electricity</h4>
          <p>Learned what electricity is, how atoms work, and the history of electrical discovery</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Electrons and atoms</li>
              <li>Static vs current electricity</li>
              <li>Historical discoveries</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">2</span>
          <h4>Current: Definition</h4>
          <p>Understood how current flows and the difference between AC and DC</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Current measurement (Amperes)</li>
              <li>DC vs AC electricity</li>
              <li>Safety considerations</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">3</span>
          <h4>Voltage: Definition</h4>
          <p>Learned about electrical pressure and how voltage works</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Voltage definition (Volts)</li>
              <li>Voltage drop</li>
              <li>Real-world voltages</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">4</span>
          <h4>Resistor: Function</h4>
          <p>Understood how resistors limit current and types of resistors</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Resistance (Ohms)</li>
              <li>Color codes</li>
              <li>Types of resistors</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">5</span>
          <h4>Ohm's Law: Foundation</h4>
          <p>Mastered the fundamental relationship: V = I × R</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>V = I × R formula</li>
              <li>Problem solving</li>
              <li>Power calculations</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">6</span>
          <h4>Series Circuits</h4>
          <p>Learned how components connect in a single path</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Same current everywhere</li>
              <li>Voltage divides</li>
              <li>Resistances add</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">7</span>
          <h4>Parallel Circuits</h4>
          <p>Understood multiple paths for current with independent components</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Same voltage everywhere</li>
              <li>Currents add</li>
              <li>Home wiring standard</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">8</span>
          <h4>Measurement Tools</h4>
          <p>Learned to test and troubleshoot circuits with multimeters</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Voltmeter connection</li>
              <li>Ammeter measurement</li>
              <li>Ohmmeter testing</li>
            </ul>
          </div>
        </div>

        <div class="summary-card">
          <span class="card-number">9</span>
          <h4>Real-World Applications</h4>
          <p>Saw how electricity powers everything in our world</p>
          <div class="key-points">
            <strong>Key concepts:</strong>
            <ul>
              <li>Home wiring systems</li>
              <li>Power transmission</li>
              <li>Common devices</li>
            </ul>
          </div>
        </div>
      </div>


      <h2>🎯 Learning Objectives Achieved</h2>
      <div class="learning-objectives">
        <h3>✓ You Can Now:</h3>
        <div class="objectives-grid">
          <div class="objective-item">
            <strong>✓ Understand electricity fundamentals</strong>
            <p>Know how electrons, voltage, and current work</p>
          </div>
          <div class="objective-item">
            <strong>✓ Apply Ohm's Law</strong>
            <p>Solve problems using V = I × R</p>
          </div>
          <div class="objective-item">
            <strong>✓ Design circuits</strong>
            <p>Create both series and parallel circuits</p>
          </div>
          <div class="objective-item">
            <strong>✓ Read resistor codes</strong>
            <p>Identify component values from color bands</p>
          </div>
          <div class="objective-item">
            <strong>✓ Measure values</strong>
            <p>Use multimeters to test circuits</p>
          </div>
          <div class="objective-item">
            <strong>✓ Troubleshoot</strong>
            <p>Find and fix circuit problems</p>
          </div>
        </div>
      </div>


      <h2>📋 Essential Formulas Reference</h2>
      <div class="formula-reference">
        <h3>Master These Equations!</h3>
        <div class="formula-grid">
          <div class="formula-item">
            <div class="formula">V = I × R</div>
            <div class="description">Ohm's Law: Voltage = Current × Resistance</div>
          </div>
          <div class="formula-item">
            <div class="formula">I = V ÷ R</div>
            <div class="description">Find Current: Current = Voltage ÷ Resistance</div>
          </div>
          <div class="formula-item">
            <div class="formula">R = V ÷ I</div>
            <div class="description">Find Resistance: Resistance = Voltage ÷ Current</div>
          </div>
          <div class="formula-item">
            <div class="formula">P = V × I</div>
            <div class="description">Power: Power = Voltage × Current</div>
          </div>
          <div class="formula-item">
            <div class="formula">R_series = R₁ + R₂ + R₃</div>
            <div class="description">Series Resistors: Add all resistances</div>
          </div>
          <div class="formula-item">
            <div class="formula">1/R_parallel = 1/R₁ + 1/R₂ + 1/R₃</div>
            <div class="description">Parallel Resistors: Sum of reciprocals</div>
          </div>
        </div>
      </div>


      <h2>📊 Series vs Parallel Quick Reference</h2>
      <table class="comparison-table">
        <tr>
          <th>Property</th>
          <th>Series Circuit</th>
          <th>Parallel Circuit</th>
        </tr>
        <tr>
          <td><strong>Voltage</strong></td>
          <td>Divides among components</td>
          <td>Same at all components</td>
        </tr>
        <tr>
          <td><strong>Current</strong></td>
          <td>Same everywhere</td>
          <td>Adds from all branches</td>
        </tr>
        <tr>
          <td><strong>Resistance</strong></td>
          <td>Adds together (increases)</td>
          <td>Decreases (reciprocal)</td>
        </tr>
        <tr>
          <td><strong>If one fails</strong></td>
          <td>All components stop</td>
          <td>Others keep working</td>
        </tr>
        <tr>
          <td><strong>Formula</strong></td>
          <td>R_total = R₁ + R₂ + R₃</td>
          <td>1/R_t = 1/R₁ + 1/R₂ + 1/R₃</td>
        </tr>
        <tr>
          <td><strong>Used for</strong></td>
          <td>Simple circuits, protection</td>
          <td>Home wiring, cars</td>
        </tr>
      </table>


      <h2>🏆 Concepts You've Mastered</h2>
      <div class="concepts-mastered">
        <h3>Key Terminology</h3>
        <div class="concepts-grid">
          <div class="concept-badge">Voltage (V)</div>
          <div class="concept-badge">Current (A)</div>
          <div class="concept-badge">Resistance (Ω)</div>
          <div class="concept-badge">Power (W)</div>
          <div class="concept-badge">Ohm's Law</div>
          <div class="concept-badge">Series</div>
          <div class="concept-badge">Parallel</div>
          <div class="concept-badge">Multimeter</div>
          <div class="concept-badge">LED Circuit</div>
          <div class="concept-badge">Battery</div>
          <div class="concept-badge">Resistor</div>
          <div class="concept-badge">Continuity</div>
        </div>
      </div>


      <h2>🚀 Next Steps in Your Learning</h2>
      <div class="next-steps">
        <h3>Keep Growing Your Skills!</h3>
        <ul>
          <li><strong>Arduino/Microcontrollers:</strong> Learn to program circuits and sensors</li>
          <li><strong>Digital Electronics:</strong> Study logic gates, binary, and computer architecture</li>
          <li><strong>Advanced Circuits:</strong> Learn capacitors, inductors, transformers</li>
          <li><strong>Electronics Projects:</strong> Build real projects: robots, IoT devices, automation</li>
          <li><strong>Power Electronics:</strong> Study motors, power supplies, energy systems</li>
          <li><strong>Embedded Systems:</strong> Combine hardware and software programming</li>
          <li><strong>Professional Certification:</strong> Consider formal electronics technician training</li>
        </ul>
      </div>


      <h2>💡 Pro Tips for Your Electronics Journey</h2>
      <div class="info-box">
        <strong>🔧 Best Practices:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0; margin-left: 20px;">
          <li>Always double-check polarity before powering circuits</li>
          <li>Use breadboards first, then solder permanent circuits</li>
          <li>Keep detailed notes of all your projects</li>
          <li>Start simple, gradually increase complexity</li>
          <li>Never stop learning - electronics evolves constantly</li>
          <li>Join maker communities (Arduino, Raspberry Pi forums)</li>
          <li>Share your projects and learn from others</li>
          <li>Practice, practice, practice with real components</li>
        </ul>
      </div>


      <div class="fun-fact">
        <strong>⚡ Final Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The knowledge you've gained in this course is the same foundation used by electrical engineers designing power grids, smartphone engineers building processors, automotive engineers creating electric vehicles, and roboticists building intelligent machines. The basics never change - only the applications grow more complex. You now have the fundamental tools to understand and create nearly any electrical system!</p>
      </div>


      <div class="completion-badge">
        <h2>🎓 COURSE COMPLETE!</h2>
        <p>You've mastered Electrical Basics</p>
        <p style="font-size: 1.3em;">Ready to build amazing things! ⚡</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Final Mastery Test!</h3>
        
        <h4>Question 1:</h4>
        <p><strong>What is Ohm's Law?</strong></p>
        <ul>
          <li>A) V = I / R</li>
          <li>B) V = I × R 📐</li>
          <li>C) V = I + R</li>
          <li>D) V = R / I</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - V = I × R</em></p>

        
        <h4>Question 2:</h4>
        <p><strong>In a series circuit, what is the same everywhere?</strong></p>
        <ul>
          <li>A) Voltage</li>
          <li>B) Current ⛓️</li>
          <li>C) Resistance</li>
          <li>D) Power</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Current is the same everywhere!</em></p>

        
        <h4>Question 3:</h4>
        <p><strong>In a parallel circuit, what is the same everywhere?</strong></p>
        <ul>
          <li>A) Voltage 🔀</li>
          <li>B) Current</li>
          <li>C) Resistance</li>
          <li>D) Power</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - Voltage is the same everywhere!</em></p>

        
        <h4>Question 4:</h4>
        <p><strong>How is a voltmeter connected?</strong></p>
        <ul>
          <li>A) Series</li>
          <li>B) Parallel 📏</li>
          <li>C) Both</li>
          <li>D) Floating</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Voltmeter connects PARALLEL!</em></p>

        
        <h4>Question 5:</h4>
        <p><strong>What type of circuit is home wiring?</strong></p>
        <ul>
          <li>A) Series</li>
          <li>B) Parallel 🏠</li>
          <li>C) Both</li>
          <li>D) Neither</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Homes use PARALLEL circuits!</em></p>

        
        <h4>Question 6:</h4>
        <p><strong>What does the color code represent on a resistor?</strong></p>
        <ul>
          <li>A) Voltage rating</li>
          <li>B) Power rating</li>
          <li>C) Resistance value & tolerance 🎨</li>
          <li>D) Manufacturer</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - Color bands show resistance value and tolerance!</em></p>

        
        <h4>Question 7:</h4>
        <p><strong>When measuring resistance with ohmmeter, the circuit should be:</strong></p>
        <ul>
          <li>A) Powered on</li>
          <li>B) Powered off ✓</li>
          <li>C) Doesn't matter</li>
          <li>D) AC power only</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Always power OFF when measuring resistance!</em></p>

        
        <h4>Question 8:</h4>
        <p><strong>If R₁=10Ω and R₂=20Ω in series, total R =?</strong></p>
        <ul>
          <li>A) 10Ω</li>
          <li>B) 20Ω</li>
          <li>C) 30Ω ⛓️</li>
          <li>D) 6.67Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - 10 + 20 = 30Ω</em></p>

        
        <h4>Question 9:</h4>
        <p><strong>If R₁=10Ω and R₂=10Ω in parallel, total R =?</strong></p>
        <ul>
          <li>A) 20Ω</li>
          <li>B) 5Ω 🔀</li>
          <li>C) 10Ω</li>
          <li>D) 0Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - 1/R = 1/10 + 1/10 = 0.2, so R = 5Ω</em></p>

        
        <h4>Question 10:</h4>
        <p><strong>A 12V power supply and 3A load - what is the power?</strong></p>
        <ul>
          <li>A) 4W</li>
          <li>B) 15W</li>
          <li>C) 36W ⚡</li>
          <li>D) 9W</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - P = 12V × 3A = 36W</em></p>
      </div>


      <div class="hero-box" style="margin-top: 40px; background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(56, 142, 60, 0.1) 100%); border-color: #4CAF50;">
        <p style="font-size: 1.5em; color: #2E7D32; font-weight: bold;">🌟 Thank you for completing this course!</p>
        <p style="color: #388E3C; font-size: 1.1em;">You now understand the foundations of electricity and are ready to explore advanced topics.</p>
        <p style="color: #388E3C; font-size: 1em;">The future of electronics awaits! ⚡🚀</p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What is Ohm's Law?",
      options: ["V = I / R", "V = I × R", "V = I + R", "V = R / I"],
      answer: 1
    },
    {
      q: "In series, what is same everywhere?",
      options: ["Voltage", "Current", "Resistance", "Power"],
      answer: 1
    },
    {
      q: "In parallel, what is same everywhere?",
      options: ["Voltage", "Current", "Resistance", "Power"],
      answer: 0
    },
    {
      q: "How is voltmeter connected?",
      options: ["Series", "Parallel", "Both", "Floating"],
      answer: 1
    },
    {
      q: "Home wiring uses?",
      options: ["Series", "Parallel", "Both", "Neither"],
      answer: 1
    },
    {
      q: "Resistor color codes show?",
      options: ["Voltage", "Power", "Resistance & tolerance", "Manufacturer"],
      answer: 2
    },
    {
      q: "Measuring resistance - circuit?",
      options: ["Powered on", "Powered off", "Doesn't matter", "AC only"],
      answer: 1
    },
    {
      q: "R₁=10Ω, R₂=20Ω series - total?",
      options: ["10Ω", "20Ω", "30Ω", "6.67Ω"],
      answer: 2
    },
    {
      q: "R₁=10Ω, R₂=10Ω parallel - total?",
      options: ["20Ω", "5Ω", "10Ω", "0Ω"],
      answer: 1
    },
    {
      q: "12V power, 3A load - power?",
      options: ["4W", "15W", "36W", "9W"],
      answer: 2
    }
  ],
  tools: []
};
