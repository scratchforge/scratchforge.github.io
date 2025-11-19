export const session4 = {
  title: "Resistor: Function and Types",
  content: `
    <style>
      .resistor-lesson {
        padding: 0;
        margin: 0;
      }
      
      .resistor-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .resistor-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .resistor-lesson p {
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
      
      .resistor-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: resistor-pulse 2s infinite;
      }
      
      @keyframes resistor-pulse {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.05) rotate(5deg); opacity: 0.9; }
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
      
      .color-code-box {
        background: white;
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #667eea;
        margin: 25px 0;
      }
      
      .color-code-box h3 {
        color: #667eea;
        margin-top: 0;
      }
      
      .color-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 10px;
        margin: 20px 0;
      }
      
      .color-band {
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        font-weight: bold;
        color: white;
        font-size: 0.9em;
      }
      
      .band-black { background: #000; }
      .band-brown { background: #8B4513; }
      .band-red { background: #FF0000; }
      .band-orange { background: #FFA500; }
      .band-yellow { background: #FFFF00; color: #333; }
      .band-green { background: #00AA00; }
      .band-blue { background: #0000FF; }
      .band-violet { background: #8B00FF; }
      .band-grey { background: #808080; }
      .band-white { background: #FFFFFF; color: #333; border: 1px solid #ddd; }
      
      .resistor-types {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .resistor-type {
        background: linear-gradient(135deg, #f0f4ff 0%, #fff0f0 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #667eea;
      }
      
      .resistor-type h4 {
        color: #667eea;
        margin-top: 0;
        font-size: 1.2em;
      }
      
      .resistor-type p, .resistor-type li {
        color: #555;
        font-size: 0.95em;
      }
      
      .resistor-type ul {
        margin-left: 20px;
      }
      
      .resistor-symbol {
        background: white;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        margin: 10px 0;
        font-family: monospace;
        font-size: 1.1em;
        border: 1px solid #ddd;
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
      
      .resistance-units {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
        font-size: 0.85em;
        opacity: 0.9;
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
      
      .comparison-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 25px 0;
      }
      
      .series-box {
        background: linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 100%);
        padding: 25px;
        border-radius: 12px;
        border: 3px solid #FF6B6B;
      }
      
      .parallel-box {
        background: linear-gradient(135deg, #E5F3FF 0%, #F0F8FF 100%);
        padding: 25px;
        border-radius: 12px;
        border: 3px solid #4ECDC4;
      }
      
      .series-box h3, .parallel-box h3 {
        margin-top: 0;
        font-size: 1.3em;
      }
      
      .series-box h3 {
        color: #FF6B6B;
      }
      
      .parallel-box h3 {
        color: #4ECDC4;
      }
      
      .series-box p, .parallel-box p {
        margin: 10px 0;
        font-size: 0.95em;
      }
      
      .resistor-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .resistor-lesson li {
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
        
        .color-grid {
          grid-template-columns: repeat(5, 1fr);
        }
      }
    </style>


    <div class="resistor-lesson">
      <div class="hero-box">
        <div class="resistor-icon">🛑</div>
        <p>Resistors: Components that control current flow and protect your circuits!</p>
      </div>


      <h2>⚡ What is a Resistor?</h2>
      <p>
        Now that you understand voltage and current, let's talk about what <span class="highlight">stops</span> or <span class="highlight">limits</span> current flow. That's where resistors come in! A resistor is a component that <strong>opposes the flow of electric current</strong>.
      </p>
      
      <div class="info-box">
        <strong>📖 Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">A resistor is an electrical component that reduces current flow and dissipates energy, usually as heat. The property of resisting current flow is called <strong>resistance</strong>.</p>
      </div>


      <h2>💧 Water Pipe Analogy</h2>
      <p>
        Think of a water pipe system:
      </p>
      <ul>
        <li><strong>Wide open pipe:</strong> Low resistance = lots of water flows</li>
        <li><strong>Partially closed pipe:</strong> Medium resistance = some water flows</li>
        <li><strong>Almost closed pipe:</strong> High resistance = very little water flows</li>
        <li><strong>Resistor in circuit:</strong> Limits electron flow similar to narrowing a pipe</li>
      </ul>


      <h2>📊 The Unit of Resistance: The Ohm</h2>
      <p>
        Resistance is measured in a unit called the <span class="highlight">Ohm (Ω)</span>, named after Georg Simon Ohm who discovered Ohm's Law. One Ohm is the resistance that allows exactly 1 Ampere of current to flow when 1 Volt is applied.
      </p>
      
      <div class="resistance-units">
        <div class="unit-card">
          <div class="symbol">1 Ω</div>
          <div class="name">One Ohm</div>
          <div class="definition">Very low resistance</div>
        </div>
        <div class="unit-card">
          <div class="symbol">100 Ω</div>
          <div class="name">100 Ohms</div>
          <div class="definition">Common resistor value</div>
        </div>
        <div class="unit-card">
          <div class="symbol">10 kΩ</div>
          <div class="name">10 Kilohms</div>
          <div class="definition">10,000 Ohms</div>
        </div>
        <div class="unit-card">
          <div class="symbol">1 MΩ</div>
          <div class="name">1 Megaohm</div>
          <div class="definition">1,000,000 Ohms</div>
        </div>
      </div>


      <h2>🔧 Types of Resistors</h2>
      <div class="resistor-types">
        <div class="resistor-type">
          <h4>🔌 Fixed Resistors</h4>
          <p><strong>Resistance value:</strong> Cannot be changed</p>
          <p><strong>How they work:</strong> Made of carbon film or wirewound material</p>
          <p><strong>Uses:</strong> Most circuits, protection, LED limiting</p>
          <p><strong>Symbol:</strong></p>
          <div class="resistor-symbol">~~~WWW~~~</div>
          <p><strong>Examples:</strong> 10Ω, 100Ω, 1kΩ, 10kΩ</p>
        </div>


        <div class="resistor-type">
          <h4>⚙️ Variable Resistors</h4>
          <p><strong>Resistance value:</strong> Can be adjusted</p>
          <p><strong>How they work:</strong> Sliding contact moves along resistive material</p>
          <p><strong>Uses:</strong> Volume knobs, brightness controls, speed controls</p>
          <div class="resistor-symbol">Potentiometer</div>
          <p><strong>Examples:</strong></p>
          <ul>
            <li>Potentiometer (volume control)</li>
            <li>Rheostat (dimmer switch)</li>
            <li>Trim pot (fine adjustment)</li>
          </ul>
        </div>


        <div class="resistor-type">
          <h4>🌡️ Special Resistors</h4>
          <p><strong>Resistance value:</strong> Changes with conditions</p>
          <p><strong>How they work:</strong> React to temperature, light, or other factors</p>
          <p><strong>Uses:</strong> Sensors, temperature control, light detection</p>
          <p><strong>Types:</strong></p>
          <ul>
            <li><strong>Thermistor:</strong> Changes with temperature</li>
            <li><strong>LDR (Photoresistor):</strong> Changes with light</li>
            <li><strong>Varistor:</strong> Changes with voltage</li>
          </ul>
        </div>
      </div>


      <h2>🎨 Reading Resistor Color Codes</h2>
      <p>
        Fixed resistors have colored bands that tell you their resistance value. This is called the <span class="highlight">color code</span>.
      </p>
      
      <div class="color-code-box">
        <h3>📊 Standard Resistor Color Code</h3>
        <div class="color-grid">
          <div class="color-band band-black">Black = 0</div>
          <div class="color-band band-brown">Brown = 1</div>
          <div class="color-band band-red">Red = 2</div>
          <div class="color-band band-orange">Orange = 3</div>
          <div class="color-band band-yellow">Yellow = 4</div>
          <div class="color-band band-green">Green = 5</div>
          <div class="color-band band-blue">Blue = 6</div>
          <div class="color-band band-violet">Violet = 7</div>
          <div class="color-band band-grey">Grey = 8</div>
          <div class="color-band band-white">White = 9</div>
        </div>
        
        <div class="info-box" style="margin-top: 25px;">
          <strong>📖 How to Read Resistor Bands:</strong>
          <ul style="margin-top: 10px; margin-bottom: 0;">
            <li><strong>Band 1:</strong> First digit</li>
            <li><strong>Band 2:</strong> Second digit</li>
            <li><strong>Band 3:</strong> Multiplier (how many zeros to add)</li>
            <li><strong>Band 4:</strong> Tolerance (accuracy)</li>
          </ul>
        </div>
        
        <div class="formula-box">
          <h3>Example: Brown-Black-Red</h3>
          <div class="formula-explain" style="text-align: left; background: white; padding: 15px; border-radius: 8px;">
            <p>🟤 Brown = 1</p>
            <p>⚫ Black = 0</p>
            <p>🔴 Red = ×100 (multiplier)</p>
            <p style="margin-top: 15px; color: #667eea; font-weight: bold;">Result: 10 × 100 = 1000Ω (1 kΩ)</p>
          </div>
        </div>
      </div>


      <h2>🔌 How Resistors Work in Circuits</h2>
      <div class="comparison-box">
        <div class="series-box">
          <h3>⛓️ Series Connection</h3>
          <p><strong>Formula:</strong> R_total = R₁ + R₂ + R₃</p>
          <p><strong>Total resistance:</strong> Increases</p>
          <p><strong>Example:</strong></p>
          <p>10Ω + 20Ω + 30Ω = 60Ω total</p>
          <p style="color: #FF6B6B;"><strong>⚠️ More resistance = Less current</strong></p>
        </div>


        <div class="parallel-box">
          <h3>🔀 Parallel Connection</h3>
          <p><strong>Formula:</strong> 1/R_total = 1/R₁ + 1/R₂ + 1/R₃</p>
          <p><strong>Total resistance:</strong> Decreases</p>
          <p><strong>Example:</strong></p>
          <p>1/R = 1/10 + 1/20 = 0.15</p>
          <p style="color: #4ECDC4;"><strong>✓ Less resistance = More current</strong></p>
        </div>
      </div>


      <h2>💡 Real-Life Examples of Resistors</h2>
      <div class="examples-box">
        <h3>🔌 Where Resistors Are Used</h3>
        <div class="example-item">
          <strong>LED Protection:</strong> 220Ω resistor limits current to protect LED from burning out
        </div>
        <div class="example-item">
          <strong>Volume Control:</strong> Potentiometer (variable resistor) adjusts speaker volume
        </div>
        <div class="example-item">
          <strong>Light Bulb:</strong> Tungsten filament has resistance and produces heat/light
        </div>
        <div class="example-item">
          <strong>Heating Element:</strong> Nichrome wire has high resistance, generates heat
        </div>
        <div class="example-item">
          <strong>Temperature Sensor:</strong> Thermistor changes resistance with temperature
        </div>
        <div class="example-item">
          <strong>Light Sensor:</strong> Photoresistor changes resistance with light level
        </div>
      </div>


      <h2>⚡ Why Resistors Are Important</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🛡️</span>
          <h4>Circuit Protection</h4>
          <p>Limit dangerous currents that could damage components</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚙️</span>
          <h4>Control Flow</h4>
          <p>Regulate how much current flows through a circuit</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💡</span>
          <h4>Functional Purpose</h4>
          <p>Create useful effects like light, heat, and voltage division</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔧</span>
          <h4>Fine Tuning</h4>
          <p>Variable resistors adjust circuits to desired operation</p>
        </div>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The human body has resistance too! Your skin has about 1,000,000 Ohms of resistance when dry, but drops to 1,000 Ohms when wet. This is why water makes electricity more dangerous!</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What is the unit of resistance?</p>
        <ul>
          <li>A) Volt</li>
          <li>B) Ampere</li>
          <li>C) Ohm 🛑</li>
          <li>D) Watt</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - Ohm (Ω)!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> What do resistors do?</p>
        <ul>
          <li>A) Create voltage</li>
          <li>B) Oppose current flow 🛑</li>
          <li>C) Store energy</li>
          <li>D) Amplify signals</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Oppose current flow!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If resistors are connected in series, what happens to total resistance?</p>
        <ul>
          <li>A) Decreases</li>
          <li>B) Increases ⛓️</li>
          <li>C) Stays same</li>
          <li>D) Becomes zero</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Total resistance increases!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> A resistor with bands Brown-Black-Orange has what resistance value?</p>
        <ul>
          <li>A) 100Ω</li>
          <li>B) 1,000Ω (1kΩ)</li>
          <li>C) 10,000Ω (10kΩ) 🎨</li>
          <li>D) 100,000Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - 10 × 1000 = 10kΩ!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What is the unit of resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: 2
    },
    {
      q: "What do resistors do?",
      options: ["Create voltage", "Oppose current flow", "Store energy", "Amplify signals"],
      answer: 1
    },
    {
      q: "In series connection, what happens to total resistance?",
      options: ["Decreases", "Increases", "Stays same", "Becomes zero"],
      answer: 1
    },
    {
      q: "Brown-Black-Orange band resistor value is?",
      options: ["100Ω", "1kΩ", "10kΩ", "100kΩ"],
      answer: 2
    }
  ],
  tools: [
    {
      name: "Resistance Calculator (Series & Parallel)",
      type: "calculator",
      description: "Calculate combined resistance for series and parallel circuits",
      fields: [
        { label: "Resistor 1 (Ω)", key: "r1", placeholder: "Enter R1 value" },
        { label: "Resistor 2 (Ω)", key: "r2", placeholder: "Enter R2 value" },
        { label: "Circuit Type (1=series, 0=parallel)", key: "type", placeholder: "1 or 0" }
      ],
      calculate: (vals) => {
        if (!vals.r1 || !vals.r2) return null;
        const r1 = parseFloat(vals.r1);
        const r2 = parseFloat(vals.r2);
        const type = parseInt(vals.type) || 1;
        
        if (r1 <= 0 || r2 <= 0) return "Error: Resistance must be positive";
        
        if (type === 1) {
          // Series: R_total = R1 + R2
          const total = r1 + r2;
          return `${total.toFixed(4)}Ω (Series)`;
        } else {
          // Parallel: 1/R_total = 1/R1 + 1/R2
          const total = 1 / (1/r1 + 1/r2);
          return `${total.toFixed(4)}Ω (Parallel)`;
        }
      },
      unit: "Ohms (Ω)"
    },
    {
      name: "Resistor Color Code Decoder",
      type: "calculator",
      description: "Decode resistor color bands to find resistance value",
      fields: [
        { label: "First Band (1-9)", key: "band1", placeholder: "1-9" },
        { label: "Second Band (0-9)", key: "band2", placeholder: "0-9" },
        { label: "Multiplier Band (0-9)", key: "multiplier", placeholder: "Multiplier (0=1, 1=10, 2=100, etc)" }
      ],
      calculate: (vals) => {
        if (!vals.band1 || vals.band2 === '' || !vals.multiplier) return null;
        const b1 = parseInt(vals.band1);
        const b2 = parseInt(vals.band2);
        const mult = parseInt(vals.multiplier);
        
        if (b1 < 1 || b1 > 9) return "Error: First band must be 1-9";
        if (b2 < 0 || b2 > 9) return "Error: Second band must be 0-9";
        
        const baseValue = b1 * 10 + b2;
        const multiplier = Math.pow(10, mult);
        const resistance = baseValue * multiplier;
        
        if (resistance >= 1000000) {
          return `${(resistance / 1000000).toFixed(2)} MΩ`;
        } else if (resistance >= 1000) {
          return `${(resistance / 1000).toFixed(2)} kΩ`;
        } else {
          return `${resistance.toFixed(0)}Ω`;
        }
      },
      unit: "Ohms (Ω)"
    }
  ]
};
