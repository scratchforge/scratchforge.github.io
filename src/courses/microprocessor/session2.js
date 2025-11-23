export const session2 = {
    title: "CPU Architecture & Components",
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
      
      .info-box {
        background: #f8f9fa;
        border-left: 5px solid #667eea;
        padding: 20px;
        margin: 25px 0;
        border-radius: 8px;
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
      
      .fun-fact {
        background: #e8f5e9;
        border-left: 5px solid #4caf50;
        padding: 20px;
        margin: 25px 0;
        border-radius: 8px;
      }

      .architecture-diagram {
        background: white;
        border: 3px solid #667eea;
        border-radius: 15px;
        padding: 30px;
        margin: 30px 0;
      }

      .bus-line {
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        margin: 15px 0;
        position: relative;
        animation: data-flow 2s infinite;
      }

      @keyframes data-flow {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">🏗️</div>
        <p>CPU Architecture: Understanding the blueprint of the processor's internal structure and how components work together!</p>
      </div>

      <h2>🔍 What is CPU Architecture?</h2>
      <p>
        <span class="highlight">CPU Architecture</span> refers to the design and organization of the processor's internal components and how they interact. It's like the blueprint of a building - it shows how everything is connected and works together!
      </p>

      <h2>🏛️ Von Neumann Architecture</h2>
      <div class="info-box">
        <strong>💡 The Foundation of Modern Computers:</strong>
        <p style="margin-top: 10px;">Proposed by John von Neumann in 1945, this architecture is still used in most computers today! It has five main components:</p>
      </div>

      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🧮</span>
          <h4>ALU (Arithmetic Logic Unit)</h4>
          <p>Performs all arithmetic operations (+, -, ×, ÷) and logical operations (AND, OR, NOT, XOR)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎮</span>
          <h4>Control Unit</h4>
          <p>Coordinates all activities, fetches instructions, and controls data flow between components</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💾</span>
          <h4>Memory Unit</h4>
          <p>Stores both program instructions AND data in the same memory space</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📥</span>
          <h4>Input Unit</h4>
          <p>Receives data from external devices (keyboard, mouse, sensors)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📤</span>
          <h4>Output Unit</h4>
          <p>Sends processed data to external devices (monitor, printer, speakers)</p>
        </div>
      </div>

      <h2>🚌 The Bus System - Data Highways</h2>
      <p>Buses are electronic pathways that transfer data between components. Think of them as highways for information!</p>

      <div class="architecture-diagram">
        <h3 style="color: #667eea; text-align: center; margin-top: 0;">Three Types of Buses</h3>
        <div class="bus-line"></div>
        <p style="text-align: center; margin: 5px 0; color: #667eea; font-weight: bold;">Data Bus</p>
        <div class="bus-line"></div>
        <p style="text-align: center; margin: 5px 0; color: #764ba2; font-weight: bold;">Address Bus</p>
        <div class="bus-line"></div>
        <p style="text-align: center; margin: 5px 0; color: #667eea; font-weight: bold;">Control Bus</p>
      </div>

      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h4>Data Bus</h4>
          <p><strong>Carries:</strong> Actual data being transferred<br/>
          <strong>Direction:</strong> Bi-directional (two-way)<br/>
          <strong>Width:</strong> 8, 16, 32, or 64 bits<br/>
          <strong>Example:</strong> Transferring the number "42" from memory to CPU</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📍</span>
          <h4>Address Bus</h4>
          <p><strong>Carries:</strong> Memory addresses<br/>
          <strong>Direction:</strong> Uni-directional (one-way from CPU)<br/>
          <strong>Width:</strong> Determines max memory (16-bit = 64KB, 32-bit = 4GB)<br/>
          <strong>Example:</strong> Telling memory "I need data from location 1000"</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎛️</span>
          <h4>Control Bus</h4>
          <p><strong>Carries:</strong> Control signals<br/>
          <strong>Signals:</strong> Read, Write, Clock, Reset, Interrupt<br/>
          <strong>Purpose:</strong> Coordinates timing and operations<br/>
          <strong>Example:</strong> Sending "READ" signal to fetch data</p>
        </div>
      </div>

      <h2>📦 Registers - The Fastest Memory</h2>
      <p>Registers are tiny, super-fast storage locations inside the CPU. They're like your desk workspace - small but immediately accessible!</p>

      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h4>Accumulator (ACC)</h4>
          <p>Stores results of arithmetic and logical operations. The main working register!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📍</span>
          <h4>Program Counter (PC)</h4>
          <p>Holds the address of the next instruction to execute. Auto-increments after each instruction!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📋</span>
          <h4>Instruction Register (IR)</h4>
          <p>Holds the current instruction being executed</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📌</span>
          <h4>Memory Address Register (MAR)</h4>
          <p>Holds the address of memory location to be accessed</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💼</span>
          <h4>Memory Data Register (MDR)</h4>
          <p>Holds data being transferred to/from memory</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🚩</span>
          <h4>Status/Flag Register</h4>
          <p>Contains flags: Zero, Carry, Sign, Overflow, Parity. Indicates results of operations!</p>
        </div>
      </div>

      <h2>⚙️ Harvard vs Von Neumann Architecture</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🏛️</span>
          <h4>Von Neumann</h4>
          <p><strong>Memory:</strong> Single memory for code & data<br/>
          <strong>Buses:</strong> Shared bus system<br/>
          <strong>Speed:</strong> Slower (bottleneck)<br/>
          <strong>Used in:</strong> Most PCs, laptops<br/>
          <strong>Advantage:</strong> Simpler, flexible</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎓</span>
          <h4>Harvard</h4>
          <p><strong>Memory:</strong> Separate memory for code & data<br/>
          <strong>Buses:</strong> Separate buses<br/>
          <strong>Speed:</strong> Faster (parallel access)<br/>
          <strong>Used in:</strong> Microcontrollers, DSPs<br/>
          <strong>Advantage:</strong> Better performance</p>
        </div>
      </div>

      <h2>🔄 Instruction Cycle in Detail</h2>
      <div class="info-box">
        <strong>The Four-Stage Pipeline:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">Every instruction goes through these stages:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>1. FETCH:</strong> PC → MAR → Memory → MDR → IR (Get instruction from memory)</li>
          <li><strong>2. DECODE:</strong> Control Unit analyzes the instruction in IR</li>
          <li><strong>3. EXECUTE:</strong> ALU performs the operation or memory access occurs</li>
          <li><strong>4. STORE:</strong> Result written back to register or memory</li>
        </ul>
      </div>

      <h2>🎯 CISC vs RISC Architecture</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🏗️</span>
          <h4>CISC (Complex)</h4>
          <p><strong>Full Name:</strong> Complex Instruction Set Computer<br/>
          <strong>Instructions:</strong> Many (100-250), complex<br/>
          <strong>Execution:</strong> Variable time<br/>
          <strong>Examples:</strong> Intel x86, AMD<br/>
          <strong>Philosophy:</strong> "Do more with one instruction"</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>RISC (Reduced)</h4>
          <p><strong>Full Name:</strong> Reduced Instruction Set Computer<br/>
          <strong>Instructions:</strong> Few (~50), simple<br/>
          <strong>Execution:</strong> Fixed time (1 clock)<br/>
          <strong>Examples:</strong> ARM, MIPS, RISC-V<br/>
          <strong>Philosophy:</strong> "Do simple things fast"</p>
        </div>
      </div>

      <h2>⏱️ Clock Speed and Performance</h2>
      <p>The <span class="highlight">clock</span> synchronizes all operations in the CPU. It's like a metronome for musicians!</p>
      <ul>
        <li>📊 <strong>Clock Speed:</strong> Measured in Hz (cycles per second)</li>
        <li>⚡ <strong>Modern CPUs:</strong> 3-5 GHz (3-5 billion cycles/second!)</li>
        <li>🔄 <strong>One Clock Cycle:</strong> Basic unit of time for CPU operations</li>
        <li>📈 <strong>IPC (Instructions Per Clock):</strong> How many instructions execute per cycle</li>
      </ul>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">A 3 GHz processor executes 3 BILLION clock cycles every second! If each cycle was 1 second, it would take 95 YEARS to complete what a modern CPU does in just 1 second!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> Which bus carries memory addresses?</p>
        <ul>
          <li>A) Data Bus</li>
          <li>B) Address Bus ✓</li>
          <li>C) Control Bus</li>
          <li>D) System Bus</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - The Address Bus carries memory location addresses!</em></p>

        <p style="margin-top: 20px;"><strong>Question 2:</strong> What does PC stand for in CPU registers?</p>
        <ul>
          <li>A) Personal Computer</li>
          <li>B) Program Counter ✓</li>
          <li>C) Process Control</li>
          <li>D) Primary Cache</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Program Counter holds the next instruction address!</em></p>
      </div>
    </div>
  `,
    questions: [
        {
            q: "Which bus carries memory addresses?",
            options: ["Data Bus", "Address Bus", "Control Bus", "System Bus"],
            answer: 1
        },
        {
            q: "What does PC stand for in CPU registers?",
            options: ["Personal Computer", "Program Counter", "Process Control", "Primary Cache"],
            answer: 1
        },
        {
            q: "Which architecture has separate memory for code and data?",
            options: ["Von Neumann", "Harvard", "CISC", "RISC"],
            answer: 1
        }
    ],
    tools: [
        {
            name: "Architecture Visualizer",
            type: "interactive",
            description: "Explore CPU components and data flow"
        }
    ]
};
