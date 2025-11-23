export const session1 = {
  title: "Introduction to Microprocessors",
  content: `
    <style>
      .microprocessor-lesson {
        padding: 0;
        margin: 0;
      }
      
      .microprocessor-lesson h2 {
        color: #667eea;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 1.8em;
        border-left: 5px solid #667eea;
        padding-left: 15px;
      }
      
      .microprocessor-lesson h3 {
        color: #764ba2;
        margin-top: 30px;
        margin-bottom: 15px;
        font-size: 1.4em;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .microprocessor-lesson p {
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
      
      .chip-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: pulse-chip 2s infinite;
      }
      
      @keyframes pulse-chip {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
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
      
      .microprocessor-lesson ul {
        margin: 15px 0 15px 25px;
        padding: 0;
      }
      
      .microprocessor-lesson li {
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

      .processor-diagram {
        background: white;
        border: 2px solid #667eea;
        border-radius: 15px;
        padding: 30px;
        margin: 30px 0;
        text-align: center;
      }

      .cpu-block {
        display: inline-block;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        margin: 10px;
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
      }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div class="chip-icon">🖥️</div>
        <p>Microprocessor: The brain of every computer, smartphone, and digital device that powers our modern world!</p>
      </div>

      <h2>🔍 What is a Microprocessor?</h2>
      <p>
        A <span class="highlight">microprocessor</span> is a tiny but incredibly powerful electronic chip that acts as the "brain" of a computer. It's a complete computing engine fabricated on a single integrated circuit (IC) that can process millions of instructions per second!
      </p>
      
      <div class="info-box">
        <strong>💡 Simple Definition:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">A microprocessor is a programmable digital electronic component that accepts binary data as input, processes it according to instructions stored in its memory, and provides results as output. It's the heart of all computing devices!</p>
      </div>

      <h2>🧠 The Brain Analogy</h2>
      <p>Think of a microprocessor like the human brain:</p>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">👂</span>
          <h4>Input (Senses)</h4>
          <p>Just like your brain receives signals from your eyes, ears, and touch, a microprocessor receives data from input devices</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🧠</span>
          <h4>Processing (Thinking)</h4>
          <p>Your brain processes information and makes decisions - the microprocessor does the same with data and instructions</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🗣️</span>
          <h4>Output (Actions)</h4>
          <p>Just as your brain tells your body what to do, the microprocessor sends results to output devices</p>
        </div>
      </div>

      <h2>📜 History of Microprocessors</h2>
      <p>The journey of microprocessors revolutionized the world of computing!</p>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">1971</div>
          <div class="timeline-content">
            <strong>Intel 4004 - The First Microprocessor! 🎉</strong>
            Created by Intel engineers Federico Faggin, Ted Hoff, and Stanley Mazor. It had 2,300 transistors and could execute 60,000 operations per second. Originally designed for calculators!
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1972</div>
          <div class="timeline-content">
            <strong>Intel 8008</strong>
            The first 8-bit microprocessor, twice as powerful as the 4004. It could address more memory and handle more complex tasks.
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1974</div>
          <div class="timeline-content">
            <strong>Intel 8080 & Motorola 6800</strong>
            These processors powered the first personal computers! The 8080 was used in the famous Altair 8800, considered the first successful personal computer.
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1978</div>
          <div class="timeline-content">
            <strong>Intel 8086 - Birth of x86 Architecture</strong>
            This 16-bit processor started the x86 architecture family that still dominates PCs today! It could address 1 MB of memory.
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">1985</div>
          <div class="timeline-content">
            <strong>Intel 80386 - The 32-bit Revolution</strong>
            First 32-bit x86 processor with 275,000 transistors. It could run multiple programs simultaneously (multitasking)!
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2000s</div>
          <div class="timeline-content">
            <strong>Multi-Core Era Begins</strong>
            Processors started having multiple cores (brains) working together. Dual-core, quad-core, and now even 64-core processors!
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">Today</div>
          <div class="timeline-content">
            <strong>Modern Processors</strong>
            Billions of transistors on a single chip! Processors like Intel Core i9, AMD Ryzen, and Apple M-series chips deliver incredible performance for AI, gaming, and professional work.
          </div>
        </div>
      </div>

      <h2>🏗️ Basic Components of a Microprocessor</h2>
      <div class="processor-diagram">
        <h3 style="color: #667eea; margin-top: 0;">Inside a Microprocessor</h3>
        <div class="cpu-block">ALU<br/><small>Arithmetic Logic Unit</small></div>
        <div class="cpu-block">CU<br/><small>Control Unit</small></div>
        <div class="cpu-block">Registers<br/><small>Fast Memory</small></div>
      </div>

      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🔢</span>
          <h4>ALU (Arithmetic Logic Unit)</h4>
          <p>Performs all mathematical calculations (add, subtract, multiply, divide) and logical operations (AND, OR, NOT). It's the calculator of the processor!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎮</span>
          <h4>Control Unit (CU)</h4>
          <p>The traffic controller! It directs the flow of data, fetches instructions from memory, and tells other components what to do.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💾</span>
          <h4>Registers</h4>
          <p>Super-fast temporary storage locations inside the processor. They hold data that's being processed right now - like your desk workspace!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔌</span>
          <h4>Buses</h4>
          <p>Electronic highways that carry data, addresses, and control signals between components. Think of them as the processor's nervous system!</p>
        </div>
      </div>

      <h2>⚡ How Does a Microprocessor Work?</h2>
      <div class="info-box">
        <strong>The Fetch-Decode-Execute Cycle:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">Every microprocessor follows this basic cycle billions of times per second:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>FETCH:</strong> Get the next instruction from memory</li>
          <li><strong>DECODE:</strong> Figure out what the instruction means</li>
          <li><strong>EXECUTE:</strong> Perform the instruction (calculate, move data, etc.)</li>
          <li><strong>STORE:</strong> Save the result back to memory or registers</li>
        </ul>
      </div>

      <h2>🎯 Why Are Microprocessors Important?</h2>
      <p>Microprocessors have transformed every aspect of modern life:</p>
      <ul>
        <li>💻 <strong>Personal Computing:</strong> Laptops, desktops, tablets</li>
        <li>📱 <strong>Mobile Devices:</strong> Smartphones, smartwatches</li>
        <li>🚗 <strong>Automotive:</strong> Engine control, safety systems, entertainment</li>
        <li>🏥 <strong>Medical Equipment:</strong> MRI machines, pacemakers, diagnostic tools</li>
        <li>✈️ <strong>Aerospace:</strong> Flight control, navigation systems</li>
        <li>🏭 <strong>Industrial Automation:</strong> Robotics, manufacturing control</li>
        <li>🎮 <strong>Gaming:</strong> Consoles, VR headsets</li>
        <li>🌐 <strong>Internet:</strong> Servers, routers, data centers</li>
      </ul>

      <h2>🔬 Microprocessor vs Calculator</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🧮</span>
          <h4>Calculator</h4>
          <p>Fixed function - can only do math. Limited operations. Not programmable.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🖥️</span>
          <h4>Microprocessor</h4>
          <p>Programmable - can do anything! Can run games, edit videos, browse web, and millions of other tasks!</p>
        </div>
      </div>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The Intel 4004 (1971) had 2,300 transistors. Today's processors have over 50 BILLION transistors! That's like going from a small town to the entire population of Earth - all on a chip smaller than your fingernail!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What does ALU stand for?</p>
        <ul>
          <li>A) Arithmetic Logic Unit ✓</li>
          <li>B) Advanced Learning Unit</li>
          <li>C) Automatic Logic Utility</li>
          <li>D) Application Level Unit</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - The ALU performs all calculations and logical operations!</em></p>

        <p style="margin-top: 20px;"><strong>Question 2:</strong> What was the first microprocessor?</p>
        <ul>
          <li>A) Intel 8080</li>
          <li>B) Intel 4004 ✓</li>
          <li>C) Motorola 6800</li>
          <li>D) Intel 8086</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Intel 4004, released in 1971!</em></p>

        <p style="margin-top: 20px;"><strong>Question 3:</strong> What is the basic cycle a microprocessor follows?</p>
        <ul>
          <li>A) Read-Write-Execute</li>
          <li>B) Fetch-Decode-Execute ✓</li>
          <li>C) Input-Process-Output</li>
          <li>D) Load-Store-Calculate</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Fetch-Decode-Execute is the fundamental cycle!</em></p>
      </div>
    </div>
  `,
  questions: [
    {
      q: "What does ALU stand for?",
      options: ["Arithmetic Logic Unit", "Advanced Learning Unit", "Automatic Logic Utility", "Application Level Unit"],
      answer: 0
    },
    {
      q: "What was the first microprocessor?",
      options: ["Intel 8080", "Intel 4004", "Motorola 6800", "Intel 8086"],
      answer: 1
    },
    {
      q: "What is the basic cycle a microprocessor follows?",
      options: ["Read-Write-Execute", "Fetch-Decode-Execute", "Input-Process-Output", "Load-Store-Calculate"],
      answer: 1
    }
  ],
  tools: [
    {
      name: "Processor Simulator",
      type: "interactive",
      description: "Visualize the fetch-decode-execute cycle in action"
    }
  ]
};
