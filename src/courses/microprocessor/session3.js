export const session3 = {
    title: "Instruction Set Architecture (ISA)",
    content: `
    <style>
      .microprocessor-lesson { padding: 0; margin: 0; }
      .microprocessor-lesson h2 { color: #667eea; margin-top: 40px; margin-bottom: 20px; font-size: 1.8em; border-left: 5px solid #667eea; padding-left: 15px; }
      .microprocessor-lesson h3 { color: #764ba2; margin-top: 30px; margin-bottom: 15px; font-size: 1.4em; }
      .microprocessor-lesson p { color: #333; margin-bottom: 15px; font-size: 1.05em; line-height: 1.7; }
      .hero-box { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center; border: 2px solid rgba(102, 126, 234, 0.2); }
      .info-box { background: #f8f9fa; border-left: 5px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 8px; }
      .highlight { background: linear-gradient(120deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); padding: 2px 6px; border-radius: 4px; font-weight: 600; color: #667eea; }
      .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0; }
      .info-card { background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%); padding: 25px; border-radius: 12px; border: 2px solid rgba(102, 126, 234, 0.2); transition: all 0.3s ease; }
      .info-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2); border-color: #667eea; }
      .card-icon { font-size: 50px; margin-bottom: 15px; display: block; }
      .info-card h4 { color: #667eea; margin-bottom: 10px; font-size: 1.2em; }
      .microprocessor-lesson ul { margin: 15px 0 15px 25px; padding: 0; }
      .microprocessor-lesson li { margin-bottom: 10px; color: #555; line-height: 1.6; }
      .code-box { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 10px; margin: 20px 0; font-family: 'Courier New', monospace; overflow-x: auto; }
      .code-comment { color: #6a9955; }
      .code-keyword { color: #569cd6; }
      .code-number { color: #b5cea8; }
      .quiz-box { background: #fff9e6; padding: 25px; border-radius: 15px; margin-top: 30px; border: 3px solid #ffd700; }
      .fun-fact { background: #e8f5e9; border-left: 5px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 8px; }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">📖</div>
        <p>Instruction Set Architecture: The language that processors speak - the complete vocabulary of commands a CPU understands!</p>
      </div>

      <h2>🔍 What is ISA?</h2>
      <p>
        <span class="highlight">Instruction Set Architecture (ISA)</span> is the complete set of instructions that a processor can execute. Think of it as the processor's vocabulary - just like humans have words to communicate, processors have instructions to perform tasks!
      </p>

      <div class="info-box">
        <strong>💡 Key Concept:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">ISA is the interface between hardware and software. It defines what operations the CPU can perform, how they're encoded, and how they interact with memory and registers.</p>
      </div>

      <h2>📚 Types of Instructions</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🔢</span>
          <h4>Data Transfer</h4>
          <p><strong>Purpose:</strong> Move data between locations<br/>
          <strong>Examples:</strong> MOV, LOAD, STORE, PUSH, POP<br/>
          <strong>Usage:</strong> MOV AX, 5 (Move 5 into register AX)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">➕</span>
          <h4>Arithmetic</h4>
          <p><strong>Purpose:</strong> Mathematical operations<br/>
          <strong>Examples:</strong> ADD, SUB, MUL, DIV, INC, DEC<br/>
          <strong>Usage:</strong> ADD AX, BX (Add BX to AX)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔀</span>
          <h4>Logical</h4>
          <p><strong>Purpose:</strong> Boolean operations<br/>
          <strong>Examples:</strong> AND, OR, NOT, XOR, SHL, SHR<br/>
          <strong>Usage:</strong> AND AX, 0xFF (Mask lower 8 bits)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔄</span>
          <h4>Control Flow</h4>
          <p><strong>Purpose:</strong> Change program execution<br/>
          <strong>Examples:</strong> JMP, CALL, RET, JZ, JNZ<br/>
          <strong>Usage:</strong> JMP LOOP (Jump to label LOOP)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔍</span>
          <h4>Comparison</h4>
          <p><strong>Purpose:</strong> Compare values<br/>
          <strong>Examples:</strong> CMP, TEST<br/>
          <strong>Usage:</strong> CMP AX, 10 (Compare AX with 10)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📥</span>
          <h4>I/O Operations</h4>
          <p><strong>Purpose:</strong> Input/Output<br/>
          <strong>Examples:</strong> IN, OUT<br/>
          <strong>Usage:</strong> IN AL, 60h (Read from port 60h)</p>
        </div>
      </div>

      <h2>🎯 Instruction Format</h2>
      <p>Every instruction has a specific format that tells the CPU what to do:</p>
      <div class="info-box">
        <strong>Basic Instruction Structure:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;"><strong>[OPCODE] [OPERAND1] [OPERAND2]</strong></p>
        <ul style="margin-bottom: 0;">
          <li><strong>OPCODE:</strong> Operation code - what to do (ADD, MOV, etc.)</li>
          <li><strong>OPERAND1:</strong> First data item (destination)</li>
          <li><strong>OPERAND2:</strong> Second data item (source)</li>
        </ul>
      </div>

      <h2>💻 Example: x86 Instructions</h2>
      <div class="code-box">
        <span class="code-comment">; Data Transfer Instructions</span><br/>
        <span class="code-keyword">MOV</span> AX, <span class="code-number">100</span>    <span class="code-comment">; Move 100 into AX register</span><br/>
        <span class="code-keyword">MOV</span> BX, AX      <span class="code-comment">; Copy AX to BX</span><br/>
        <br/>
        <span class="code-comment">; Arithmetic Instructions</span><br/>
        <span class="code-keyword">ADD</span> AX, <span class="code-number">50</span>     <span class="code-comment">; AX = AX + 50</span><br/>
        <span class="code-keyword">SUB</span> BX, <span class="code-number">25</span>     <span class="code-comment">; BX = BX - 25</span><br/>
        <span class="code-keyword">MUL</span> CX          <span class="code-comment">; AX = AX * CX</span><br/>
        <br/>
        <span class="code-comment">; Logical Instructions</span><br/>
        <span class="code-keyword">AND</span> AX, <span class="code-number">0x00FF</span> <span class="code-comment">; Keep only lower 8 bits</span><br/>
        <span class="code-keyword">OR</span>  BX, <span class="code-number">0x8000</span> <span class="code-comment">; Set highest bit</span><br/>
        <br/>
        <span class="code-comment">; Control Flow</span><br/>
        <span class="code-keyword">CMP</span> AX, <span class="code-number">0</span>      <span class="code-comment">; Compare AX with 0</span><br/>
        <span class="code-keyword">JZ</span>  ZERO_LABEL  <span class="code-comment">; Jump if Zero flag is set</span><br/>
        <span class="code-keyword">CALL</span> FUNCTION   <span class="code-comment">; Call a subroutine</span><br/>
        <span class="code-keyword">RET</span>             <span class="code-comment">; Return from subroutine</span>
      </div>

      <h2>🏗️ Instruction Encoding</h2>
      <p>Instructions are encoded as binary numbers in memory. For example:</p>
      <div class="info-box">
        <strong>Example: ADD AX, BX in x86</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">
        <strong>Assembly:</strong> ADD AX, BX<br/>
        <strong>Machine Code:</strong> 01 D8 (in hexadecimal)<br/>
        <strong>Binary:</strong> 00000001 11011000
        </p>
        <ul style="margin-bottom: 0;">
          <li><strong>01:</strong> Opcode for ADD</li>
          <li><strong>D8:</strong> Specifies AX and BX registers</li>
        </ul>
      </div>

      <h2>📊 Operand Types</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h4>Immediate</h4>
          <p>Constant value in instruction<br/>
          <strong>Example:</strong> MOV AX, 100<br/>
          (100 is immediate value)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📦</span>
          <h4>Register</h4>
          <p>Data in CPU register<br/>
          <strong>Example:</strong> ADD AX, BX<br/>
          (AX and BX are registers)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📍</span>
          <h4>Direct</h4>
          <p>Memory address specified<br/>
          <strong>Example:</strong> MOV AX, [1000h]<br/>
          (Read from address 1000h)</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔗</span>
          <h4>Indirect</h4>
          <p>Address in register<br/>
          <strong>Example:</strong> MOV AX, [BX]<br/>
          (BX contains the address)</p>
        </div>
      </div>

      <h2>🌟 Popular ISA Families</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">💻</span>
          <h4>x86/x86-64</h4>
          <p><strong>Type:</strong> CISC<br/>
          <strong>Used in:</strong> Intel, AMD processors<br/>
          <strong>Bits:</strong> 32-bit (x86), 64-bit (x86-64)<br/>
          <strong>Market:</strong> Desktop, laptop, server</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📱</span>
          <h4>ARM</h4>
          <p><strong>Type:</strong> RISC<br/>
          <strong>Used in:</strong> Smartphones, tablets, Apple M-series<br/>
          <strong>Bits:</strong> 32-bit (ARMv7), 64-bit (ARMv8)<br/>
          <strong>Market:</strong> Mobile, embedded, now PCs</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎮</span>
          <h4>MIPS</h4>
          <p><strong>Type:</strong> RISC<br/>
          <strong>Used in:</strong> Routers, game consoles<br/>
          <strong>Bits:</strong> 32-bit, 64-bit<br/>
          <strong>Market:</strong> Embedded systems</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🆓</span>
          <h4>RISC-V</h4>
          <p><strong>Type:</strong> RISC<br/>
          <strong>Used in:</strong> New designs, research<br/>
          <strong>Bits:</strong> 32, 64, 128-bit<br/>
          <strong>Market:</strong> Open-source, growing!</p>
        </div>
      </div>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">The x86 ISA is over 40 years old! Modern Intel processors still support instructions from the original 8086 (1978), ensuring backward compatibility. Your latest gaming PC can still run programs from the 1980s!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> What does ISA stand for?</p>
        <ul>
          <li>A) Integrated System Architecture</li>
          <li>B) Instruction Set Architecture ✓</li>
          <li>C) Internal Storage Array</li>
          <li>D) Input System Adapter</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Instruction Set Architecture!</em></p>

        <p style="margin-top: 20px;"><strong>Question 2:</strong> Which instruction type moves data?</p>
        <ul>
          <li>A) ADD</li>
          <li>B) JMP</li>
          <li>C) MOV ✓</li>
          <li>D) CMP</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: C - MOV is a data transfer instruction!</em></p>
      </div>
    </div>
  `,
    questions: [
        {
            q: "What does ISA stand for?",
            options: ["Integrated System Architecture", "Instruction Set Architecture", "Internal Storage Array", "Input System Adapter"],
            answer: 1
        },
        {
            q: "Which instruction type moves data?",
            options: ["ADD", "JMP", "MOV", "CMP"],
            answer: 2
        },
        {
            q: "Which ISA is used in most smartphones?",
            options: ["x86", "ARM", "MIPS", "PowerPC"],
            answer: 1
        }
    ],
    tools: [
        {
            name: "Instruction Simulator",
            type: "interactive",
            description: "Execute assembly instructions step-by-step"
        }
    ]
};
