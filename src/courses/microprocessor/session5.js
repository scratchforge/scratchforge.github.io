export const session5 = {
    title: "Addressing Modes",
    content: `
    <style>
      .microprocessor-lesson { padding: 0; margin: 0; }
      .microprocessor-lesson h2 { color: #667eea; margin-top: 40px; margin-bottom: 20px; font-size: 1.8em; border-left: 5px solid #667eea; padding-left: 15px; }
      .hero-box { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center; border: 2px solid rgba(102, 126, 234, 0.2); }
      .info-box { background: #f8f9fa; border-left: 5px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 8px; }
      .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0; }
      .info-card { background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%); padding: 25px; border-radius: 12px; border: 2px solid rgba(102, 126, 234, 0.2); transition: all 0.3s ease; }
      .info-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2); }
      .card-icon { font-size: 50px; margin-bottom: 15px; display: block; }
      .info-card h4 { color: #667eea; margin-bottom: 10px; font-size: 1.2em; }
      .microprocessor-lesson p { color: #333; margin-bottom: 15px; font-size: 1.05em; line-height: 1.7; }
      .microprocessor-lesson ul { margin: 15px 0 15px 25px; }
      .code-box { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 10px; margin: 20px 0; font-family: 'Courier New', monospace; }
      .code-comment { color: #6a9955; }
      .code-keyword { color: #569cd6; }
      .code-number { color: #b5cea8; }
      .quiz-box { background: #fff9e6; padding: 25px; border-radius: 15px; margin-top: 30px; border: 3px solid #ffd700; }
      .fun-fact { background: #e8f5e9; border-left: 5px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 8px; }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">📍</div>
        <p>Addressing Modes: Different ways the CPU can access data and operands for instructions!</p>
      </div>

      <h2>🔍 What are Addressing Modes?</h2>
      <p>Addressing modes define how the processor locates the operands (data) for an instruction. It's like different ways to find a house - by street address, GPS coordinates, or following directions!</p>

      <h2>📚 Common Addressing Modes</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h4>Immediate</h4>
          <p><strong>Data:</strong> In the instruction itself<br/>
          <strong>Example:</strong> MOV AX, 100<br/>
          <strong>Use:</strong> Constants, quick values</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📦</span>
          <h4>Register</h4>
          <p><strong>Data:</strong> In CPU register<br/>
          <strong>Example:</strong> MOV AX, BX<br/>
          <strong>Use:</strong> Fastest access</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📍</span>
          <h4>Direct</h4>
          <p><strong>Data:</strong> At memory address<br/>
          <strong>Example:</strong> MOV AX, [5000h]<br/>
          <strong>Use:</strong> Global variables</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔗</span>
          <h4>Indirect</h4>
          <p><strong>Data:</strong> Address in register<br/>
          <strong>Example:</strong> MOV AX, [BX]<br/>
          <strong>Use:</strong> Pointers, arrays</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h4>Indexed</h4>
          <p><strong>Data:</strong> Base + Index<br/>
          <strong>Example:</strong> MOV AX, [BX+SI]<br/>
          <strong>Use:</strong> Array access</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔄</span>
          <h4>Relative</h4>
          <p><strong>Data:</strong> PC + Offset<br/>
          <strong>Example:</strong> JMP LABEL<br/>
          <strong>Use:</strong> Branching, loops</p>
        </div>
      </div>

      <h2>💻 Examples in Assembly</h2>
      <div class="code-box">
        <span class="code-comment">; Immediate Addressing</span><br/>
        <span class="code-keyword">MOV</span> AX, <span class="code-number">100</span>      <span class="code-comment">; AX = 100 (constant)</span><br/>
        <br/>
        <span class="code-comment">; Register Addressing</span><br/>
        <span class="code-keyword">MOV</span> BX, AX       <span class="code-comment">; BX = AX</span><br/>
        <br/>
        <span class="code-comment">; Direct Addressing</span><br/>
        <span class="code-keyword">MOV</span> AX, [<span class="code-number">5000h</span>] <span class="code-comment">; AX = Memory[5000h]</span><br/>
        <br/>
        <span class="code-comment">; Indirect Addressing</span><br/>
        <span class="code-keyword">MOV</span> BX, <span class="code-number">5000h</span>    <span class="code-comment">; BX = 5000h</span><br/>
        <span class="code-keyword">MOV</span> AX, [BX]     <span class="code-comment">; AX = Memory[BX]</span><br/>
        <br/>
        <span class="code-comment">; Indexed Addressing (Array access)</span><br/>
        <span class="code-keyword">MOV</span> BX, <span class="code-number">1000h</span>    <span class="code-comment">; Base address</span><br/>
        <span class="code-keyword">MOV</span> SI, <span class="code-number">4</span>        <span class="code-comment">; Index (4th element)</span><br/>
        <span class="code-keyword">MOV</span> AX, [BX+SI]  <span class="code-comment">; AX = Memory[1000h + 4]</span>
      </div>

      <div class="fun-fact">
        <strong>🌟 Pro Tip:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Indexed addressing is perfect for accessing arrays! If you have an array starting at address 1000h and each element is 2 bytes, you can access element 'i' using [1000h + i*2].</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question:</strong> Which addressing mode is fastest?</p>
        <ul>
          <li>A) Direct</li>
          <li>B) Register ✓</li>
          <li>C) Indirect</li>
          <li>D) Indexed</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Register addressing is fastest!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "Which addressing mode is fastest?", options: ["Direct", "Register", "Indirect", "Indexed"], answer: 1 },
        { q: "In MOV AX, 100, what addressing mode is used?", options: ["Immediate", "Direct", "Register", "Indirect"], answer: 0 }
    ],
    tools: [{ name: "Addressing Mode Simulator", type: "interactive", description: "Visualize different addressing modes" }]
};

export const session6 = {
    title: "Assembly Language Basics",
    content: `
    <style>
      .microprocessor-lesson { padding: 0; margin: 0; }
      .microprocessor-lesson h2 { color: #667eea; margin-top: 40px; margin-bottom: 20px; font-size: 1.8em; border-left: 5px solid #667eea; padding-left: 15px; }
      .hero-box { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center; border: 2px solid rgba(102, 126, 234, 0.2); }
      .info-box { background: #f8f9fa; border-left: 5px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 8px; }
      .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0; }
      .info-card { background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%); padding: 25px; border-radius: 12px; border: 2px solid rgba(102, 126, 234, 0.2); transition: all 0.3s ease; }
      .card-icon { font-size: 50px; margin-bottom: 15px; display: block; }
      .info-card h4 { color: #667eea; margin-bottom: 10px; font-size: 1.2em; }
      .microprocessor-lesson p { color: #333; margin-bottom: 15px; font-size: 1.05em; line-height: 1.7; }
      .code-box { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 10px; margin: 20px 0; font-family: 'Courier New', monospace; }
      .code-comment { color: #6a9955; }
      .code-keyword { color: #569cd6; }
      .code-number { color: #b5cea8; }
      .quiz-box { background: #fff9e6; padding: 25px; border-radius: 15px; margin-top: 30px; border: 3px solid #ffd700; }
      .fun-fact { background: #e8f5e9; border-left: 5px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 8px; }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">⌨️</div>
        <p>Assembly Language: The human-readable form of machine code - programming at the lowest level!</p>
      </div>

      <h2>🔍 What is Assembly Language?</h2>
      <p>Assembly language is a low-level programming language that uses mnemonics (human-readable names) instead of binary machine code. It's one step above pure 1s and 0s!</p>

      <h2>📝 Basic Assembly Program Structure</h2>
      <div class="code-box">
        <span class="code-comment">; Simple Assembly Program</span><br/>
        <span class="code-keyword">.MODEL</span> SMALL          <span class="code-comment">; Memory model</span><br/>
        <span class="code-keyword">.STACK</span> <span class="code-number">100h</span>          <span class="code-comment">; Stack size</span><br/>
        <span class="code-keyword">.DATA</span>                  <span class="code-comment">; Data segment</span><br/>
        &nbsp;&nbsp;msg DB 'Hello!$'     <span class="code-comment">; Define string</span><br/>
        <br/>
        <span class="code-keyword">.CODE</span>                  <span class="code-comment">; Code segment</span><br/>
        MAIN PROC                <span class="code-comment">; Main procedure</span><br/>
        &nbsp;&nbsp;<span class="code-keyword">MOV</span> AX, @DATA      <span class="code-comment">; Initialize DS</span><br/>
        &nbsp;&nbsp;<span class="code-keyword">MOV</span> DS, AX<br/>
        &nbsp;&nbsp;<br/>
        &nbsp;&nbsp;<span class="code-keyword">MOV</span> AH, <span class="code-number">09h</span>        <span class="code-comment">; Display string</span><br/>
        &nbsp;&nbsp;<span class="code-keyword">LEA</span> DX, msg<br/>
        &nbsp;&nbsp;<span class="code-keyword">INT</span> <span class="code-number">21h</span>            <span class="code-comment">; DOS interrupt</span><br/>
        &nbsp;&nbsp;<br/>
        &nbsp;&nbsp;<span class="code-keyword">MOV</span> AH, <span class="code-number">4Ch</span>        <span class="code-comment">; Exit program</span><br/>
        &nbsp;&nbsp;<span class="code-keyword">INT</span> <span class="code-number">21h</span><br/>
        MAIN ENDP<br/>
        <span class="code-keyword">END</span> MAIN
      </div>

      <h2>🎯 Common Assembly Instructions</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">📥</span>
          <h4>Data Movement</h4>
          <p>MOV, PUSH, POP, LEA, XCHG</p>
        </div>
        <div class="info-card">
          <span class="card-icon">➕</span>
          <h4>Arithmetic</h4>
          <p>ADD, SUB, MUL, DIV, INC, DEC</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔀</span>
          <h4>Logical</h4>
          <p>AND, OR, XOR, NOT, SHL, SHR</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔄</span>
          <h4>Control Flow</h4>
          <p>JMP, CALL, RET, JZ, JNZ, LOOP</p>
        </div>
      </div>

      <h2>💡 Example: Adding Two Numbers</h2>
      <div class="code-box">
        <span class="code-comment">; Add two numbers</span><br/>
        <span class="code-keyword">MOV</span> AX, <span class="code-number">10</span>         <span class="code-comment">; AX = 10</span><br/>
        <span class="code-keyword">MOV</span> BX, <span class="code-number">20</span>         <span class="code-comment">; BX = 20</span><br/>
        <span class="code-keyword">ADD</span> AX, BX         <span class="code-comment">; AX = AX + BX = 30</span><br/>
        <span class="code-keyword">MOV</span> [result], AX  <span class="code-comment">; Store result</span>
      </div>

      <div class="fun-fact">
        <strong>🌟 Did You Know?</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Assembly language is still used today for operating system kernels, device drivers, embedded systems, and performance-critical code where every CPU cycle matters!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question:</strong> What does MOV stand for?</p>
        <ul>
          <li>A) Move ✓</li>
          <li>B) Modify</li>
          <li>C) Multiply</li>
          <li>D) Monitor</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - MOV moves/copies data!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "What does MOV instruction do?", options: ["Moves data", "Multiplies", "Modifies", "Monitors"], answer: 0 },
        { q: "Which is a control flow instruction?", options: ["ADD", "MOV", "JMP", "AND"], answer: 2 }
    ],
    tools: [{ name: "Assembly Code Editor", type: "interactive", description: "Write and execute assembly code" }]
};

export const session7 = {
    title: "Interrupts & I/O Operations",
    content: `
    <style>
      .microprocessor-lesson { padding: 0; margin: 0; }
      .microprocessor-lesson h2 { color: #667eea; margin-top: 40px; margin-bottom: 20px; font-size: 1.8em; border-left: 5px solid #667eea; padding-left: 15px; }
      .hero-box { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center; border: 2px solid rgba(102, 126, 234, 0.2); }
      .info-box { background: #f8f9fa; border-left: 5px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 8px; }
      .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0; }
      .info-card { background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%); padding: 25px; border-radius: 12px; border: 2px solid rgba(102, 126, 234, 0.2); transition: all 0.3s ease; }
      .card-icon { font-size: 50px; margin-bottom: 15px; display: block; }
      .info-card h4 { color: #667eea; margin-bottom: 10px; font-size: 1.2em; }
      .microprocessor-lesson p { color: #333; margin-bottom: 15px; font-size: 1.05em; line-height: 1.7; }
      .microprocessor-lesson ul { margin: 15px 0 15px 25px; }
      .quiz-box { background: #fff9e6; padding: 25px; border-radius: 15px; margin-top: 30px; border: 3px solid #ffd700; }
      .fun-fact { background: #e8f5e9; border-left: 5px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 8px; }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">🔔</div>
        <p>Interrupts: How the CPU responds to urgent events and communicates with external devices!</p>
      </div>

      <h2>🔍 What are Interrupts?</h2>
      <p>An interrupt is a signal that temporarily stops the CPU's current work to handle an urgent event. Think of it like a phone call interrupting your work - you pause, handle the call, then resume!</p>

      <h2>📚 Types of Interrupts</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🔧</span>
          <h4>Hardware Interrupts</h4>
          <p><strong>Source:</strong> External devices<br/>
          <strong>Examples:</strong> Keyboard press, mouse click, timer<br/>
          <strong>Type:</strong> Asynchronous (unpredictable)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💻</span>
          <h4>Software Interrupts</h4>
          <p><strong>Source:</strong> Program instructions<br/>
          <strong>Examples:</strong> INT 21h (DOS), system calls<br/>
          <strong>Type:</strong> Synchronous (predictable)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚠️</span>
          <h4>Exceptions</h4>
          <p><strong>Source:</strong> Error conditions<br/>
          <strong>Examples:</strong> Divide by zero, page fault<br/>
          <strong>Type:</strong> Synchronous</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🚨</span>
          <h4>Non-Maskable (NMI)</h4>
          <p><strong>Source:</strong> Critical hardware<br/>
          <strong>Examples:</strong> Memory errors, power failure<br/>
          <strong>Type:</strong> Cannot be disabled</p>
        </div>
      </div>

      <h2>🔄 Interrupt Handling Process</h2>
      <div class="info-box">
        <strong>💡 The Interrupt Cycle:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">When an interrupt occurs:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>1. Save State:</strong> Push registers and flags to stack</li>
          <li><strong>2. Identify:</strong> Determine interrupt type/number</li>
          <li><strong>3. Vector:</strong> Jump to Interrupt Service Routine (ISR)</li>
          <li><strong>4. Execute:</strong> Run the ISR code</li>
          <li><strong>5. Restore:</strong> Pop registers and flags from stack</li>
          <li><strong>6. Resume:</strong> Return to interrupted program</li>
        </ul>
      </div>

      <h2>📥 I/O Operations</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h4>Programmed I/O</h4>
          <p>CPU directly controls I/O. Simple but CPU waits (polling).</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔔</span>
          <h4>Interrupt-Driven I/O</h4>
          <p>Device signals CPU when ready. CPU can do other work!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🚀</span>
          <h4>DMA (Direct Memory Access)</h4>
          <p>Device transfers data directly to memory without CPU!</p>
        </div>
      </div>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Your computer handles thousands of interrupts per second - from keyboard, mouse, network, disk, timer, and more. Modern CPUs can prioritize interrupts so critical events are handled first!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question:</strong> What is an ISR?</p>
        <ul>
          <li>A) Interrupt Service Routine ✓</li>
          <li>B) Internal System Register</li>
          <li>C) Input Signal Receiver</li>
          <li>D) Instruction Set Reference</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - ISR handles interrupts!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "What is an ISR?", options: ["Interrupt Service Routine", "Internal System Register", "Input Signal Receiver", "Instruction Set Reference"], answer: 0 },
        { q: "Which interrupt cannot be disabled?", options: ["Hardware", "Software", "NMI", "Timer"], answer: 2 }
    ],
    tools: [{ name: "Interrupt Simulator", type: "interactive", description: "Visualize interrupt handling" }]
};
