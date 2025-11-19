export const session6 = {
  title: "Series Circuits",
  content: `
    <style>
      .series-lesson {
        padding: 0;
        margin: 0;
      }
      
      .series-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .series-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .series-lesson p {
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
      
      .series-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: series-flow 2s infinite;
      }
      
      @keyframes series-flow {
        0%, 100% { transform: translateX(0); opacity: 1; }
        50% { transform: translateX(15px); opacity: 0.8; }
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
      
      .circuit-diagram {
        background: white;
        border: 2px solid #667eea;
        padding: 20px;
        border-radius: 10px;
        margin: 25px 0;
        text-align: center;
        font-family: monospace;
        font-size: 1.1em;
        color: #333;
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
      
      .characteristics-box {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 25px 0;
      }
      
      .characteristic {
        background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
      }
      
      .characteristic .title {
        font-weight: bold;
        font-size: 1.1em;
        margin-bottom: 10px;
      }
      
      .characteristic .value {
        font-size: 1.3em;
        margin: 10px 0;
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
      
      .comparison-box {
        background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #667eea;
      }
      
      .comparison-box h3 {
        color: #667eea;
        margin-top: 0;
      }
      
      .comparison-item {
        background: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 8px;
        border-left: 4px solid #667eea;
      }
      
      .comparison-item strong {
        color: #667eea;
      }
      
      .advantages-box {
        background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #4CAF50;
      }
      
      .advantages-box h3 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .advantages-box p, .advantages-box li {
        color: #1B5E20;
      }
      
      .disadvantages-box {
        background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #F44336;
      }
      
      .disadvantages-box h3 {
        color: #C62828;
        margin-top: 0;
      }
      
      .disadvantages-box p, .disadvantages-box li {
        color: #B71C1C;
      }
      
      .series-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .series-lesson li {
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
      
      .visual-summary {
        background: white;
        border: 2px solid #667eea;
        padding: 20px;
        border-radius: 10px;
        margin: 25px 0;
      }
      
      @media (max-width: 768px) {
        .characteristics-box {
          grid-template-columns: 1fr;
        }
      }
    </style>


    <div class="series-lesson">
      <div class="hero-box">
        <div class="series-icon">⛓️</div>
        <p>Series Circuits: One path for current, components affect each other!</p>
      </div>


      <h2>⛓️ What is a Series Circuit?</h2>
      <p>
        A <span class="highlight">series circuit</span> is the simplest type of circuit where all components are connected in a <strong>single continuous path</strong>. The current flows from the battery through each component one after another, and returns to the battery.
      </p>
      
      <div class="info-box">
        <strong>📖 Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">In a series circuit, all components are connected in a single loop. If any component breaks or is removed, the entire circuit stops working. There is only ONE path for current to flow.</p>
      </div>


      <h2>🔗 Series Circuit Diagram</h2>
      <div class="circuit-diagram">
        Battery (+) → R1 → R2 → R3 → Battery (−)<br>
        <br>
        Current flows in ONE continuous loop
      </div>


      <h2>⚡ Key Characteristics of Series Circuits</h2>
      <div class="characteristics-box">
        <div class="characteristic">
          <div class="title">🔴 Current</div>
          <div class="value">Same Everywhere</div>
          <p>I₁ = I₂ = I₃ = I_total</p>
        </div>
        <div class="characteristic">
          <div class="title">🟡 Voltage</div>
          <div class="value">Divides</div>
          <p>V_total = V₁ + V₂ + V₃</p>
        </div>
        <div class="characteristic">
          <div class="title">🟢 Resistance</div>
          <div class="value">Adds Up</div>
          <p>R_total = R₁ + R₂ + R₃</p>
        </div>
      </div>


      <h2>📊 Series Circuit Formulas</h2>
      <div class="formula-box">
        <h3>Total Resistance</h3>
        <div class="formula">R_total = R₁ + R₂ + R₃ + ...</div>
        <div class="formula-explain">
          <p><strong>Translation:</strong> Resistances just add together</p>
          <p><strong>Example:</strong> 10Ω + 20Ω + 30Ω = 60Ω total</p>
          <p style="color: #667eea;"><strong>⚠️ Important:</strong> Total resistance is ALWAYS greater than any individual resistor!</p>
        </div>
      </div>


      <div class="formula-box">
        <h3>Total Voltage (Voltage Drop)</h3>
        <div class="formula">V_total = V₁ + V₂ + V₃ + ...</div>
        <div class="formula-explain">
          <p><strong>Translation:</strong> Voltages add up around the circuit</p>
          <p><strong>Example:</strong> 5V + 7V + 8V = 20V (battery voltage)</p>
          <p style="color: #667eea;"><strong>Kirchhoff's Voltage Law:</strong> Sum of all voltage drops equals supply voltage</p>
        </div>
      </div>


      <div class="formula-box">
        <h3>Current (Same Throughout)</h3>
        <div class="formula">I = V_total / R_total</div>
        <div class="formula-explain">
          <p><strong>Translation:</strong> There is only ONE current in series circuit</p>
          <p><strong>Example:</strong> 12V ÷ 40Ω = 0.3A</p>
          <p style="color: #667eea;"><strong>⚠️ Important:</strong> Same current flows through every component!</p>
        </div>
      </div>


      <h2>✅ Real-World Examples of Series Circuits</h2>
      <div class="examples-box">
        <h3>🔌 Series Circuit Examples</h3>
        <div class="example-item">
          <p><strong>Christmas Lights (Old Style):</strong> If one bulb burns out, entire string goes dark!</p>
        </div>
        <div class="example-item">
          <p><strong>Flashlight:</strong> Battery → Switch → Bulb → Back to battery (all in one path)</p>
        </div>
        <div class="example-item">
          <p><strong>Simple LED Circuit:</strong> Battery → Resistor → LED → Back to battery</p>
        </div>
      </div>


      <h2>🧮 Practical Example: Series Circuit Analysis</h2>
      <div class="examples-box">
        <h3>✓ Complete Example</h3>
        <div class="example-item">
          <p><strong>Question:</strong> A 12V battery is connected to three resistors in series: 10Ω, 20Ω, and 30Ω. Find total resistance, current, and voltage drops.</p>
          
          <div class="example-calculation">
            <strong>Step 1: Find Total Resistance</strong><br>
            R_total = R₁ + R₂ + R₃<br>
            R_total = 10 + 20 + 30 = <strong>60Ω</strong>
          </div>
          
          <div class="example-calculation">
            <strong>Step 2: Find Total Current</strong><br>
            I = V / R<br>
            I = 12V / 60Ω = <strong>0.2A</strong><br>
            (This is the SAME current through all resistors!)
          </div>
          
          <div class="example-calculation">
            <strong>Step 3: Find Voltage Drops</strong><br>
            V₁ = I × R₁ = 0.2A × 10Ω = <strong>2V</strong><br>
            V₂ = I × R₂ = 0.2A × 20Ω = <strong>4V</strong><br>
            V₃ = I × R₃ = 0.2A × 30Ω = <strong>6V</strong><br>
            Total = 2 + 4 + 6 = <strong>12V ✓</strong> (equals battery voltage!)
          </div>
        </div>
      </div>


      <h2>✅ Advantages of Series Circuits</h2>
      <div class="advantages-box">
        <h3>Pros</h3>
        <ul>
          <li>✓ <strong>Simple to build:</strong> Easy circuit design</li>
          <li>✓ <strong>Uses less wire:</strong> Only one path needed</li>
          <li>✓ <strong>Cheap:</strong> Fewer components needed</li>
          <li>✓ <strong>Easy to understand:</strong> Current same everywhere</li>
          <li>✓ <strong>Good for battery protection:</strong> High resistance limits current</li>
        </ul>
      </div>


      <h2>❌ Disadvantages of Series Circuits</h2>
      <div class="disadvantages-box">
        <h3>Cons</h3>
        <ul>
          <li>✗ <strong>One failure breaks all:</strong> If one component fails, entire circuit dies</li>
          <li>✗ <strong>Brightness decreases:</strong> Adding more bulbs makes all bulbs dimmer</li>
          <li>✗ <strong>Voltage divides:</strong> Each component gets less voltage</li>
          <li>✗ <strong>Not practical for homes:</strong> If power dies, whole house goes dark</li>
          <li>✗ <strong>Harder to troubleshoot:</strong> Hard to test individual components</li>
        </ul>
      </div>


      <h2>🔗 How Series Components Interact</h2>
      <div class="comparison-box">
        <h3>What Happens When You Add Resistors in Series?</h3>
        <div class="comparison-item">
          <strong>✓ Total Resistance INCREASES</strong><br>
          More resistors = More total resistance
        </div>
        <div class="comparison-item">
          <strong>↓ Total Current DECREASES</strong><br>
          Higher resistance = Lower current (I = V/R)
        </div>
        <div class="comparison-item">
          <strong>💡 Bulbs Get DIMMER</strong><br>
          Lower current = Less power = Dimmer lights
        </div>
        <div class="comparison-item">
          <strong>📊 Voltage Divides</strong><br>
          Each resistor "uses up" some voltage
        </div>
      </div>


      <h2>⚡ Real Life: Why Your Christmas Lights Work Differently</h2>
      <div class="info-box">
        <strong>🎄 Old Series Christmas Lights:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0;">
          <li>When ONE bulb burns out → ENTIRE STRING goes dark</li>
          <li>Each bulb drops voltage, so later bulbs are dimmer</li>
          <li>It's a single series circuit!</li>
        </ul>
      </div>
      
      <div class="info-box">
        <strong>🎄 Modern Parallel Christmas Lights:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0;">
          <li>When ONE bulb burns out → other bulbs stay on</li>
          <li>Each bulb gets full voltage - all equally bright</li>
          <li>This is parallel connection (next session!)</li>
        </ul>
      </div>


      <h2>🎯 Quick Summary</h2>
      <div class="visual-summary">
        <p><strong>Series Circuit Properties:</strong></p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #667eea; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Property</th>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Series Circuit</th>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Current</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">Same everywhere</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Voltage</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">Adds up and divides</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Resistance</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">Adds together</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>If one breaks</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">All stop working</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Brightness</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">Gets dimmer when adding bulbs</td>
          </tr>
        </table>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Series circuits are why old Christmas light strings would go completely dark when one bulb burned out. People had to find the bad bulb by testing each one! Modern lights use parallel circuits, so one bad bulb doesn't ruin the whole string.</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> In a series circuit, what is the same everywhere?</p>
        <ul>
          <li>A) Voltage</li>
          <li>B) Current ⛓️</li>
          <li>C) Resistance</li>
          <li>D) Power</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Current is the same throughout!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> How do resistances combine in series?</p>
        <ul>
          <li>A) They divide</li>
          <li>B) They multiply</li>
          <li>C) They add together ⛓️</li>
          <li>D) They stay the same</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - R_total = R₁ + R₂ + R₃!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If R₁ = 10Ω, R₂ = 20Ω, R₃ = 30Ω in series, what is R_total?</p>
        <ul>
          <li>A) 20Ω</li>
          <li>B) 40Ω</li>
          <li>C) 60Ω ⛓️</li>
          <li>D) 100Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - 10 + 20 + 30 = 60Ω!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> What happens if one bulb burns out in a series circuit?</p>
        <ul>
          <li>A) Other bulbs stay on</li>
          <li>B) Entire circuit stops ⛓️</li>
          <li>C) Brightness increases</li>
          <li>D) Voltage increases</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Entire circuit stops working!</em></p>


        <p style="margin-top: 20px;"><strong>Question 5:</strong> In series with 12V battery and R_total = 40Ω, what is current?</p>
        <ul>
          <li>A) 0.1A</li>
          <li>B) 0.2A</li>
          <li>C) 0.3A ⛓️</li>
          <li>D) 0.4A</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - I = 12V ÷ 40Ω = 0.3A!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "In a series circuit, what is the same everywhere?",
      options: ["Voltage", "Current", "Resistance", "Power"],
      answer: 1
    },
    {
      q: "How do resistances combine in series?",
      options: ["They divide", "They multiply", "They add together", "They stay same"],
      answer: 2
    },
    {
      q: "If R₁=10Ω, R₂=20Ω, R₃=30Ω in series, what is R_total?",
      options: ["20Ω", "40Ω", "60Ω", "100Ω"],
      answer: 2
    },
    {
      q: "What happens if one bulb burns out in series?",
      options: ["Others stay on", "Entire circuit stops", "Brightness increases", "Voltage increases"],
      answer: 1
    },
    {
      q: "With 12V battery and R_total=40Ω, what is current?",
      options: ["0.1A", "0.2A", "0.3A", "0.4A"],
      answer: 2
    }
  ],
  tools: [
    {
      name: "Series Circuit Analyzer",
      type: "calculator",
      description: "Analyze series circuits with multiple resistors",
      fields: [
        { label: "Battery Voltage (V)", key: "voltage", placeholder: "Enter voltage (e.g., 12)" },
        { label: "Resistor 1 (Ω)", key: "r1", placeholder: "Enter R1 value" },
        { label: "Resistor 2 (Ω)", key: "r2", placeholder: "Enter R2 value" },
        { label: "Resistor 3 (Ω)", key: "r3", placeholder: "Enter R3 value (optional)" }
      ],
      calculate: (vals) => {
        if (!vals.voltage || !vals.r1 || !vals.r2) return null;
        const v = parseFloat(vals.voltage);
        const r1 = parseFloat(vals.r1);
        const r2 = parseFloat(vals.r2);
        const r3 = vals.r3 ? parseFloat(vals.r3) : 0;
        
        if (v <= 0 || r1 <= 0 || r2 <= 0 || (vals.r3 && r3 <= 0)) return "Error: Values must be positive";
        
        const rTotal = r1 + r2 + (r3 > 0 ? r3 : 0);
        const i = v / rTotal;
        const v1 = i * r1;
        const v2 = i * r2;
        const v3 = r3 > 0 ? i * r3 : 0;
        
        let result = `<strong>Total Resistance:</strong> ${rTotal.toFixed(2)}Ω<br>`;
        result += `<strong>Current (same everywhere):</strong> ${i.toFixed(4)}A<br>`;
        result += `<strong>Voltage across R1:</strong> ${v1.toFixed(2)}V<br>`;
        result += `<strong>Voltage across R2:</strong> ${v2.toFixed(2)}V<br>`;
        if (r3 > 0) result += `<strong>Voltage across R3:</strong> ${v3.toFixed(2)}V<br>`;
        result += `<strong>Total voltage check:</strong> ${(v1 + v2 + v3).toFixed(2)}V`;
        
        return result;
      },
      unit: "Mixed"
    },
    {
      name: "Series Voltage Divider Calculator",
      type: "calculator",
      description: "Calculate voltage division across resistors",
      fields: [
        { label: "Total Voltage (V)", key: "totalVoltage", placeholder: "Enter total voltage" },
        { label: "Resistor 1 (Ω)", key: "r1", placeholder: "Enter R1" },
        { label: "Resistor 2 (Ω)", key: "r2", placeholder: "Enter R2" }
      ],
      calculate: (vals) => {
        if (!vals.totalVoltage || !vals.r1 || !vals.r2) return null;
        const v = parseFloat(vals.totalVoltage);
        const r1 = parseFloat(vals.r1);
        const r2 = parseFloat(vals.r2);
        
        if (v <= 0 || r1 <= 0 || r2 <= 0) return "Error: Values must be positive";
        
        const rTotal = r1 + r2;
        const vr1 = v * (r1 / rTotal);
        const vr2 = v * (r2 / rTotal);
        
        return `Voltage across R1: ${vr1.toFixed(2)}V<br>Voltage across R2: ${vr2.toFixed(2)}V<br>Total: ${(vr1 + vr2).toFixed(2)}V`;
      },
      unit: "Volts (V)"
    }
  ]
};
