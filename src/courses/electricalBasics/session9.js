export const session9 = {
  title: "Real-World Applications",
  content: `
    <style>
      .applications-lesson {
        padding: 0;
        margin: 0;
      }
      
      .applications-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .applications-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .applications-lesson p {
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
      
      .applications-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: app-rotate 3s infinite;
      }
      
      @keyframes app-rotate {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(90deg); }
        50% { transform: rotate(180deg); }
        75% { transform: rotate(270deg); }
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
      
      .applications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .application-card {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid rgba(102, 126, 234, 0.2);
        transition: all 0.3s ease;
      }
      
      .application-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        border-color: #667eea;
      }
      
      .app-icon {
        font-size: 50px;
        margin-bottom: 15px;
        display: block;
      }
      
      .application-card h4 {
        color: #667eea;
        margin: 0 0 10px 0;
        font-size: 1.2em;
      }
      
      .application-card p {
        margin: 8px 0;
        font-size: 0.95em;
        color: #555;
      }
      
      .application-card ul {
        margin: 10px 0 0 20px;
        padding: 0;
      }
      
      .application-card li {
        font-size: 0.9em;
        margin-bottom: 5px;
      }
      
      .circuit-examples {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .circuit-example {
        background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
        padding: 25px;
        border-radius: 12px;
        border: 2px solid #4CAF50;
      }
      
      .circuit-example h4 {
        color: #2E7D32;
        margin-top: 0;
      }
      
      .circuit-example p, .circuit-example li {
        color: #1B5E20;
        font-size: 0.95em;
      }
      
      .circuit-example ul {
        margin-left: 20px;
      }
      
      .home-wiring-box {
        background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #FF9800;
      }
      
      .home-wiring-box h3 {
        color: #E65100;
        margin-top: 0;
      }
      
      .home-wiring-box p, .home-wiring-box li {
        color: #BF360C;
      }
      
      .home-wiring-box ul {
        margin-left: 20px;
      }
      
      .industrial-box {
        background: linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #757575;
      }
      
      .industrial-box h3 {
        color: #424242;
        margin-top: 0;
      }
      
      .industrial-box p, .industrial-box li {
        color: #616161;
      }
      
      .industrial-box ul {
        margin-left: 20px;
      }
      
      .battery-guide {
        background: linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #E91E63;
      }
      
      .battery-guide h3 {
        color: #880E4F;
        margin-top: 0;
      }
      
      .battery-configs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin: 20px 0;
      }
      
      .config-box {
        background: white;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #E91E63;
      }
      
      .config-box strong {
        color: #880E4F;
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
        font-size: 1.3em;
        font-weight: bold;
        color: #333;
        margin: 15px 0;
        font-family: 'Courier New', monospace;
        background: white;
        padding: 12px;
        border-radius: 8px;
      }
      
      .power-applications {
        background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border: 2px solid #F44336;
      }
      
      .power-applications h3 {
        color: #C62828;
        margin-top: 0;
      }
      
      .power-applications p, .power-applications li {
        color: #B71C1C;
      }
      
      .power-applications ul {
        margin-left: 20px;
      }
      
      .applications-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .applications-lesson li {
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
        .battery-configs {
          grid-template-columns: 1fr;
        }
        
        .applications-grid {
          grid-template-columns: 1fr;
        }
        
        .circuit-examples {
          grid-template-columns: 1fr;
        }
      }
    </style>


    <div class="applications-lesson">
      <div class="hero-box">
        <div class="applications-icon">🌍</div>
        <p>Real-World Applications: Electricity powers everything around you!</p>
      </div>


      <h2>🌍 Where Electricity Is Used</h2>
      <p>
        Everything you've learned about voltage, current, resistance, series circuits, and parallel circuits comes together in real-world applications. From your smartphone to your home to entire power grids, electricity is everywhere. Let's explore how it all works in practice!
      </p>
      
      <div class="info-box">
        <strong>📖 Key Insight:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Once you understand the basic principles of electricity, you can understand nearly any electrical device or system. The same Ohm's Law that powers an LED also powers your computer, car, and home!</p>
      </div>


      <h2>⚡ Common Real-World Applications</h2>
      <div class="applications-grid">
        <div class="application-card">
          <span class="app-icon">💡</span>
          <h4>Lighting</h4>
          <p><strong>How it works:</strong> Current flows through filament or semiconductor, producing light</p>
          <ul>
            <li>Incandescent bulbs (old)</li>
            <li>LED lights (modern)</li>
            <li>Fluorescent tubes</li>
          </ul>
          <p><strong>Circuit type:</strong> Parallel (homes)</p>
        </div>

        <div class="application-card">
          <span class="app-icon">🍳</span>
          <h4>Heating</h4>
          <p><strong>How it works:</strong> High resistance causes energy dissipation as heat</p>
          <ul>
            <li>Electric ovens</li>
            <li>Water heaters</li>
            <li>Hair dryers</li>
          </ul>
          <p><strong>Principle:</strong> P = I² × R</p>
        </div>

        <div class="application-card">
          <span class="app-icon">⚙️</span>
          <h4>Motors</h4>
          <p><strong>How it works:</strong> Current in magnetic field creates motion</p>
          <ul>
            <li>Electric fans</li>
            <li>Pumps</li>
            <li>Compressors</li>
          </ul>
          <p><strong>Used in:</strong> Air conditioning, refrigeration</p>
        </div>

        <div class="application-card">
          <span class="app-icon">📱</span>
          <h4>Electronics</h4>
          <p><strong>How it works:</strong> Controlled current and voltage manage data and computation</p>
          <ul>
            <li>Smartphones</li>
            <li>Computers</li>
            <li>Microcontrollers</li>
          </ul>
          <p><strong>Logic:</strong> Binary (on/off) voltages</p>
        </div>

        <div class="application-card">
          <span class="app-icon">🚗</span>
          <h4>Transportation</h4>
          <p><strong>How it works:</strong> Electrical systems power modern vehicles</p>
          <ul>
            <li>Electric cars (batteries)</li>
            <li>Conventional cars (12V systems)</li>
            <li>Trains (overhead lines)</li>
          </ul>
          <p><strong>Modern:</strong> Hybrid & fully electric vehicles</p>
        </div>

        <div class="application-card">
          <span class="app-icon">🏥</span>
          <h4>Medical</h4>
          <p><strong>How it works:</strong> Precise electrical pulses monitor and heal</p>
          <ul>
            <li>ECG/EKG monitors</li>
            <li>Defibrillators</li>
            <li>Pacemakers</li>
          </ul>
          <p><strong>Critical:</strong> Life-saving technology</p>
        </div>
      </div>


      <h2>🏠 Home Electrical System</h2>
      <div class="home-wiring-box">
        <h3>Why Homes Use Parallel Circuits</h3>
        <p><strong>Key advantage:</strong> Each outlet is independent and gets full voltage</p>
        <ul>
          <li><strong>Every outlet:</strong> Receives 120V (or 240V) directly from main panel</li>
          <li><strong>Independence:</strong> Plugging in one device doesn't affect others</li>
          <li><strong>Safety:</strong> Circuit breaker can disconnect individual circuits</li>
          <li><strong>Practical:</strong> If one appliance fails, others keep working</li>
        </ul>
        <p style="margin-top: 20px;"><strong>❌ Why NOT series?</strong> If wired in series, the entire house would go dark if one light failed!</p>
      </div>


      <h2>📋 Practical Circuit Examples</h2>
      <div class="circuit-examples">
        <div class="circuit-example">
          <h4>🚨 Emergency Siren</h4>
          <p><strong>Components:</strong> Battery, switch, buzzer/speaker</p>
          <p><strong>Circuit type:</strong> Simple series</p>
          <ul>
            <li>9V battery provides voltage</li>
            <li>Switch controls current on/off</li>
            <li>Buzzer converts electrical to sound</li>
          </ul>
        </div>

        <div class="circuit-example">
          <h4>💡 LED Indicator Light</h4>
          <p><strong>Components:</strong> Battery, resistor, LED</p>
          <p><strong>Circuit type:</strong> Series (protects LED)</p>
          <ul>
            <li>Resistor limits current (10-20mA)</li>
            <li>Protects LED from burnout</li>
            <li>Series connection ensures same current</li>
          </ul>
        </div>

        <div class="circuit-example">
          <h4>🔌 Power Strip</h4>
          <p><strong>Components:</strong> Multiple outlets connected in parallel</p>
          <p><strong>Circuit type:</strong> Parallel</p>
          <ul>
            <li>Each outlet gets full 120V</li>
            <li>Can plug multiple devices</li>
            <li>Each device operates independently</li>
          </ul>
        </div>
      </div>


      <h2>🔋 Battery Configurations</h2>
      <div class="battery-guide">
        <h3>How to Get Different Voltages</h3>
        <p>By connecting batteries in series or parallel, you can create different voltages and currents for your application.</p>
        
        <div class="battery-configs">
          <div class="config-box">
            <strong>⛓️ Series Connection</strong>
            <p>Voltage adds together</p>
            <p style="font-size: 1.1em; margin: 10px 0;"><strong>2×1.5V = 3V</strong></p>
            <p><strong>Use for:</strong> Higher voltage needed</p>
          </div>
          
          <div class="config-box">
            <strong>🔀 Parallel Connection</strong>
            <p>Voltage stays same</p>
            <p style="font-size: 1.1em; margin: 10px 0;"><strong>1.5V (×2) = 1.5V</strong></p>
            <p><strong>Use for:</strong> Longer battery life</p>
          </div>
        </div>
        
        <p style="margin-top: 20px; text-align: center; font-weight: bold;">⚠️ Important: Match battery chemistry (all alkaline or all rechargeable)</p>
      </div>


      <h2>⚡ Power Generation & Distribution</h2>
      <div class="industrial-box">
        <h3>How Electricity Gets to Your Home</h3>
        <p><strong>The path:</strong> Power plant → Transmission lines → Local transformer → Your home</p>
        <ul>
          <li><strong>Power plants:</strong> Generate electricity (coal, gas, solar, wind)</li>
          <li><strong>High voltage transmission:</strong> 100,000V+ (efficient for long distances)</li>
          <li><strong>Step-down transformers:</strong> Reduce voltage for neighborhoods</li>
          <li><strong>Local transformer:</strong> Reduces to 240V for homes</li>
          <li><strong>Your panel:</strong> Splits to 120V/240V circuits</li>
        </ul>
        <p style="margin-top: 20px;"><strong>🔑 Key insight:</strong> High voltage is used for transmission because P = V × I, so high voltage = lower current = less power loss</p>
      </div>


      <h2>💻 Electronics & Semiconductors</h2>
      <div class="info-box">
        <strong>🤖 How Computers Work (Simplified):</strong>
        <ul style="margin-top: 10px; margin-bottom: 0; margin-left: 20px;">
          <li><strong>Transistors:</strong> Tiny electronic switches (billions in modern chips)</li>
          <li><strong>On/Off:</strong> 5V = 1 (on), 0V = 0 (off)</li>
          <li><strong>Binary logic:</strong> Combines 1s and 0s to do calculations</li>
          <li><strong>Speed:</strong> Modern CPUs switch billions of times per second</li>
          <li><strong>Heat:</strong> All these switches generate heat (why cooling is needed)</li>
        </ul>
      </div>


      <h2>⚡ Power Consumption & Energy</h2>
      <div class="power-applications">
        <h3>Understanding Power Ratings</h3>
        <p><strong>Power (P) = Voltage (V) × Current (I)</strong> - Measured in Watts</p>
        <ul>
          <li><strong>LED bulb:</strong> ~10W (efficient)</li>
          <li><strong>Incandescent bulb:</strong> ~60W (wasteful)</li>
          <li><strong>Microwave:</strong> ~1000W (high power)</li>
          <li><strong>Electric heater:</strong> ~5000W (very high)</li>
          <li><strong>Laptop charger:</strong> ~100W</li>
        </ul>
        <p style="margin-top: 15px;"><strong>💡 Energy saving:</strong> Lower watts = lower electricity bill!</p>
      </div>


      <h2>🎯 Real-World Problem Solving</h2>
      <div class="formula-box">
        <h3>Example: Designing an LED Flashlight</h3>
        <div class="formula-explain" style="text-align: left;">
          <p><strong>Requirements:</strong></p>
          <ul style="margin: 10px 0 0 20px;">
            <li>Use 2 AA batteries (1.5V each)</li>
            <li>Want bright LED (20mA)</li>
            <li>LED forward voltage: 2V</li>
          </ul>
          
          <p style="margin-top: 15px;"><strong>Solution:</strong></p>
          <p style="margin: 10px 0;">1. <strong>Series batteries:</strong> 1.5V + 1.5V = 3V total</p>
          <p style="margin: 10px 0;">2. <strong>Calculate resistor:</strong> R = (3V - 2V) / 0.020A = 50Ω</p>
          <p style="margin: 10px 0;">3. <strong>Check power:</strong> P = 1V × 0.020A = 0.02W (1/20W resistor needed)</p>
          <p style="margin-top: 15px; color: #FF9800;"><strong>✓ Circuit: 2 AA batteries in series → 50Ω resistor → LED → back to battery</strong></p>
        </div>
      </div>


      <h2>🚀 Future Applications</h2>
      <div class="info-box">
        <strong>🔮 Emerging Technologies:</strong>
        <ul style="margin-top: 10px; margin-bottom: 0; margin-left: 20px;">
          <li><strong>Electric vehicles:</strong> 400V+ battery systems</li>
          <li><strong>Renewable energy:</strong> Solar (DC) and wind power integration</li>
          <li><strong>Smart grids:</strong> Intelligent power distribution</li>
          <li><strong>Wireless charging:</strong> Electromagnetic induction</li>
          <li><strong>IoT devices:</strong> Billions of connected devices</li>
          <li><strong>Quantum computers:</strong> Extreme voltage/current precision needed</li>
        </ul>
      </div>


      <div class="fun-fact">
        <strong>⚡ Fun Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The average American home uses about 30 kilowatt-hours (kWh) per day. That's about 30,000 watts running for one hour, or the equivalent of 3,000 LED bulbs (10W each) running for an hour every single day! Understanding electrical efficiency is crucial for both environment and wallet.</p>
      </div>


      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What type of circuit does home wiring use?</p>
        <ul>
          <li>A) Series</li>
          <li>B) Parallel 🏠</li>
          <li>C) Both</li>
          <li>D) Neither</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Parallel! Each outlet is independent!</em></p>


        <p style="margin-top: 20px;"><strong>Question 2:</strong> Why is high voltage used for power transmission?</p>
        <ul>
          <li>A) It's safer</li>
          <li>B) Lower current means less power loss 🔌</li>
          <li>C) It's cheaper to produce</li>
          <li>D) It travels faster</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - High voltage reduces transmission losses!</em></p>


        <p style="margin-top: 20px;"><strong>Question 3:</strong> If you need 6V, how should you connect 1.5V batteries?</p>
        <ul>
          <li>A) 2 in series (3V)</li>
          <li>B) 4 in series (6V) ⛓️</li>
          <li>C) 6 in parallel (1.5V)</li>
          <li>D) It's impossible</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Series adds voltages: 4×1.5V = 6V!</em></p>


        <p style="margin-top: 20px;"><strong>Question 4:</strong> What happens if one device fails in a parallel home circuit?</p>
        <ul>
          <li>A) Everything stops working</li>
          <li>B) The circuit breaker trips</li>
          <li>C) Other devices keep working 🔌</li>
          <li>D) Voltage increases</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - Other devices continue working independently!</em></p>


        <p style="margin-top: 20px;"><strong>Question 5:</strong> For an LED circuit with 9V battery, 2V LED, 15mA desired, what resistor?</p>
        <ul>
          <li>A) ~300Ω</li>
          <li>B) ~450Ω</li>
          <li>C) ~467Ω 📏</li>
          <li>D) ~500Ω</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - R = (9-2)/0.015 = 467Ω!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What type of circuit does home wiring use?",
      options: ["Series", "Parallel", "Both", "Neither"],
      answer: 1
    },
    {
      q: "Why use high voltage for power transmission?",
      options: ["Safer", "Lower current = less loss", "Cheaper", "Travels faster"],
      answer: 1
    },
    {
      q: "To get 6V from 1.5V batteries, connect how?",
      options: ["2 in series", "4 in series", "6 in parallel", "Impossible"],
      answer: 1
    },
    {
      q: "If one device fails in parallel circuit?",
      options: ["All stop", "Breaker trips", "Others keep working", "Voltage increases"],
      answer: 2
    },
    {
      q: "9V battery, 2V LED, 15mA - resistor needed?",
      options: ["~300Ω", "~450Ω", "~467Ω", "~500Ω"],
      answer: 2
    }
  ],
  tools: [
    {
      name: "Battery Configuration Calculator",
      type: "calculator",
      description: "Calculate voltage and runtime for series/parallel battery configurations",
      fields: [
        { label: "Single Battery Voltage (V)", key: "voltage", placeholder: "Enter voltage (e.g., 1.5)" },
        { label: "Number in Series", key: "series", placeholder: "Enter number (e.g., 4)" },
        { label: "Number in Parallel", key: "parallel", placeholder: "Enter number (e.g., 2)" }
      ],
      calculate: (vals) => {
        if (!vals.voltage || !vals.series) return null;
        const v = parseFloat(vals.voltage);
        const s = parseInt(vals.series) || 1;
        const p = parseInt(vals.parallel) || 1;
        
        if (v <= 0 || s <= 0 || p <= 0) return "Error: Values must be positive";
        
        const totalV = v * s;
        const totalBatteries = s * p;
        
        let result = `<strong>Configuration:</strong> ${s} in series × ${p} in parallel<br>`;
        result += `<strong>Total Voltage:</strong> ${totalV.toFixed(2)}V<br>`;
        result += `<strong>Total Batteries:</strong> ${totalBatteries}<br>`;
        result += `<strong>Runtime:</strong> ${p}× longer than single battery<br>`;
        result += `<strong>Current capacity:</strong> ${p}× higher`;
        
        return result;
      },
      unit: "Volts (V)"
    },
    {
      name: "Power Consumption Calculator",
      type: "calculator",
      description: "Calculate power usage and electricity cost",
      fields: [
        { label: "Voltage (V)", key: "voltage", placeholder: "Enter voltage (e.g., 120)" },
        { label: "Current (A)", key: "current", placeholder: "Enter current (e.g., 5)" },
        { label: "Hours per Day", key: "hours", placeholder: "Enter hours (e.g., 8)" }
      ],
      calculate: (vals) => {
        if (!vals.voltage || !vals.current || !vals.hours) return null;
        const v = parseFloat(vals.voltage);
        const i = parseFloat(vals.current);
        const h = parseFloat(vals.hours);
        
        if (v <= 0 || i <= 0 || h <= 0) return "Error: Values must be positive";
        
        const power = (v * i).toFixed(0);
        const dailyKwh = ((v * i * h) / 1000).toFixed(2);
        const monthlyKwh = (dailyKwh * 30).toFixed(1);
        const yearlyCost = (monthlyKwh * 12 * 0.12).toFixed(2);
        
        return `<strong>Power:</strong> ${power}W<br>
                <strong>Daily usage:</strong> ${dailyKwh} kWh<br>
                <strong>Monthly usage:</strong> ${monthlyKwh} kWh<br>
                <strong>Yearly cost (at \$0.12/kWh):</strong> \$${yearlyCost}`;
      },
      unit: "Watts (W)"
    }
  ]
};
