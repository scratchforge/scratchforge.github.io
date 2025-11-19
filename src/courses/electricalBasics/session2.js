export const session2 = {
  title: "Current: Definition and Types",
  content: `
    <style>
      .current-lesson {
        padding: 0;
        margin: 0;
      }
      
      .current-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .current-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .current-lesson p {
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
      
      .current-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: flow 2s infinite;
      }
      
      @keyframes flow {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(10px); }
      }
      
      .hero-box p {
        font-size: 1.2em;
        color: #667eea;
        font-weight: 600;
        margin: 0;
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
      
      .comparison-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 25px 0;
      }
      
      .dc-box {
        background: linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 100%);
        padding: 25px;
        border-radius: 12px;
        border: 3px solid #FF6B6B;
      }
      
      .ac-box {
        background: linear-gradient(135deg, #E5F3FF 0%, #F0F8FF 100%);
        padding: 25px;
        border-radius: 12px;
        border: 3px solid #4ECDC4;
      }
      
      .dc-box h3, .ac-box h3 {
        margin-top: 0;
        font-size: 1.3em;
      }
      
      .dc-box h3 {
        color: #FF6B6B;
      }
      
      .ac-box h3 {
        color: #4ECDC4;
      }
      
      .dc-box p, .ac-box p {
        margin: 10px 0;
        font-size: 0.95em;
      }
      
      .wave-animation {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
      }
      
      .dc-wave {
        font-size: 40px;
        animation: dc-pulse 1.5s infinite;
      }
      
      @keyframes dc-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      .ac-wave {
        font-size: 40px;
        animation: ac-wave 1.5s infinite;
      }
      
      @keyframes ac-wave {
        0% { transform: translateX(0) rotateY(0); }
        25% { transform: translateX(5px) rotateY(5deg); }
        50% { transform: translateX(0) rotateY(0); }
        75% { transform: translateX(-5px) rotateY(-5deg); }
        100% { transform: translateX(0) rotateY(0); }
      }
      
      .formula-box {
        background: #fff9e6;
        border: 3px solid #FFB800;
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        text-align: center;
      }
      
      .formula-box h3 {
        color: #FF9800;
        margin-top: 0;
      }
      
      .formula {
        font-size: 1.4em;
        font-weight: bold;
        color: #333;
        margin: 15px 0;
        font-family: 'Courier New', monospace;
        background: white;
        padding: 15px;
        border-radius: 8px;
      }
      
      .formula-explain {
        text-align: left;
        margin-top: 15px;
        background: white;
        padding: 15px;
        border-radius: 8px;
      }
      
      .formula-explain p {
        margin: 8px 0;
      }
      
      .examples-box {
        background: #E8F5E9;
        border-left: 5px solid #4CAF50;
        padding: 20px;
        margin: 25px 0;
        border-radius: 8px;
      }
      
      .examples-box h3 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .examples-box p, .examples-box li {
        color: #1B5E20;
      }
      
      .example-item {
        background: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .example-item strong {
        color: #2E7D32;
      }
      
      .current-units {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .unit-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
      }
      
      .unit-card .symbol {
        font-size: 2em;
        margin-bottom: 10px;
      }
      
      .unit-card .name {
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 5px;
      }
      
      .unit-card .definition {
        font-size: 0.9em;
        opacity: 0.9;
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
      
      .timeline-symbol {
        background: #667eea;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
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
      
      .current-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .current-lesson li {
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
      
      @media (max-width: 768px) {
        .comparison-box {
          grid-template-columns: 1fr;
        }
      }
    </style>


    <div class="current-lesson">
      <div class="hero-box">
        <div class="current-icon">⚡</div>
        <p>Electric Current: The flow of electrons through a wire that powers everything electrical!</p>
      </div>


      <h2>🔌 What is Electric Current?</h2>
      <p>
        Now that you know electricity is the movement of electrons, let's talk about <span class="highlight">electric current</span>. Current is like a "river of electrons" flowing through wires!
      </p>
      
      <div class="info-box">
        <strong>📖 Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Electric current is the <strong>amount of charge flowing past a point per unit of time</strong>. Think of it as: "How many electrons pass through a point every second?"</p>
      </div>


      <h2>🎯 Understanding Current with the Water Analogy</h2>
      <p>
        Imagine a water pipe with water flowing through it:
      </p>
      <ul>
        <li><strong>The electrons</strong> = Water molecules</li>
        <li><strong>The wire</strong> = The pipe</li>
        <li><strong>The current</strong> = How much water flows per second (flow rate)</li>
        <li><strong>More current</strong> = More electrons flowing = Stronger light or power</li>
        <li><strong>Less current</strong> = Fewer electrons flowing = Weaker light or power</li>
      </ul>


      <h2>📊 The Current Formula</h2>
      <div class="formula-box">
        <h3>The Current Equation</h3>
        <div class="formula">I = Q / t</div>
        <div class="formula-explain">
          <p><strong>Where:</strong></p>
          <p>🔹 <strong>I</strong> = Current (measured in Amperes)</p>
          <p>🔹 <strong>Q</strong> = Charge (measured in Coulombs)</p>
          <p>🔹 <strong>t</strong> = Time (measured in seconds)</p>
          <p style="margin-top: 15px; color: #667eea;"><strong>Translation:</strong> "Current equals the amount of charge divided by the time it takes to flow"</p>
        </div>
      </div>


      <h2>⚡ Units of Current: The Ampere</h2>
      <p>
        Current is measured in a unit called the <span class="highlight">Ampere (A)</span>, named after French scientist André-Marie Ampère. Sometimes people call it an "amp" for short.
      </p>
      
      <div class="current-units">
        <div class="unit-card">
          <div class="symbol">1 A</div>
          <div class="name">One Ampere</div>
          <div class="definition">About 6.24 × 10¹⁸ electrons flowing per second!</div>
        </div>
        <div class="unit-card">
          <div class="symbol">0.1 A</div>
          <div class="name">One Tenth Amp</div>
          <div class="definition">Used by LEDs and small devices</div>
        </div>
        <div class="unit-card">
          <div class="symbol">10 A</div>
          <div class="name">Ten Amps</div>
          <div class="definition">Used by household appliances</div>
        </div>
      </div>

      <div class="examples-box">
        <h3>🔋 Real-Life Examples of Current</h3>
        <div class="example-item">
          <strong>Flashlight:</strong> Uses about 0.5 A (half an ampere)
        </div>
        <div class="example-item">
          <strong>Light Bulb:</strong> Uses about 0.5-1 A
        </div>
        <div class="example-item">
          <strong>Refrigerator:</strong> Uses about 5-10 A
        </div>
        <div class="example-item">
          <strong>Electric Oven:</strong> Uses about 20-40 A
        </div>
        <div class="example-item">
          <strong>Computer:</strong> Uses about 5-10 A
        </div>
        <div class="example-item">
          <strong>iPhone Charger:</strong> Uses about 1-2 A
        </div>
      </div>


      <h2>🔀 Two Types of Current: DC vs AC</h2>
      <p>
        There are two main types of electric current, and they behave very differently!
      </p>


      <div class="comparison-box">
        <div class="dc-box">
          <h3>🔋 DC (Direct Current)</h3>
          <div class="wave-animation">
            <div class="dc-wave">→→→→</div>
          </div>
          <p><strong>Direction:</strong> Electrons flow in ONE direction only (from negative to positive)</p>
          <p><strong>Voltage:</strong> Constant (stays the same)</p>
          <p><strong>Speed:</strong> Smooth and steady</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>🔋 Batteries (AA, AAA, etc.)</li>
            <li>📱 Phone chargers</li>
            <li>💻 Computer power supplies</li>
            <li>🚗 Car batteries</li>
            <li>☀️ Solar panels</li>
          </ul>
          <p><strong>Symbol:</strong> ⊕⊖ (straight lines showing positive and negative)</p>
        </div>


        <div class="ac-box">
          <h3>⚡ AC (Alternating Current)</h3>
          <div class="wave-animation">
            <div class="ac-wave">↔️↔️↔️↔️</div>
          </div>
          <p><strong>Direction:</strong> Electrons flow BACK and FORTH, changing direction repeatedly</p>
          <p><strong>Voltage:</strong> Changes over time (goes up and down)</p>
          <p><strong>Speed:</strong> Oscillates (wiggles like a wave)</p>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>🏠 Home electrical outlets</li>
            <li>💡 Home lighting</li>
            <li>🍳 Kitchen appliances</li>
            <li>🏭 Factory equipment</li>
            <li>🏥 Hospital equipment</li>
          </ul>
          <p><strong>Symbol:</strong> ~ (wavy line)</p>
        </div>
      </div>


      <h2>⚙️ Why Do We Use Both DC and AC?</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🔋</span>
          <h4>DC is Best For:</h4>
          <p>Small devices that need portable power (phones, laptops, cars)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>AC is Best For:</h4>
          <p>Sending power over long distances with less energy loss</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔄</span>
          <h4>AC Frequency:</h4>
          <p>In most countries, AC changes direction 50-60 times per second!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🌍</span>
          <h4>Global Standard:</h4>
          <p>USA uses 60 Hz (cycles/second), Europe uses 50 Hz</p>
        </div>
      </div>


      <h2>📈 Calculating Current: Practical Example</h2>
      <div class="formula-box">
        <h3>Example Problem</h3>
        <div class="formula-explain">
          <p><strong>Question:</strong> A wire has 12 coulombs of charge flowing through it in 3 seconds. What is the current?</p>
          <p style="margin-top: 15px;"><strong>Solution:</strong></p>
          <p>I = Q / t</p>
          <p>I = 12 C / 3 s</p>
          <p><strong>I = 4 Amperes (4 A)</strong></p>
          <p style="margin-top: 15px; color: #667eea;"><strong>Translation:</strong> 4 coulombs of electrons flow past each point every second!</p>
        </div>
      </div>


      <h2>⚠️ How Much Current is Safe?</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-symbol">1</div>
          <div class="timeline-content">
            <strong>0.001 A (1 mA)</strong>
            Can barely feel it - safe
          </div>
        </div>


        <div class="timeline-item">
          <div class="timeline-symbol">2</div>
          <div class="timeline-content">
            <strong>0.005 A (5 mA)</strong>
            Can feel pain and muscle contractions
          </div>
        </div>


        <div class="timeline-item">
          <div class="timeline-symbol">⚠️</div>
          <div class="timeline-content">
            <strong>0.05 A (50 mA)</strong>
            Can cause breathing problems and heart issues - DANGEROUS!
          </div>
        </div>


        <div class="timeline-item">
          <div class="timeline-symbol">🚫</div>
          <div class="timeline-content">
            <strong>0.1+ A (100+ mA)</strong>
            Can cause serious injury or death - FATAL!
          </div>
        </div>
      </div>

      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The human body is conductive (conducts electricity)! Contact with just 0.1 amperes (100 milliamps) can stop your heart. This is why we must always respect electricity and never touch exposed wires!</p>
      </div>


      <h2>🔧 How Circuits Use Current</h2>
      <div class="info-box">
        <strong>In a Simple Circuit:</strong>
        <ul style="margin: 15px 0 0 0;">
          <li><strong>Battery/Power Source</strong> pushes electrons (provides the "force")</li>
          <li><strong>Wires</strong> provide the path for electrons to flow</li>
          <li><strong>Lightbulb/Device</strong> uses the flowing electrons to do work (make light, heat, etc.)</li>
          <li><strong>Switch</strong> controls whether current flows or stops</li>
        </ul>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What is the unit of electric current?</p>
        <ul>
          <li>A) Volt</li>
          <li>B) Ampere ⚡</li>
          <li>C) Ohm</li>
          <li>D) Watt</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Ampere (or "Amp" for short)!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> Which current type flows in only ONE direction?</p>
        <ul>
          <li>A) Alternating Current (AC)</li>
          <li>B) Direct Current (DC) 🔋</li>
          <li>C) Both equally</li>
          <li>D) Neither</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - DC (Direct Current) from batteries!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If 6 coulombs flow in 2 seconds, what is the current?</p>
        <ul>
          <li>A) 2 A</li>
          <li>B) 3 A ⚡</li>
          <li>C) 4 A</li>
          <li>D) 6 A</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - I = Q/t = 6/2 = 3 Amperes!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What is the unit of electric current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: 1
    },
    {
      q: "Which current flows in only ONE direction?",
      options: ["AC (Alternating)", "DC (Direct)", "Both equally", "Neither"],
      answer: 1
    },
    {
      q: "If 6 coulombs flow in 2 seconds, what is the current?",
      options: ["2 A", "3 A", "4 A", "6 A"],
      answer: 1
    },
    {
      q: "What does AC stand for?",
      options: ["Alternate Charge", "Alternating Current", "Amplified Charge", "Active Current"],
      answer: 1
    }
  ],
  tools: [
    {
      name: "Current Calculator",
      type: "calculator",
      description: "Calculate current using I = Q/t formula",
      fields: [
        { label: "Charge (Coulombs)", key: "charge", placeholder: "Enter charge (C)" },
        { label: "Time (seconds)", key: "time", placeholder: "Enter time (s)" }
      ],
      calculate: (vals) => {
        if (!vals.charge || !vals.time) return null;
        const charge = parseFloat(vals.charge);
        const time = parseFloat(vals.time);
        if (time === 0) return "Error: Time cannot be 0";
        const current = charge / time;
        return `${current.toFixed(4)} Amperes`;
      },
      unit: "Amperes (A)"
    }
  ]
};
