export const session7 = {
  title: "Parallel Circuits",
  content: `
    <style>
      .parallel-lesson {
        padding: 0;
        margin: 0;
      }
      
      .parallel-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .parallel-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .parallel-lesson p {
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
      
      .parallel-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: parallel-spread 2s infinite;
      }
      
      @keyframes parallel-spread {
        0%, 100% { transform: scaleX(1); opacity: 1; }
        50% { transform: scaleX(1.2); opacity: 0.9; }
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
        font-size: 1em;
        color: #333;
        line-height: 1.8;
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
        background: linear-gradient(135deg, #4ECDC4 0%, #44A5AA 100%);
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
      
      .comparison-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin: 25px 0;
      }
      
      .series-column {
        background: linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #FF6B6B;
      }
      
      .parallel-column {
        background: linear-gradient(135deg, #E5F3FF 0%, #F0F8FF 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #4ECDC4;
      }
      
      .series-column h3 {
        color: #FF6B6B;
        margin-top: 0;
      }
      
      .parallel-column h3 {
        color: #4ECDC4;
        margin-top: 0;
      }
      
      .comparison-item {
        background: white;
        padding: 12px;
        margin: 10px 0;
        border-radius: 8px;
        border-left: 4px solid;
      }
      
      .series-column .comparison-item {
        border-left-color: #FF6B6B;
      }
      
      .parallel-column .comparison-item {
        border-left-color: #4ECDC4;
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
      
      .real-world-box {
        background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #FF9800;
      }
      
      .real-world-box h3 {
        color: #E65100;
        margin-top: 0;
      }
      
      .real-world-box p, .real-world-box li {
        color: #BF360C;
      }
      
      .parallel-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .parallel-lesson li {
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
        overflow-x: auto;
      }
      
      @media (max-width: 768px) {
        .comparison-grid {
          grid-template-columns: 1fr;
        }
        
        .characteristics-box {
          grid-template-columns: 1fr;
        }
      }
    </style>


    <div class="parallel-lesson">
      <div class="hero-box">
        <div class="parallel-icon">🔀</div>
        <p>Parallel Circuits: Multiple paths for current, independent components!</p>
      </div>


      <h2>🔀 What is a Parallel Circuit?</h2>
      <p>
        A <span class="highlight">parallel circuit</span> is a circuit where all components are connected in <strong>multiple separate paths</strong> between the same two points. Each component has its own complete path from the positive terminal to the negative terminal of the power source.
      </p>
      
      <div class="info-box">
        <strong>📖 Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">In a parallel circuit, all components are connected across the same voltage source. If one component fails or is removed, the others continue to work. There are MANY paths for current to flow.</p>
      </div>


      <h2>🔀 Parallel Circuit Diagram</h2>
      <div class="circuit-diagram">
        ┌─── R1 ───┐<br>
        Battery ┤─── R2 ───┤ Battery<br>
        ┌─── R3 ───┐<br>
        <br>
        Each resistor gets its own path from + to −
      </div>


      <h2>⚡ Key Characteristics of Parallel Circuits</h2>
      <div class="characteristics-box">
        <div class="characteristic">
          <div class="title">🔴 Voltage</div>
          <div class="value">Same Everywhere</div>
          <p>V₁ = V₂ = V₃ = V_supply</p>
        </div>
        <div class="characteristic">
          <div class="title">🟡 Current</div>
          <div class="value">Adds Up</div>
          <p>I_total = I₁ + I₂ + I₃</p>
        </div>
        <div class="characteristic">
          <div class="title">🟢 Resistance</div>
          <div class="value">Decreases</div>
          <p>1/R_t = 1/R₁ + 1/R₂ + 1/R₃</p>
        </div>
      </div>


      <h2>📊 Parallel Circuit Formulas</h2>
      <div class="formula-box">
        <h3>Total Resistance (Reciprocal Formula)</h3>
        <div class="formula">1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...</div>
        <div class="formula-explain">
          <p><strong>Or rearranged:</strong> R_total = 1 / (1/R₁ + 1/R₂ + 1/R₃ + ...)</p>
          <p><strong>Translation:</strong> Take reciprocal of each resistor, add them, then take reciprocal again</p>
          <p><strong>Example:</strong> If R₁ = 6Ω and R₂ = 3Ω</p>
          <p>1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2</p>
          <p style="color: #667eea;"><strong>R_total = 2Ω</strong></p>
          <p style="color: #667eea;"><strong>⚠️ Important:</strong> Total resistance is ALWAYS less than the smallest individual resistor!</p>
        </div>
      </div>


      <div class="formula-box">
        <h3>Voltage (Same Throughout)</h3>
        <div class="formula">V₁ = V₂ = V₃ = V_supply</div>
        <div class="formula-explain">
          <p><strong>Translation:</strong> All components see the FULL supply voltage</p>
          <p><strong>Example:</strong> In a 12V parallel circuit, each component gets 12V</p>
          <p style="color: #667eea;"><strong>✓ This is why lights stay equally bright!</strong></p>
        </div>
      </div>


      <div class="formula-box">
        <h3>Current (Adds Up)</h3>
        <div class="formula">I_total = I₁ + I₂ + I₃ + ...</div>
        <div class="formula-explain">
          <p><strong>Each branch current:</strong> I = V / R</p>
          <p><strong>Translation:</strong> Total current is the sum of all branch currents</p>
          <p><strong>Example:</strong> I₁ = 2A, I₂ = 3A, I₃ = 1A</p>
          <p style="color: #667eea;"><strong>I_total = 2 + 3 + 1 = 6A</strong></p>
        </div>
      </div>


      <h2>✅ Real-World Examples of Parallel Circuits</h2>
      <div class="examples-box">
        <h3>🏠 Parallel Circuit Examples</h3>
        <div class="example-item">
          <p><strong>Home Electrical Wiring:</strong> Every outlet in your house is in parallel! If one device stops working, others keep running.</p>
        </div>
        <div class="example-item">
          <p><strong>Modern Christmas Lights:</strong> If one bulb burns out, the string keeps working because bulbs are in parallel</p>
        </div>
        <div class="example-item">
          <p><strong>Car Electrical System:</strong> Headlights, wipers, radio are all in parallel, independent operation</p>
        </div>
        <div class="example-item">
          <p><strong>Power Strip:</strong> All outlets deliver full voltage, multiple devices work independently</p>
        </div>
      </div>


      <h2>🧮 Practical Example: Parallel Circuit Analysis</h2>
      <div class="examples-box">
        <h3>✓ Complete Example</h3>
        <div class="example-item">
          <p><strong>Question:</strong> A 12V battery is connected to two resistors in parallel: 6Ω and 3Ω. Find total resistance, total current, and branch currents.</p>
          
          <div class="example-calculation">
            <strong>Step 1: Find Total Resistance</strong><br>
            1/R_total = 1/R₁ + 1/R₂<br>
            1/R_total = 1/6 + 1/3<br>
            1/R_total = 1/6 + 2/6 = 3/6 = 0.5<br>
            <strong>R_total = 2Ω</strong>
          </div>
          
          <div class="example-calculation">
            <strong>Step 2: Find Total Current</strong><br>
            I_total = V / R_total<br>
            I_total = 12V / 2Ω<br>
            <strong>I_total = 6A</strong>
          </div>
          
          <div class="example-calculation">
            <strong>Step 3: Find Branch Currents</strong><br>
            (Voltage is 12V across both)<br>
            I₁ = V / R₁ = 12V / 6Ω = <strong>2A</strong><br>
            I₂ = V / R₂ = 12V / 3Ω = <strong>4A</strong><br>
            Total = 2A + 4A = <strong>6A ✓</strong> (checks out!)
          </div>
        </div>
      </div>


      <h2>⚙️ Series vs Parallel Comparison</h2>
      <div class="comparison-grid">
        <div class="series-column">
          <h3>⛓️ Series Circuit</h3>
          <div class="comparison-item">
            <strong>Voltage:</strong> Divides among components
          </div>
          <div class="comparison-item">
            <strong>Current:</strong> Same everywhere
          </div>
          <div class="comparison-item">
            <strong>Resistance:</strong> Adds up → Increases
          </div>
          <div class="comparison-item">
            <strong>One breaks:</strong> All stop
          </div>
          <div class="comparison-item">
            <strong>Brightness:</strong> Gets dimmer with more bulbs
          </div>
          <div class="comparison-item">
            <strong>Use:</strong> Simple toys, old lights
          </div>
        </div>
        
        <div class="parallel-column">
          <h3>🔀 Parallel Circuit</h3>
          <div class="comparison-item">
            <strong>Voltage:</strong> Same at all components
          </div>
          <div class="comparison-item">
            <strong>Current:</strong> Adds up from branches
          </div>
          <div class="comparison-item">
            <strong>Resistance:</strong> Decreases (reciprocal)
          </div>
          <div class="comparison-item">
            <strong>One breaks:</strong> Others keep working
          </div>
          <div class="comparison-item">
            <strong>Brightness:</strong> Stays same (full voltage)
          </div>
          <div class="comparison-item">
            <strong>Use:</strong> Homes, cars, modern devices
          </div>
        </div>
      </div>


      <h2>✅ Advantages of Parallel Circuits</h2>
      <div class="advantages-box">
        <h3>✓ Why We Use Parallel in Homes & Cars</h3>
        <ul>
          <li>✓ <strong>Independent operation:</strong> Each device works independently</li>
          <li>✓ <strong>One failure doesn't break all:</strong> If one device fails, others keep working</li>
          <li>✓ <strong>Same voltage everywhere:</strong> All components get full voltage</li>
          <li>✓ <strong>Brightness stays constant:</strong> Adding bulbs doesn't dim existing ones</li>
          <li>✓ <strong>More current available:</strong> Total current increases with more branches</li>
          <li>✓ <strong>Easy to add/remove devices:</strong> Just plug in or unplug</li>
          <li>✓ <strong>Perfect for homes:</strong> Every outlet gets 120V (or 240V)</li>
        </ul>
      </div>


      <h2>🏠 Real-Life: Your Home's Electrical System</h2>
      <div class="real-world-box">
        <h3>🔌 Home Wiring is Parallel!</h3>
        <ul style="margin: 15px 0 0 20px;">
          <li><strong>Every outlet:</strong> Connected in parallel to main power</li>
          <li><strong>Each outlet provides:</strong> Full voltage (120V or 240V)</li>
          <li><strong>You can plug in:</strong> Multiple devices at same time</li>
          <li><strong>If one fails:</strong> Others keep working</li>
          <li><strong>Your fuse/circuit breaker:</strong> Handles TOTAL current from all devices</li>
          <li><strong>Too many devices:</strong> Draws too much current, breaker trips</li>
        </ul>
      </div>


      <h2>🎯 Quick Summary Table</h2>
      <div class="visual-summary">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #667eea; color: white;">
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Property</th>
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Parallel Circuit</th>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Voltage</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Same at all components</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Current</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Adds together from branches</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Resistance</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Less than smallest resistor</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>If one breaks</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Others keep working</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Formula</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">1/R_t = 1/R₁ + 1/R₂</td>
          </tr>
        </table>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Your home uses parallel circuits because if they were series, turning off one light would turn off everything in your house! Parallel circuits are why modern life works—independence and reliability!</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> In a parallel circuit, what is the same everywhere?</p>
        <ul>
          <li>A) Voltage 🔀</li>
          <li>B) Current</li>
          <li>C) Resistance</li>
          <li>D) Power</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - Voltage is the same everywhere!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> How do currents combine in parallel?</p>
        <ul>
          <li>A) They divide</li>
          <li>B) They multiply</li>
          <li>C) They add together 🔀</li>
          <li>D) They stay the same</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - I_total = I₁ + I₂ + I₃!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If R₁ = 6Ω and R₂ = 3Ω in parallel, what is R_total?</p>
        <ul>
          <li>A) 9Ω</li>
          <li>B) 2Ω 🔀</li>
          <li>C) 4.5Ω</li>
          <li>D) 18Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - 1/R = 1/6 + 1/3 = 0.5, so R = 2Ω!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> What happens if one bulb burns out in parallel?</p>
        <ul>
          <li>A) Other bulbs turn off</li>
          <li>B) Other bulbs stay on 🔀</li>
          <li>C) Brightness increases</li>
          <li>D) Voltage increases</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Other bulbs keep working!</em></p>


        <p style="margin-top: 20px;"><strong>Question 5:</strong> Which circuit type is used in home wiring?</p>
        <ul>
          <li>A) Series only</li>
          <li>B) Parallel only 🔀</li>
          <li>C) Series and Parallel</li>
          <li>D) Neither</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Homes use parallel circuits!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "In a parallel circuit, what is the same everywhere?",
      options: ["Voltage", "Current", "Resistance", "Power"],
      answer: 0
    },
    {
      q: "How do currents combine in parallel?",
      options: ["They divide", "They multiply", "They add together", "They stay same"],
      answer: 2
    },
    {
      q: "If R₁=6Ω and R₂=3Ω in parallel, what is R_total?",
      options: ["9Ω", "2Ω", "4.5Ω", "18Ω"],
      answer: 1
    },
    {
      q: "What happens if one bulb burns out in parallel?",
      options: ["Others turn off", "Others stay on", "Brightness increases", "Voltage increases"],
      answer: 1
    },
    {
      q: "Which circuit is used in home wiring?",
      options: ["Series only", "Parallel only", "Series and Parallel", "Neither"],
      answer: 1
    }
  ],
  tools: [
    {
      name: "Parallel Circuit Analyzer",
      type: "calculator",
      description: "Analyze parallel circuits with multiple resistors",
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
        
        let reciprocal = 1/r1 + 1/r2;
        if (r3 > 0) reciprocal += 1/r3;
        
        const rTotal = 1 / reciprocal;
        const i1 = v / r1;
        const i2 = v / r2;
        const i3 = r3 > 0 ? v / r3 : 0;
        const iTotal = i1 + i2 + i3;
        
        let result = `<strong>Total Resistance:</strong> ${rTotal.toFixed(4)}Ω<br>`;
        result += `<strong>Voltage (same everywhere):</strong> ${v.toFixed(2)}V<br>`;
        result += `<strong>Current through R1:</strong> ${i1.toFixed(4)}A<br>`;
        result += `<strong>Current through R2:</strong> ${i2.toFixed(4)}A<br>`;
        if (r3 > 0) result += `<strong>Current through R3:</strong> ${i3.toFixed(4)}A<br>`;
        result += `<strong>Total current:</strong> ${iTotal.toFixed(4)}A`;
        
        return result;
      },
      unit: "Mixed"
    },
    {
      name: "Parallel Resistance Calculator",
      type: "calculator",
      description: "Calculate combined resistance of parallel resistors",
      fields: [
        { label: "Resistor 1 (Ω)", key: "r1", placeholder: "Enter R1" },
        { label: "Resistor 2 (Ω)", key: "r2", placeholder: "Enter R2" },
        { label: "Resistor 3 (Ω)", key: "r3", placeholder: "Enter R3 (optional)" }
      ],
      calculate: (vals) => {
        if (!vals.r1 || !vals.r2) return null;
        const r1 = parseFloat(vals.r1);
        const r2 = parseFloat(vals.r2);
        const r3 = vals.r3 ? parseFloat(vals.r3) : 0;
        
        if (r1 <= 0 || r2 <= 0 || (vals.r3 && r3 <= 0)) return "Error: Values must be positive";
        
        let reciprocal = 1/r1 + 1/r2;
        if (r3 > 0) reciprocal += 1/r3;
        
        const rTotal = 1 / reciprocal;
        
        return `Total Parallel Resistance: ${rTotal.toFixed(4)}Ω<br>(Always less than smallest resistor!)`;
      },
      unit: "Ohms (Ω)"
    }
  ]
};
