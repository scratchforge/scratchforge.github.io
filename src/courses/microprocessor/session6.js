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
