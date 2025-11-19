export const session8 = {
  title: "Measuring Values",
  content: `
    <style>
      .measurement-lesson {
        padding: 0;
        margin: 0;
      }
      
      .measurement-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .measurement-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .measurement-lesson p {
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
      
      .measurement-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: measure-swing 2s infinite;
      }
      
      @keyframes measure-swing {
        0%, 100% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(5deg) scale(1.05); }
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
      
      .instrument-box {
        background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #4CAF50;
      }
      
      .instrument-box h3 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .instrument-item {
        background: white;
        padding: 20px;
        margin: 15px 0;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .instrument-item strong {
        color: #2E7D32;
      }
      
      .connection-guide {
        background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #FF9800;
      }
      
      .connection-guide h3 {
        color: #E65100;
        margin-top: 0;
      }
      
      .connection-table {
        width: 100%;
        border-collapse: collapse;
        margin: 15px 0;
      }
      
      .connection-table th, .connection-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .connection-table th {
        background-color: #FF9800;
        color: white;
        font-weight: bold;
      }
      
      .connection-table tr:nth-child(even) {
        background-color: #fff8f0;
      }
      
      .dos-donts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 25px 0;
      }
      
      .dos-box {
        background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #4CAF50;
      }
      
      .donts-box {
        background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #F44336;
      }
      
      .dos-box h3 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .donts-box h3 {
        color: #C62828;
        margin-top: 0;
      }
      
      .dos-box li, .dos-box strong {
        color: #1B5E20;
      }
      
      .donts-box li, .donts-box strong {
        color: #B71C1C;
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
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        margin: 10px 0;
        color: #333;
      }
      
      .measurement-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .measurement-lesson li {
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
      
      .warning-box {
        background: #fff3cd;
        border-left: 5px solid #ffc107;
        padding: 20px;
        margin: 25px 0;
        border-radius: 8px;
      }
      
      .warning-box strong {
        color: #856404;
        font-size: 1.1em;
      }
      
      .warning-box p, .warning-box li {
        color: #856404;
      }
      
      @media (max-width: 768px) {
        .dos-donts {
          grid-template-columns: 1fr;
        }
        
        .connection-table {
          font-size: 0.9em;
        }
      }
    </style>


    <div class="measurement-lesson">
      <div class="hero-box">
        <div class="measurement-icon">📏</div>
        <p>Measuring Values: Use instruments to test and troubleshoot circuits!</p>
      </div>


      <h2>📏 Why Measure Electrical Values?</h2>
      <p>
        Understanding circuits is great, but <span class="highlight">measuring actual values</span> is essential for building, testing, and troubleshooting. With the right instruments, you can verify that circuits work correctly and find problems when they don't.
      </p>
      
      <div class="info-box">
        <strong>📖 Why It Matters:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Measurements tell us if a circuit is working as designed. You might build a circuit that <em>should</em> work mathematically, but actual testing reveals problems. Engineers and technicians measure values constantly!</p>
      </div>


      <h2>🔧 Common Measurement Instruments</h2>
      <div class="instrument-box">
        <h3>Essential Tools</h3>
        
        <div class="instrument-item">
          <strong>⚡ Multimeter (Most Important!)</strong>
          <p>A single tool that measures:</p>
          <ul style="margin: 10px 0 0 20px;">
            <li><strong>Voltage (V):</strong> AC and DC</li>
            <li><strong>Current (A):</strong> DC current</li>
            <li><strong>Resistance (Ω):</strong> Ohms</li>
            <li><strong>Continuity:</strong> Tests if circuit is complete</li>
          </ul>
          <p style="margin-top: 10px; color: #2E7D32;"><strong>Cost:</strong> $10-50 for basic models</p>
        </div>
        
        <div class="instrument-item">
          <strong>🔋 Voltmeter</strong>
          <p>Measures voltage between two points</p>
          <ul style="margin: 10px 0 0 20px;">
            <li><strong>DC Voltmeter:</strong> Measures DC voltage</li>
            <li><strong>AC Voltmeter:</strong> Measures AC voltage</li>
            <li><strong>Range:</strong> Usually 0-1000V</li>
          </ul>
          <p style="margin-top: 10px; color: #2E7D32;"><strong>Connection:</strong> PARALLEL (across component)</p>
        </div>
        
        <div class="instrument-item">
          <strong>🔌 Ammeter</strong>
          <p>Measures current flowing through a circuit</p>
          <ul style="margin: 10px 0 0 20px;">
            <li><strong>Direct measurement:</strong> Current must flow through it</li>
            <li><strong>Range:</strong> Usually in Amperes or milliAmps</li>
          </ul>
          <p style="margin-top: 10px; color: #2E7D32;"><strong>Connection:</strong> SERIES (in the current path)</p>
        </div>
        
        <div class="instrument-item">
          <strong>📊 Ohmmeter</strong>
          <p>Measures resistance</p>
          <ul style="margin: 10px 0 0 20px;">
            <li><strong>Must use UNPOWERED circuit:</strong> Never measure resistance in powered circuit!</li>
            <li><strong>Range:</strong> From Ohms to Megaohms</li>
          </ul>
          <p style="margin-top: 10px; color: #2E7D32;"><strong>Connection:</strong> Across component (PARALLEL)</p>
        </div>
      </div>


      <h2>🔌 How to Connect Measurement Tools</h2>
      <div class="connection-guide">
        <h3>Connection Methods</h3>
        <table class="connection-table">
          <tr>
            <th>Measurement</th>
            <th>Instrument</th>
            <th>Connection</th>
            <th>Why</th>
          </tr>
          <tr>
            <td><strong>Voltage</strong></td>
            <td>Voltmeter</td>
            <td>PARALLEL (across)</td>
            <td>Measures potential difference</td>
          </tr>
          <tr>
            <td><strong>Current</strong></td>
            <td>Ammeter</td>
            <td>SERIES (in line)</td>
            <td>Measures flow through it</td>
          </tr>
          <tr>
            <td><strong>Resistance</strong></td>
            <td>Ohmmeter</td>
            <td>PARALLEL (disconnected)</td>
            <td>Measures across component</td>
          </tr>
        </table>
      </div>


      <h2>✅ Do's and ❌ Don'ts</h2>
      <div class="dos-donts">
        <div class="dos-box">
          <h3>✅ DO:</h3>
          <ul style="margin-left: 20px;">
            <li>✓ Set multimeter to correct range FIRST</li>
            <li>✓ Connect RED probe to positive</li>
            <li>✓ Connect BLACK probe to negative/ground</li>
            <li>✓ Check batteries in multimeter regularly</li>
            <li>✓ Disconnect power before measuring resistance</li>
            <li>✓ Start with highest range for safety</li>
            <li>✓ Read the display carefully</li>
          </ul>
        </div>
        
        <div class="donts-box">
          <h3>❌ DON'T:</h3>
          <ul style="margin-left: 20px;">
            <li>✗ Leave multimeter on when done</li>
            <li>✗ Measure resistance in powered circuits</li>
            <li>✗ Connect ammeter incorrectly (creates short)</li>
            <li>✗ Touch probe tips while measuring</li>
            <li>✗ Ignore safety warnings on display</li>
            <li>✗ Measure high voltage carelessly</li>
            <li>✗ Force probes into circuit</li>
          </ul>
        </div>
      </div>


      <h2>⚠️ Safety When Measuring</h2>
      <div class="warning-box">
        <strong>🚨 Important Safety Rules:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0; margin-left: 20px;">
          <li><strong>High Voltage Danger:</strong> AC mains (120V or 240V) can be lethal - let professionals handle it</li>
          <li><strong>Never Backfeed:</strong> Don't connect power source to measurement range that expects low voltage</li>
          <li><strong>Check Probe Condition:</strong> Damaged insulation = danger!</li>
          <li><strong>Know Your Limits:</strong> If unsure, don't measure - ask an expert</li>
          <li><strong>Current Shocks:</strong> Even small currents (50mA) can cause injury through the heart</li>
        </ul>
      </div>


      <h2>🧮 Practical Measurement Examples</h2>
      <div class="examples-box">
        <h3>✓ Example 1: Measuring Voltage Across LED</h3>
        <div class="example-item">
          <p><strong>Goal:</strong> Check if LED is getting correct voltage</p>
          <p><strong>Steps:</strong></p>
          <ol style="margin-left: 20px;">
            <li>Set multimeter to DC Voltage mode (V with straight line)</li>
            <li>Connect RED probe to LED anode (long leg or +)</li>
            <li>Connect BLACK probe to LED cathode (short leg or −)</li>
            <li>Read display: Should show ~2-3V for LED</li>
            <li>If 0V: LED might be backwards or circuit broken</li>
          </ol>
        </div>
      </div>


      <div class="examples-box">
        <h3>✓ Example 2: Measuring Current in Circuit</h3>
        <div class="example-item">
          <p><strong>Goal:</strong> Check if LED draws expected current</p>
          <p><strong>Steps:</strong></p>
          <ol style="margin-left: 20px;">
            <li>Set multimeter to DC Current (A or mA)</li>
            <li>BREAK the circuit at one point</li>
            <li>Insert ammeter in the gap (RED to +, BLACK to −)</li>
            <li>Read display: Should show ~10-20mA for LED</li>
            <li>If 0mA: Circuit is broken somewhere</li>
            <li>If very high: Something is wrong, check resistor</li>
          </ol>
        </div>
      </div>


      <div class="examples-box">
        <h3>✓ Example 3: Measuring Resistance of Component</h3>
        <div class="example-item">
          <p><strong>Goal:</strong> Verify resistor value</p>
          <p><strong>Steps:</strong></p>
          <ol style="margin-left: 20px;">
            <li>Set multimeter to Resistance mode (Ω)</li>
            <li>REMOVE resistor from circuit (or power off first)</li>
            <li>Connect probes to resistor ends</li>
            <li>Read display: Should match color code value</li>
            <li>If reading 0: Wire is shorted</li>
            <li>If reading infinity: Component is open/broken</li>
          </ol>
        </div>
      </div>


      <h2>💡 Real-World Troubleshooting with Multimeter</h2>
      <div class="info-box">
        <strong>🔍 Troubleshooting Checklist:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0; margin-left: 20px;">
          <li><strong>Circuit won't turn on?</strong> Measure voltage - is power getting there?</li>
          <li><strong>LED is dim?</strong> Measure current - is it getting enough?</li>
          <li><strong>Component gets hot?</strong> Measure voltage drop - is resistance correct?</li>
          <li><strong>Intermittent problems?</strong> Measure continuity - are connections loose?</li>
          <li><strong>Wrong readings?</strong> Measure across known working circuit to verify multimeter</li>
        </ul>
      </div>


      <h2>📊 LED Protection Calculator</h2>
      <p>One of the most common uses: calculating the series resistor for LED protection</p>
      <div class="formula-box">
        <h3>LED Series Resistor Formula</h3>
        <div class="formula">R = (V_supply − V_led) / I_desired</div>
        <div class="formula-explain">
          <p><strong>Where:</strong></p>
          <p>🔹 <strong>R</strong> = Series resistor value (Ω)</p>
          <p>🔹 <strong>V_supply</strong> = Battery voltage</p>
          <p>🔹 <strong>V_led</strong> = LED forward voltage drop (~2-3V)</p>
          <p>🔹 <strong>I_desired</strong> = Desired LED current (~10-20mA)</p>
          <p style="margin-top: 15px; color: #667eea;"><strong>Translation:</strong> "Resistor must drop the remaining voltage at the right current"</p>
        </div>
      </div>


      <div class="examples-box">
        <h3>✓ LED Protection Example</h3>
        <div class="example-item">
          <p><strong>Problem:</strong> You want to light an LED from 5V supply safely</p>
          
          <div class="example-calculation">
            <strong>Given:</strong><br>
            V_supply = 5V<br>
            V_led = 2V (typical red LED)<br>
            I_desired = 15mA (0.015A)
          </div>
          
          <div class="example-calculation">
            <strong>Calculation:</strong><br>
            R = (5V − 2V) / 0.015A<br>
            R = 3V / 0.015A<br>
            R = 200Ω<br>
            <strong>Use 200Ω resistor (or next closest standard value)</strong>
          </div>
        </div>
      </div>


      <h2>🎯 Key Measurement Tips</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h4>Always Check Range</h4>
          <p>Set multimeter to correct range BEFORE measuring to avoid damage</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔴</span>
          <h4>Red = Positive</h4>
          <p>Red probe always goes to positive side of circuit or component</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚫</span>
          <h4>Black = Negative</h4>
          <p>Black probe always goes to negative/ground side</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>Disconnect First</h4>
          <p>Turn off power before measuring resistance - always!</p>
        </div>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">A simple $15 digital multimeter can measure voltages from microvolts to thousands of volts, currents from nanoamps to 10 amps, and resistances up to 20 megaohms. These tools are incredibly powerful and essential for any electronics work!</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> How is a voltmeter connected?</p>
        <ul>
          <li>A) Series (in line with current)</li>
          <li>B) Parallel (across component) 📏</li>
          <li>C) Both ways</li>
          <li>D) Doesn't matter</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Voltmeter connects PARALLEL!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> How is an ammeter connected?</p>
        <ul>
          <li>A) Series (in the current path) 📏</li>
          <li>B) Parallel (across component)</li>
          <li>C) Both ways</li>
          <li>D) Floating in air</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - Ammeter connects SERIES!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> When should you measure resistance?</p>
        <ul>
          <li>A) While circuit is powered on</li>
          <li>B) After circuit is powered off 📏</li>
          <li>C) Doesn't matter</li>
          <li>D) Only in parallel</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Measure resistance when powered OFF!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> What does the red probe connect to?</p>
        <ul>
          <li>A) Negative/Ground</li>
          <li>B) Positive side 📏</li>
          <li>C) Ground only</li>
          <li>D) Black probe</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Red probe to positive!</em></p>


        <p style="margin-top: 20px;"><strong>Question 5:</strong> If supply is 5V, LED needs 2V, want 15mA, what resistor?</p>
        <ul>
          <li>A) 100Ω</li>
          <li>B) 150Ω</li>
          <li>C) 200Ω 📏</li>
          <li>D) 300Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - R = (5-2)/0.015 = 200Ω!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "How is a voltmeter connected?",
      options: ["Series (in line)", "Parallel (across)", "Both ways", "Doesn't matter"],
      answer: 1
    },
    {
      q: "How is an ammeter connected?",
      options: ["Series (in line)", "Parallel (across)", "Both ways", "Floating"],
      answer: 0
    },
    {
      q: "When should you measure resistance?",
      options: ["Circuit powered on", "Circuit powered off", "Doesn't matter", "Only parallel"],
      answer: 1
    },
    {
      q: "What does red probe connect to?",
      options: ["Negative", "Positive", "Ground only", "Black probe"],
      answer: 1
    },
    {
      q: "5V supply, 2V LED, 15mA desired - what resistor?",
      options: ["100Ω", "150Ω", "200Ω", "300Ω"],
      answer: 2
    }
  ],
  tools: [
    {
      name: "LED Series Resistor Calculator",
      type: "calculator",
      description: "Calculate resistor value for LED protection with current limiting",
      fields: [
        { label: "Supply Voltage (V)", key: "supply", placeholder: "Enter supply voltage (e.g., 5)" },
        { label: "LED Forward Voltage (V)", key: "ledVoltage", placeholder: "Enter LED Vf (e.g., 2)" },
        { label: "Desired Current (mA)", key: "current", placeholder: "Enter current (e.g., 15)" }
      ],
      calculate: (vals) => {
        if (!vals.supply || !vals.ledVoltage || !vals.current) return null;
        const vSupply = parseFloat(vals.supply);
        const vLed = parseFloat(vals.ledVoltage);
        const iDesired = parseFloat(vals.current);
        
        if (vSupply <= 0 || vLed <= 0 || iDesired <= 0) return "Error: Values must be positive";
        if (vSupply <= vLed) return "Error: Supply voltage must be higher than LED Vf";
        
        const vDrop = vSupply - vLed;
        const iAmp = iDesired / 1000;
        const r = vDrop / iAmp;
        
        // Find nearest standard resistor values
        const standardValues = [10, 15, 22, 33, 47, 68, 100, 150, 220, 330, 470, 680, 1000, 1500, 2200, 3300, 4700, 6800, 10000];
        let nearest = standardValues[0];
        for (let val of standardValues) {
          if (Math.abs(val - r) < Math.abs(nearest - r)) {
            nearest = val;
          }
        }
        
        const power = (vDrop * iAmp).toFixed(3);
        const powerRating = power < 0.125 ? "1/8W" : power < 0.25 ? "1/4W" : "1/2W";
        
        return `<strong>Calculated:</strong> ${r.toFixed(0)}Ω<br>
                <strong>Use standard:</strong> ${nearest}Ω<br>
                <strong>Voltage drop:</strong> ${vDrop.toFixed(2)}V<br>
                <strong>Power dissipation:</strong> ${power}W (use ${powerRating} resistor)<br>
                <strong>Actual current:</strong> ${((vDrop / nearest) * 1000).toFixed(1)}mA`;
      },
      unit: "Ohms (Ω)"
    },
    {
      name: "Multimeter Range Selector",
      type: "calculator",
      description: "Help choose correct multimeter range for different measurements",
      fields: [
        { label: "Measurement Type", key: "type", placeholder: "voltage/current/resistance" },
        { label: "Expected Value", key: "value", placeholder: "Enter expected value" }
      ],
      calculate: (vals) => {
        if (!vals.type || !vals.value) return null;
        const type = vals.type.toLowerCase().trim();
        const val = parseFloat(vals.value);
        
        if (type.includes('volt') || type.includes('v')) {
          if (val < 1) return "Use: 2V or AUTO range";
          if (val < 20) return "Use: 20V range";
          if (val < 200) return "Use: 200V range";
          return "Use: 500V or 750V range (be careful!)";
        }
        if (type.includes('curr') || type.includes('a') || type.includes('i')) {
          if (val < 1) return "Use: 20mA or 200mA range";
          if (val < 10) return "Use: 200mA range";
          return "Use: 2A or 10A range";
        }
        if (type.includes('resist') || type.includes('ω') || type.includes('r')) {
          if (val < 100) return "Use: 200Ω range";
          if (val < 1000) return "Use: 2kΩ range";
          if (val < 10000) return "Use: 20kΩ range";
          if (val < 100000) return "Use: 200kΩ range";
          return "Use: 2MΩ or 20MΩ range";
        }
        return "Unknown measurement type. Use voltage/current/resistance";
      },
      unit: "Range Guide"
    }
  ]
};
