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
