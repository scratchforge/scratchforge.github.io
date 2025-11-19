export const session3 = {
  title: "Voltage: Definition and Measurement",
  content: `
    <style>
      .voltage-lesson {
        padding: 0;
        margin: 0;
      }
      
      .voltage-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .voltage-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .voltage-lesson p {
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
      
      .voltage-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: voltage-pulse 1.5s infinite;
      }
      
      @keyframes voltage-pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
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
      
      .voltage-units {
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
      
      .water-analogy {
        background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #667eea;
      }
      
      .water-analogy h3 {
        color: #667eea;
        margin-top: 0;
      }
      
      .analogy-item {
        background: white;
        padding: 12px;
        margin: 10px 0;
        border-left: 4px solid #667eea;
        border-radius: 4px;
      }
      
      .analogy-item strong {
        color: #667eea;
      }
      
      .comparison-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 25px 0;
      }
      
      .battery-box {
        background: linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 100%);
        padding: 25px;
        border-radius: 12px;
        border: 3px solid #FF6B6B;
      }
      
      .power-box {
        background: linear-gradient(135deg, #E5F3FF 0%, #F0F8FF 100%);
        padding: 25px;
        border-radius: 12px;
        border: 3px solid #4ECDC4;
      }
      
      .battery-box h3, .power-box h3 {
        margin-top: 0;
        font-size: 1.3em;
      }
      
      .battery-box h3 {
        color: #FF6B6B;
      }
      
      .power-box h3 {
        color: #4ECDC4;
      }
      
      .battery-box p, .power-box p {
        margin: 10px 0;
        font-size: 0.95em;
      }
      
      .voltage-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .voltage-lesson li {
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
      
      .table-box {
        overflow-x: auto;
        margin: 25px 0;
      }
      
      .voltage-table {
        width: 100%;
        border-collapse: collapse;
        background: white;
      }
      
      .voltage-table th, .voltage-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .voltage-table th {
        background-color: #667eea;
        color: white;
        font-weight: bold;
      }
      
      .voltage-table tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      
      @media (max-width: 768px) {
        .comparison-box {
          grid-template-columns: 1fr;
        }
      }
    </style>


    <div class="voltage-lesson">
      <div class="hero-box">
        <div class="voltage-icon">🔋</div>
        <p>Voltage: The electrical pressure that pushes electrons through circuits and powers your devices!</p>
      </div>


      <h2>⚡ What is Voltage?</h2>
      <p>
        Now you understand that electrons flow as current, but what makes them flow? That's where <span class="highlight">voltage</span> comes in! Voltage is the electrical "push" or "pressure" that forces electrons to move.
      </p>
      
      <div class="info-box">
        <strong>📖 Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Voltage is the electrical potential difference (or pressure) between two points in a circuit. It's the "force" that makes electrons want to flow from one place to another.</p>
      </div>


      <h2>💧 Think of It Like Water</h2>
      <div class="water-analogy">
        <h3>Water Pipe Analogy</h3>
        <div class="analogy-item">
          <strong>Voltage</strong> = Water pressure in the pipe
        </div>
        <div class="analogy-item">
          <strong>Current</strong> = Amount of water flowing (liters per second)
        </div>
        <div class="analogy-item">
          <strong>Electrons</strong> = Water molecules
        </div>
        <div class="analogy-item">
          <strong>Higher voltage</strong> = Higher pressure = More force to push electrons
        </div>
        <div class="analogy-item">
          <strong>Lower voltage</strong> = Lower pressure = Less force to push electrons
        </div>
      </div>


      <h2>📊 The Voltage Formula</h2>
      <div class="formula-box">
        <h3>Voltage Equation</h3>
        <div class="formula">V = W / Q</div>
        <div class="formula-explain">
          <p><strong>Where:</strong></p>
          <p>🔹 <strong>V</strong> = Voltage (measured in Volts)</p>
          <p>🔹 <strong>W</strong> = Work/Energy (measured in Joules)</p>
          <p>🔹 <strong>Q</strong> = Charge (measured in Coulombs)</p>
          <p style="margin-top: 15px; color: #667eea;"><strong>Translation:</strong> "Voltage equals the energy needed to move a unit of charge from one point to another"</p>
        </div>
      </div>


      <h2>⚡ Units of Voltage: The Volt</h2>
      <p>
        Voltage is measured in a unit called the <span class="highlight">Volt (V)</span>, named after Alessandro Volta, the inventor of the battery. One Volt represents the pressure needed to push one Coulomb of charge between two points.
      </p>
      
      <div class="voltage-units">
        <div class="unit-card">
          <div class="symbol">1.5 V</div>
          <div class="name">AA Battery</div>
          <div class="definition">Typical flashlight battery</div>
        </div>
        <div class="unit-card">
          <div class="symbol">9 V</div>
          <div class="name">9V Battery</div>
          <div class="definition">Used in smoke detectors</div>
        </div>
        <div class="unit-card">
          <div class="symbol">12 V</div>
          <div class="name">Car Battery</div>
          <div class="definition">Powers your vehicle</div>
        </div>
        <div class="unit-card">
          <div class="symbol">120-240 V</div>
          <div class="name">Home Outlet</div>
          <div class="definition">Depends on country</div>
        </div>
      </div>


      <h2>🔋 Real-Life Voltage Examples</h2>
      <div class="examples-box">
        <h3>🔌 Common Voltages</h3>
        <div class="example-item">
          <strong>AAA Battery:</strong> 1.5V - Small devices
        </div>
        <div class="example-item">
          <strong>Phone Charger:</strong> 5V - Safe USB voltage
        </div>
        <div class="example-item">
          <strong>Laptop Charger:</strong> 19-20V - More power for laptops
        </div>
        <div class="example-item">
          <strong>Home Outlet (US):</strong> 120V - Lights, appliances
        </div>
        <div class="example-item">
          <strong>Home Outlet (Europe):</strong> 230V - Higher voltage
        </div>
        <div class="example-item">
          <strong>Power Lines:</strong> 1000-765,000V - Long distance transmission
        </div>
        <div class="example-item">
          <strong>Lightning:</strong> ~1,000,000,000V - Extremely dangerous!
        </div>
      </div>


      <h2>⚠️ High Voltage = Dangerous!</h2>
      <div class="info-box" style="border-left-color: #ff6b6b;">
        <strong style="color: #ff6b6b;">⚡ Voltage Safety Rules:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0;">
          <li><strong>5V or less:</strong> Generally safe to touch</li>
          <li><strong>50V or more:</strong> Can cause serious burns</li>
          <li><strong>100V or more:</strong> Can cause heart failure (DANGEROUS!)</li>
          <li><strong>High voltage areas:</strong> STAY AWAY! Use "Warning: High Voltage" signs</li>
        </ul>
      </div>


      <h2>⚙️ Voltage vs Current vs Resistance</h2>
      <div class="comparison-box">
        <div class="battery-box">
          <h3>🔋 Voltage (V)</h3>
          <p><strong>The Push:</strong> Electrical pressure forcing electrons</p>
          <p><strong>Unit:</strong> Volts</p>
          <p><strong>Source:</strong> Batteries and power supplies</p>
          <p><strong>Analogy:</strong> Water pressure in a hose</p>
          <p><strong>Effect:</strong> Creates the potential for current</p>
        </div>


        <div class="power-box">
          <h3>🔌 Current (A)</h3>
          <p><strong>The Flow:</strong> Amount of electrons actually flowing</p>
          <p><strong>Unit:</strong> Amperes</p>
          <p><strong>Result:</strong> Flow of charges through circuit</p>
          <p><strong>Analogy:</strong> Amount of water flowing per second</p>
          <p><strong>Effect:</strong> Determines brightness of lights, heat</p>
        </div>
      </div>


      <h2>📏 How to Measure Voltage</h2>
      <div class="info-box">
        <strong>Using a Voltmeter:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0;">
          <li>🔴 <strong>Red probe:</strong> Connect to positive side</li>
          <li>⚫ <strong>Black probe:</strong> Connect to negative/ground</li>
          <li>📊 <strong>Connection:</strong> In PARALLEL (across component)</li>
          <li>⚠️ <strong>Never series:</strong> Don't put voltmeter in series like ammeter</li>
          <li>✅ <strong>Safe:</strong> Measuring voltage won't harm circuit</li>
        </ul>
      </div>


      <h2>🔗 Calculating Voltage: Examples</h2>
      <div class="formula-box">
        <h3>Example Problem 1</h3>
        <div class="formula-explain">
          <p><strong>Question:</strong> A battery does 100 joules of work to move 10 coulombs of charge. What is the voltage?</p>
          <p style="margin-top: 15px;"><strong>Solution:</strong></p>
          <p>V = W / Q</p>
          <p>V = 100 J / 10 C</p>
          <p><strong>V = 10 Volts</strong></p>
        </div>
      </div>


      <div class="formula-box">
        <h3>Example Problem 2 (Using Ohm's Law)</h3>
        <div class="formula-explain">
          <p><strong>Question:</strong> A 5Ω resistor has 2A of current flowing through it. What is the voltage across it?</p>
          <p style="margin-top: 15px;"><strong>Solution (using V = I × R):</strong></p>
          <p>V = I × R</p>
          <p>V = 2A × 5Ω</p>
          <p><strong>V = 10 Volts</strong></p>
        </div>
      </div>


      <h2>⚡ Voltage Drop</h2>
      <div class="info-box">
        <strong>What is Voltage Drop?</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">When current flows through a component (like a resistor or light bulb), some of the voltage is "used up" or "dropped". This is called voltage drop.</p>
        <p><strong>Example:</strong> In a simple circuit:</p>
        <ul style="margin-bottom: 0;">
          <li>Battery provides: 12V</li>
          <li>Light bulb uses: 10V (voltage drop)</li>
          <li>Resistor uses: 2V (voltage drop)</li>
          <li>Total drops: 10V + 2V = 12V ✓</li>
        </ul>
      </div>


      <h2>🎯 Key Points About Voltage</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🔋</span>
          <h4>Voltage Source</h4>
          <p>Batteries and power supplies provide voltage to push electrons</p>
        </div>
        <div class="info-card">
          <span class="card-icon">➡️</span>
          <h4>Electron Pressure</h4>
          <p>Higher voltage = more pressure to move electrons</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💡</span>
          <h4>Powers Devices</h4>
          <p>Voltage is needed to make devices work (lights, motors, etc.)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚠️</span>
          <h4>Voltage Safety</h4>
          <p>High voltage can be dangerous - always be careful!</p>
        </div>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The electric eel can generate up to 860 volts of electricity! It uses this to stun prey and communicate. That's about 7 times the voltage of your home outlet!</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What is the unit of voltage?</p>
        <ul>
          <li>A) Ampere</li>
          <li>B) Ohm</li>
          <li>C) Volt ⚡</li>
          <li>D) Watt</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - Volt (V)!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> What does voltage represent?</p>
        <ul>
          <li>A) Amount of electrons flowing</li>
          <li>B) Electrical pressure/push 🔋</li>
          <li>C) Resistance to current</li>
          <li>D) Power used by device</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Electrical pressure/push!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If W = 50J and Q = 5C, what is the voltage?</p>
        <ul>
          <li>A) 5V</li>
          <li>B) 10V ⚡</li>
          <li>C) 15V</li>
          <li>D) 20V</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - V = 50/5 = 10 Volts!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> Which voltage is dangerous?</p>
        <ul>
          <li>A) 5V</li>
          <li>B) 50V (dangerous)</li>
          <li>C) 120V (very dangerous) ⚠️</li>
          <li>D) Both B and C</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: D - Both are dangerous!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What is the unit of voltage?",
      options: ["Ampere", "Ohm", "Volt", "Watt"],
      answer: 2
    },
    {
      q: "What does voltage represent?",
      options: ["Amount of electrons flowing", "Electrical pressure/push", "Resistance to current", "Power used"],
      answer: 1
    },
    {
      q: "If W = 50J and Q = 5C, what is the voltage?",
      options: ["5V", "10V", "15V", "20V"],
      answer: 1
    },
    {
      q: "Which voltage is dangerous?",
      options: ["5V", "50V", "120V", "Both B and C"],
      answer: 3
    }
  ],
  tools: [
    {
      name: "Voltage Calculator",
      type: "calculator",
      description: "Calculate voltage using V = W/Q formula",
      fields: [
        { label: "Work/Energy (Joules)", key: "work", placeholder: "Enter work (J)" },
        { label: "Charge (Coulombs)", key: "charge", placeholder: "Enter charge (C)" }
      ],
      calculate: (vals) => {
        if (!vals.work || !vals.charge) return null;
        const work = parseFloat(vals.work);
        const charge = parseFloat(vals.charge);
        if (charge === 0) return "Error: Charge cannot be 0";
        const voltage = work / charge;
        return `${voltage.toFixed(4)} Volts`;
      },
      unit: "Volts (V)"
    },
    {
      name: "Ohm's Law Voltage Calculator",
      type: "calculator",
      description: "Calculate voltage using V = I × R formula",
      fields: [
        { label: "Current (Amperes)", key: "current", placeholder: "Enter current (A)" },
        { label: "Resistance (Ohms)", key: "resistance", placeholder: "Enter resistance (Ω)" }
      ],
      calculate: (vals) => {
        if (!vals.current || !vals.resistance) return null;
        const current = parseFloat(vals.current);
        const resistance = parseFloat(vals.resistance);
        const voltage = current * resistance;
        return `${voltage.toFixed(4)} Volts`;
      },
      unit: "Volts (V)"
    }
  ]
};
