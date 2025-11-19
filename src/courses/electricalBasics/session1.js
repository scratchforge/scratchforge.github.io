export const session1 = {
  title: "Introduction to Electricity",
  content: `
    <style>
      .electricity-lesson {
        padding: 0;
        margin: 0;
      }
      
      .electricity-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .electricity-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .electricity-lesson p {
        color: #333;
        margin-bottom: 15px;
        font-size: 1.05em;
        line-height: 1.7;
      }
      
      .hero-box {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border-radius: 15px;
        padding: 30px;
        margin: 30px 0;
        text-align: center;
        border: 2px solid rgba(102, 126, 234, 0.2);
      }
      
      .lightning-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: pulse-light 2s infinite;
      }
      
      @keyframes pulse-light {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      
      .hero-box p {
        font-size: 1.2em;
        color: #667eea;
        font-weight: 600;
        margin: 0;
      }
      
      .atom-container {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 30px auto;
      }
      
      .nucleus {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        background: #ff6b6b;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 20px;
        box-shadow: 0 0 20px rgba(255, 107, 107, 0.6);
        animation: nucleus-pulse 2s infinite;
      }
      
      @keyframes nucleus-pulse {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.1); }
      }
      
      .electron-orbit {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px dashed #667eea;
        border-radius: 50%;
      }
      
      .orbit-1 {
        width: 100px;
        height: 100px;
        animation: rotate-orbit 4s linear infinite;
      }
      
      .orbit-2 {
        width: 160px;
        height: 160px;
        animation: rotate-orbit 6s linear infinite;
      }
      
      @keyframes rotate-orbit {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      .electron {
        position: absolute;
        width: 16px;
        height: 16px;
        background: #4ecdc4;
        border-radius: 50%;
        box-shadow: 0 0 10px #4ecdc4;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      
      .info-box {
        background: #f8f9fa;
        border-left: 5px solid #667eea;
        padding: 20px;
        margin: 25px 0;
        border-radius: 8px;
      }
      
      .info-box strong {
        color: #667eea;
        font-size: 1.1em;
      }
      
      .highlight {
        background: linear-gradient(120deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 600;
        color: #667eea;
      }
      
      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .info-card {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid rgba(102, 126, 234, 0.2);
        transition: all 0.3s ease;
      }
      
      .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        border-color: #667eea;
      }
      
      .card-icon {
        font-size: 50px;
        margin-bottom: 15px;
        display: block;
      }
      
      .info-card h4 {
        color: #667eea;
        margin-bottom: 10px;
        font-size: 1.2em;
      }
      
      .info-card p {
        margin: 0;
        font-size: 0.95em;
        color: #555;
      }
      
      .timeline {
        position: relative;
        padding: 20px 0;
        margin: 30px 0;
      }
      
      .timeline-item {
        display: flex;
        margin-bottom: 25px;
        align-items: flex-start;
        gap: 20px;
      }
      
      .timeline-date {
        background: #667eea;
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: bold;
        min-width: 80px;
        text-align: center;
        flex-shrink: 0;
      }
      
      .timeline-content {
        flex: 1;
        background: #f8f9fa;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      
      .timeline-content strong {
        color: #667eea;
        display: block;
        margin-bottom: 5px;
      }
      
      .electricity-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .electricity-lesson li {
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
    </style>

    <div class="electricity-lesson">
      <div class="hero-box">
        <div class="lightning-icon">⚡</div>
        <p>Electricity: The flow of tiny particles called electrons that brings light, power, and energy to everything around us!</p>
      </div>

      <h2>🔍 What is Electricity?</h2>
      <p>
        Imagine millions of tiny invisible balls flowing through wires like water through pipes. These tiny balls are called <span class="highlight">electrons</span>, and when they move together, they create electricity!
      </p>
      
      <div class="info-box">
        <strong>💡 Simple Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Electricity is the movement of electrons (tiny charged particles) from one place to another. This movement creates energy that can power lights, computers, phones, and everything electrical!</p>
      </div>

      <h2>🔬 Understanding Atoms - The Building Blocks</h2>
      <p>
        Everything around you is made of tiny particles called <span class="highlight">atoms</span>. Atoms are so small that millions of them would fit on the tip of a needle! Each atom is like a mini solar system:
      </p>

      <div class="atom-container">
        <div class="nucleus">+</div>
        <div class="electron-orbit orbit-1">
          <div class="electron"></div>
        </div>
        <div class="electron-orbit orbit-2">
          <div class="electron"></div>
        </div>
      </div>

      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h4>Nucleus (Center)</h4>
          <p>Contains <strong>protons</strong> with positive charge (+). It's like the sun in our solar system!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🌀</span>
          <h4>Electrons (Orbiting)</h4>
          <p>Tiny particles with negative charge (−) that orbit around the nucleus like planets!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>Electricity Happens!</h4>
          <p>When electrons jump from atom to atom, they create an electric current!</p>
        </div>
      </div>

      <h2>📜 Who Discovered Electricity?</h2>
      <p>
        Electricity wasn't invented by one person - it was discovered and understood over hundreds of years by many curious scientists!
      </p>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">600 BC</div>
          <div class="timeline-content">
            <strong>Ancient Greeks</strong>
            Thales of Miletus discovered that rubbing amber (fossilized tree resin) with fur created a force that attracted small objects. The word "electricity" comes from "elektron," the Greek word for amber!
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1752</div>
          <div class="timeline-content">
            <strong>Benjamin Franklin 🪁</strong>
            Famous for his kite experiment! He flew a kite during a thunderstorm (dangerous - don't try this!) and proved that lightning is electricity. He also invented the lightning rod to protect buildings.
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1800</div>
          <div class="timeline-content">
            <strong>Alessandro Volta 🔋</strong>
            Created the first electric battery! He stacked copper and zinc discs to create a steady flow of electricity. The "volt" unit is named after him!
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1879</div>
          <div class="timeline-content">
            <strong>Thomas Edison 💡</strong>
            Invented the first practical electric light bulb and built power stations to bring electricity to homes and cities.
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1888</div>
          <div class="timeline-content">
            <strong>Nikola Tesla ⚡</strong>
            Developed alternating current (AC) electricity that we use in our homes today. His inventions made it possible to send electricity over long distances!
          </div>
        </div>
      </div>

      <h2>🤔 Why Did They Search for Electricity?</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🕯️</span>
          <h4>Light in Darkness</h4>
          <p>People wanted better lighting than candles and oil lamps</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚙️</span>
          <h4>Power Machines</h4>
          <p>To run factories and tools without muscle power or steam</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📡</span>
          <h4>Communication</h4>
          <p>To send messages quickly over long distances (telegraph)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔬</span>
          <h4>Scientific Curiosity</h4>
          <p>Understanding the mysterious force they saw in lightning and static</p>
        </div>
      </div>

      <h2>🌟 How Does Electricity Work?</h2>
      <div class="info-box">
        <strong>The Water Analogy:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">Think of electricity like water flowing through pipes:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>Electrons</strong> = Water molecules</li>
          <li><strong>Wires</strong> = Pipes</li>
          <li><strong>Battery/Power source</strong> = Water pump</li>
          <li><strong>Switch</strong> = Valve that turns flow on/off</li>
          <li><strong>Electric current</strong> = Water pressure/flow rate</li>
        </ul>
      </div>

      <h2>⚡ Types of Electricity</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🔋</span>
          <h4>Static Electricity</h4>
          <p>When electrons build up in one place. Example: rubbing a balloon on your hair makes it stick!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">➡️</span>
          <h4>Current Electricity</h4>
          <p>When electrons flow continuously through a wire. This powers all your devices!</p>
        </div>
      </div>

      <h2>🎯 Why is Electricity Important?</h2>
      <p>Electricity has completely transformed human life! Here's how:</p>
      <ul>
        <li>💡 <strong>Lighting:</strong> We can see clearly at night</li>
        <li>🏥 <strong>Healthcare:</strong> Powers life-saving medical equipment</li>
        <li>📱 <strong>Communication:</strong> Phones, internet, TV, radio</li>
        <li>🍳 <strong>Food:</strong> Refrigerators keep food fresh, stoves cook meals</li>
        <li>🚗 <strong>Transportation:</strong> Electric trains, cars, and more</li>
        <li>💻 <strong>Technology:</strong> Computers, smartphones, games</li>
        <li>🏭 <strong>Industry:</strong> Factories can produce goods efficiently</li>
        <li>🌡️ <strong>Comfort:</strong> Heating and cooling our homes</li>
      </ul>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What creates electricity?</p>
        <ul>
          <li>A) Movement of electrons ⚡</li>
          <li>B) Movement of protons</li>
          <li>C) Heat only</li>
          <li>D) Light only</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - The movement of electrons creates electric current!</em></p>

        <p style="margin-top: 20px;"><strong>Question 2:</strong> Who flew a kite in a storm to study electricity?</p>
        <ul>
          <li>A) Thomas Edison</li>
          <li>B) Benjamin Franklin 🪁</li>
          <li>C) Nikola Tesla</li>
          <li>D) Alessandro Volta</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Benjamin Franklin in 1752!</em></p>
      </div>

      <div class="fun-fact">
        <strong>🌱 Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Lightning is a natural form of electricity! A single lightning bolt contains enough electricity to power a 100-watt light bulb for more than 3 months!</p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What creates electricity?",
      options: ["Movement of electrons", "Movement of protons", "Heat", "Light"],
      answer: 0
    },
    {
      q: "Who flew a kite in a storm to study electricity?",
      options: ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla", "Alessandro Volta"],
      answer: 1
    },
    {
      q: "What is at the center of an atom?",
      options: ["Electrons", "Nucleus with protons", "Neutrons only", "Empty space"],
      answer: 1
    }
  ],
  tools: [
    {
      name: "Atom Explorer",
      type: "interactive",
      description: "Visualize electron orbits and understand atomic structure"
    }
  ]
};