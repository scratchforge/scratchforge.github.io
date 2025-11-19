export const session5 = {
  title: "Ohm's Law",
  content: `
    <style>
      .ohms-law-lesson {
        padding: 0;
        margin: 0;
      }
      
      .ohms-law-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .ohms-law-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .ohms-law-lesson p {
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
      
      .ohms-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: ohms-bounce 2s infinite;
      }
      
      @keyframes ohms-bounce {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-10px) scale(1.05); }
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
        padding: 30px;
        border-radius: 12px;
        margin: 30px 0;
        text-align: center;
      }
      
      .formula-box h3 {
        color: #FF9800;
        margin-top: 0;
        font-size: 1.3em;
      }
      
      .formula-main {
        font-size: 2em;
        font-weight: bold;
        color: #333;
        margin: 20px 0;
        font-family: 'Courier New', monospace;
        background: linear-gradient(135deg, #ffe5e5 0%, #fff0f0 100%);
        padding: 25px;
        border-radius: 10px;
        border: 3px solid #FF6B6B;
      }
      
      .formula-explain {
        text-align: left;
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-top: 15px;
      }
      
      .formula-explain p {
        margin: 10px 0;
      }
      
      .triangle-box {
        background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #667eea;
        text-align: center;
      }
      
      .triangle-box h3 {
        color: #667eea;
        margin-top: 0;
      }
      
      .triangle {
        font-size: 3em;
        font-weight: bold;
        font-family: monospace;
        margin: 20px 0;
        color: #667eea;
        line-height: 1;
      }
      
      .triangle-instruction {
        background: white;
        padding: 15px;
        border-radius: 8px;
        margin-top: 15px;
        text-align: left;
      }
      
      .examples-box {
        background: #E8F5E9;
        border-left: 5px solid #4CAF50;
        padding: 25px;
        margin: 25px 0;
        border-radius: 8px;
      }
      
      .examples-box h3 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .example-item {
        background: white;
        padding: 20px;
        margin: 15px 0;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .example-item strong {
        color: #2E7D32;
      }
      
      .example-calculation {
        background: #f0f0f0;
        padding: 10px;
        border-radius: 4px;
        font-family: monospace;
        margin: 10px 0;
        color: #333;
      }
      
      .relationships-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 25px 0;
      }
      
      .relationship-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
      }
      
      .relationship-card .title {
        font-size: 0.9em;
        opacity: 0.9;
        margin-bottom: 10px;
      }
      
      .relationship-card .formula {
        font-size: 1.3em;
        font-weight: bold;
        margin: 10px 0;
        font-family: monospace;
      }
      
      .relationship-card .meaning {
        font-size: 0.85em;
        margin-top: 10px;
      }
      
      .power-section {
        background: linear-gradient(135deg, #ffe0e0 0%, #fff8e0 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #FF9800;
      }
      
      .power-section h3 {
        color: #FF6B6B;
        margin-top: 0;
      }
      
      .power-section p, .power-section li {
        color: #555;
      }
      
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background: white;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 15px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #667eea;
        color: white;
        font-weight: bold;
      }
      
      .comparison-table tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      
      .ohms-law-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .ohms-law-lesson li {
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
        .relationships-grid {
          grid-template-columns: 1fr;
        }
        
        .formula-main {
          font-size: 1.5em;
          padding: 15px;
        }
      }
    </style>


    <div class="ohms-law-lesson">
      <div class="hero-box">
        <div class="ohms-icon">📐</div>
        <p>Ohm's Law: The most fundamental relationship in all of electronics!</p>
      </div>


      <h2>⚡ The Foundation of Electronics: Ohm's Law</h2>
      <p>
        Everything you've learned so far—voltage, current, and resistance—comes together in one of the most important equations in all of electronics: <span class="highlight">Ohm's Law</span>. This law describes the fundamental relationship between these three quantities.
      </p>
      
      <div class="info-box">
        <strong>📖 Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Ohm's Law states that the electric current flowing through a conductor is directly proportional to the voltage applied and inversely proportional to its resistance. In other words: <strong>Voltage equals Current times Resistance</strong>.</p>
      </div>


      <h2>📊 The Formula: V = I × R</h2>
      <div class="formula-box">
        <h3>Ohm's Law Equation</h3>
        <div class="formula-main">V = I × R</div>
        <div class="formula-explain">
          <p><strong>Where:</strong></p>
          <p>🔹 <strong>V</strong> = Voltage (in Volts)</p>
          <p>🔹 <strong>I</strong> = Current (in Amperes)</p>
          <p>🔹 <strong>R</strong> = Resistance (in Ohms)</p>
          <p style="margin-top: 15px; color: #667eea;"><strong>Translation:</strong> "The voltage equals the current multiplied by the resistance"</p>
        </div>
      </div>


      <h2>🔺 The Ohm's Law Triangle</h2>
      <div class="triangle-box">
        <h3>Easy Way to Remember!</h3>
        <div class="triangle">
             V
            ─────
             I × R
        </div>
        <div class="triangle-instruction">
          <p><strong>How to use the triangle:</strong></p>
          <ul style="margin: 10px 0 0 20px;">
            <li>To find V: Just read it (V at top)</li>
            <li>To find I: Cover I, you see V/R</li>
            <li>To find R: Cover R, you see V/I</li>
          </ul>
        </div>
      </div>


      <h2>⚙️ Three Forms of Ohm's Law</h2>
      <div class="relationships-grid">
        <div class="relationship-card">
          <div class="title">To find VOLTAGE:</div>
          <div class="formula">V = I × R</div>
          <div class="meaning">Voltage = Current × Resistance</div>
        </div>
        <div class="relationship-card">
          <div class="title">To find CURRENT:</div>
          <div class="formula">I = V ÷ R</div>
          <div class="meaning">Current = Voltage ÷ Resistance</div>
        </div>
        <div class="relationship-card">
          <div class="title">To find RESISTANCE:</div>
          <div class="formula">R = V ÷ I</div>
          <div class="meaning">Resistance = Voltage ÷ Current</div>
        </div>
      </div>


      <h2>🧮 Practical Examples</h2>
      <div class="examples-box">
        <h3>✓ Example 1: Finding Voltage</h3>
        <div class="example-item">
          <p><strong>Question:</strong> A 10Ω resistor has 2 Amperes of current flowing through it. What is the voltage across the resistor?</p>
          <p><strong>Given:</strong> I = 2A, R = 10Ω</p>
          <p><strong>Find:</strong> V = ?</p>
          <div class="example-calculation">
            V = I × R<br>
            V = 2A × 10Ω<br>
            <strong>V = 20 Volts</strong>
          </div>
        </div>
      </div>


      <div class="examples-box">
        <h3>✓ Example 2: Finding Current</h3>
        <div class="example-item">
          <p><strong>Question:</strong> A 100Ω resistor has 12 Volts applied across it. How much current flows?</p>
          <p><strong>Given:</strong> V = 12V, R = 100Ω</p>
          <p><strong>Find:</strong> I = ?</p>
          <div class="example-calculation">
            I = V ÷ R<br>
            I = 12V ÷ 100Ω<br>
            <strong>I = 0.12 Amperes (120 mA)</strong>
          </div>
        </div>
      </div>


      <div class="examples-box">
        <h3>✓ Example 3: Finding Resistance</h3>
        <div class="example-item">
          <p><strong>Question:</strong> With 5 Volts applied, 1 Ampere of current flows through a resistor. What is the resistance?</p>
          <p><strong>Given:</strong> V = 5V, I = 1A</p>
          <p><strong>Find:</strong> R = ?</p>
          <div class="example-calculation">
            R = V ÷ I<br>
            R = 5V ÷ 1A<br>
            <strong>R = 5 Ohms</strong>
          </div>
        </div>
      </div>


      <h2>📈 Understanding Relationships</h2>
      <div class="info-box">
        <strong>How V, I, and R Relate:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0;">
          <li><strong>↑ Higher voltage</strong> (same R) = ↑ Higher current</li>
          <li><strong>↓ Lower voltage</strong> (same R) = ↓ Lower current</li>
          <li><strong>↑ Higher resistance</strong> (same V) = ↓ Lower current</li>
          <li><strong>↓ Lower resistance</strong> (same V) = ↑ Higher current</li>
          <li><strong>✓ Double the voltage</strong> = Double the current</li>
          <li><strong>✓ Double the resistance</strong> = Half the current</li>
        </ul>
      </div>


      <h2>💡 Power: An Important Extension</h2>
      <div class="power-section">
        <h3>Calculating Electrical Power</h3>
        <p><strong>Power formula:</strong> P = V × I (measured in Watts)</p>
        <p>Power tells us how much energy is being used or converted per second.</p>
        <ul style="margin-left: 20px;">
          <li><strong>Light bulb:</strong> Converts electrical power to light and heat</li>
          <li><strong>Motor:</strong> Converts electrical power to mechanical motion</li>
          <li><strong>Resistor:</strong> Dissipates power as heat</li>
        </ul>
        <p style="margin-top: 15px;"><strong>Alternative Power Formula:</strong> P = I² × R (when you only know current and resistance)</p>
      </div>


      <h2>🔧 Real-World Applications</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">💡</span>
          <h4>Designing Circuits</h4>
          <p>Engineers use Ohm's Law to calculate resistor values needed for safe current</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔌</span>
          <h4>LED Protection</h4>
          <p>Calculate series resistor: R = (V_supply - V_led) / I_desired</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔋</span>
          <h4>Battery Selection</h4>
          <p>Choose voltage high enough to power your circuit through resistance</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚙️</span>
          <h4>Troubleshooting</h4>
          <p>Measure V and I to calculate actual resistance and find faults</p>
        </div>
      </div>


      <h2>📋 Quick Reference Table</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>What You Know</th>
            <th>What You Want</th>
            <th>Formula</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current (I) & Resistance (R)</td>
            <td>Voltage (V)</td>
            <td>V = I × R</td>
            <td>2A × 5Ω = 10V</td>
          </tr>
          <tr>
            <td>Voltage (V) & Resistance (R)</td>
            <td>Current (I)</td>
            <td>I = V ÷ R</td>
            <td>12V ÷ 4Ω = 3A</td>
          </tr>
          <tr>
            <td>Voltage (V) & Current (I)</td>
            <td>Resistance (R)</td>
            <td>R = V ÷ I</td>
            <td>9V ÷ 3A = 3Ω</td>
          </tr>
          <tr>
            <td>Voltage (V) & Current (I)</td>
            <td>Power (P)</td>
            <td>P = V × I</td>
            <td>12V × 2A = 24W</td>
          </tr>
        </tbody>
      </table>


      <h2>🎯 Step-by-Step Problem Solving</h2>
      <div class="info-box">
        <strong>How to Solve Ohm's Law Problems:</strong>
        <ol style="margin-top: 10px; margin-bottom: 0;">
          <li><strong>Write down what you know:</strong> V = ?, I = ?, R = ?</li>
          <li><strong>Identify what you're looking for</strong></li>
          <li><strong>Choose the right formula</strong> (use the triangle!)</li>
          <li><strong>Substitute the values</strong></li>
          <li><strong>Calculate and include units</strong></li>
          <li><strong>Check if answer makes sense</strong></li>
        </ol>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Georg Simon Ohm discovered this law in 1827 through experiments with simple circuits. His work was revolutionary—before Ohm's Law, electricity was mysterious and unpredictable. Now we can precisely calculate and design any circuit!</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What is Ohm's Law formula?</p>
        <ul>
          <li>A) V = I / R</li>
          <li>B) V = I × R 📐</li>
          <li>C) V = I + R</li>
          <li>D) V = R / I</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - V = I × R!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> If I = 3A and R = 4Ω, what is V?</p>
        <ul>
          <li>A) 7V</li>
          <li>B) 1.33V</li>
          <li>C) 12V 📐</li>
          <li>D) 0.75V</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - V = 3A × 4Ω = 12V!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If V = 24V and R = 6Ω, what is I?</p>
        <ul>
          <li>A) 2A</li>
          <li>B) 4A 📐</li>
          <li>C) 6A</li>
          <li>D) 8A</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - I = 24V ÷ 6Ω = 4A!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> If V = 15V and I = 3A, what is R?</p>
        <ul>
          <li>A) 3Ω</li>
          <li>B) 5Ω 📐</li>
          <li>C) 12Ω</li>
          <li>D) 45Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - R = 15V ÷ 3A = 5Ω!</em></p>


        <p style="margin-top: 20px;"><strong>Question 5:</strong> If V = 10V and I = 2A, what is the Power?</p>
        <ul>
          <li>A) 5W</li>
          <li>B) 12W</li>
          <li>C) 20W ⚡</li>
          <li>D) 0.2W</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - P = 10V × 2A = 20W!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What is Ohm's Law formula?",
      options: ["V = I / R", "V = I × R", "V = I + R", "V = R / I"],
      answer: 1
    },
    {
      q: "If I = 3A and R = 4Ω, what is V?",
      options: ["7V", "1.33V", "12V", "0.75V"],
      answer: 2
    },
    {
      q: "If V = 24V and R = 6Ω, what is I?",
      options: ["2A", "4A", "6A", "8A"],
      answer: 1
    },
    {
      q: "If V = 15V and I = 3A, what is R?",
      options: ["3Ω", "5Ω", "12Ω", "45Ω"],
      answer: 1
    },
    {
      q: "If V = 10V and I = 2A, what is the Power?",
      options: ["5W", "12W", "20W", "0.2W"],
      answer: 2
    }
  ],
  tools: [
    {
      name: "Ohm's Law Calculator",
      type: "calculator",
      description: "Calculate voltage, current, or resistance (leave one blank to find it)",
      fields: [
        { label: "Voltage (V) - leave blank to calculate", key: "voltage", placeholder: "Enter V or leave blank" },
        { label: "Current (A) - leave blank to calculate", key: "current", placeholder: "Enter I or leave blank" },
        { label: "Resistance (Ω) - leave blank to calculate", key: "resistance", placeholder: "Enter R or leave blank" }
      ],
      calculate: (vals) => {
        const v = vals.voltage ? parseFloat(vals.voltage) : null;
        const i = vals.current ? parseFloat(vals.current) : null;
        const r = vals.resistance ? parseFloat(vals.resistance) : null;
        
        let blank_count = [v, i, r].filter(x => x === null).length;
        if (blank_count !== 1) return "Error: Leave exactly ONE field blank to calculate it";
        
        if (v === null && i && r) {
          const voltage = i * r;
          return `V = ${voltage.toFixed(4)} Volts`;
        }
        if (i === null && v && r) {
          if (r === 0) return "Error: Resistance cannot be 0";
          const current = v / r;
          return `I = ${current.toFixed(4)} Amperes`;
        }
        if (r === null && v && i) {
          if (i === 0) return "Error: Current cannot be 0";
          const resistance = v / i;
          return `R = ${resistance.toFixed(4)} Ohms`;
        }
        return "Error: Invalid input";
      },
      unit: "V, A, or Ω"
    },
    {
      name: "Power Calculator",
      type: "calculator",
      description: "Calculate electrical power using P = V × I",
      fields: [
        { label: "Voltage (V)", key: "voltage", placeholder: "Enter voltage" },
        { label: "Current (A)", key: "current", placeholder: "Enter current" }
      ],
      calculate: (vals) => {
        if (!vals.voltage || !vals.current) return null;
        const voltage = parseFloat(vals.voltage);
        const current = parseFloat(vals.current);
        if (voltage < 0 || current < 0) return "Error: Values must be positive";
        const power = voltage * current;
        return `P = ${power.toFixed(4)} Watts`;
      },
      unit: "Watts (W)"
    }
  ]
};
