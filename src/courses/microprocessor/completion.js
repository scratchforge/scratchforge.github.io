export const completion = {
    title: "🎉 Course Completed!",
    content: `
    <style>
      .completion-page {
        text-align: center;
        padding: 40px 20px;
      }
      
      .trophy {
        font-size: 120px;
        animation: bounce 2s infinite;
        margin: 30px 0;
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      .completion-title {
        color: #667eea;
        font-size: 2.5em;
        margin: 20px 0;
        font-weight: bold;
      }
      
      .completion-message {
        font-size: 1.3em;
        color: #555;
        margin: 20px 0;
        line-height: 1.8;
      }
      
      .achievement-box {
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
        border-radius: 20px;
        padding: 40px;
        margin: 40px auto;
        max-width: 800px;
        border: 3px solid #667eea;
      }
      
      .skills-learned {
        text-align: left;
        margin: 30px auto;
        max-width: 600px;
      }
      
      .skills-learned h3 {
        color: #667eea;
        font-size: 1.8em;
        margin-bottom: 20px;
        text-align: center;
      }
      
      .skills-learned ul {
        list-style: none;
        padding: 0;
      }
      
      .skills-learned li {
        background: white;
        padding: 15px 20px;
        margin: 10px 0;
        border-radius: 10px;
        border-left: 5px solid #667eea;
        font-size: 1.1em;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      
      .skills-learned li::before {
        content: "✓ ";
        color: #4caf50;
        font-weight: bold;
        font-size: 1.3em;
        margin-right: 10px;
      }
      
      .next-steps {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 30px;
        margin: 40px auto;
        max-width: 700px;
      }
      
      .next-steps h3 {
        color: #764ba2;
        margin-bottom: 20px;
      }
      
      .next-steps p {
        font-size: 1.1em;
        line-height: 1.8;
        color: #555;
      }
      
      .celebration {
        font-size: 50px;
        margin: 20px 0;
      }
    </style>

    <div class="completion-page">
      <div class="trophy">🏆</div>
      
      <h1 class="completion-title">Congratulations!</h1>
      
      <p class="completion-message">
        You've successfully completed the <strong>Microprocessor from Scratch</strong> course!<br/>
        You've mastered the fundamentals of how processors work and are ready to dive deeper into computer architecture!
      </p>

      <div class="achievement-box">
        <div class="celebration">🎊 🎉 🎊</div>
        <h2 style="color: #667eea; margin: 20px 0;">You are now a Microprocessor Expert!</h2>
        <p style="font-size: 1.2em; color: #555;">You've gained deep knowledge of processor architecture, instruction sets, and modern computing technologies.</p>
      </div>

      <div class="skills-learned">
        <h3>🎯 Skills You've Mastered</h3>
        <ul>
          <li>Understanding microprocessor architecture and components</li>
          <li>CPU organization: ALU, Control Unit, Registers, and Buses</li>
          <li>Instruction Set Architecture (ISA) and instruction formats</li>
          <li>Memory hierarchy and organization</li>
          <li>Addressing modes and their applications</li>
          <li>Assembly language programming basics</li>
          <li>Interrupt handling and I/O operations</li>
          <li>Pipelining and performance optimization</li>
          <li>Cache memory and optimization techniques</li>
          <li>Modern processor technologies and innovations</li>
        </ul>
      </div>

      <div class="next-steps">
        <h3>🚀 What's Next?</h3>
        <p>
          <strong>Continue Your Learning Journey:</strong><br/>
          • Explore the <strong>Microcontroller Course</strong> to learn about embedded systems<br/>
          • Study <strong>Computer Organization</strong> for deeper architectural knowledge<br/>
          • Practice <strong>Assembly Language Programming</strong> with real projects<br/>
          • Learn about <strong>Digital Logic Design</strong> to understand hardware<br/>
          • Explore <strong>Operating Systems</strong> to see how software uses processors
        </p>
        <p style="margin-top: 20px;">
          <strong>Apply Your Knowledge:</strong><br/>
          • Build a simple CPU simulator<br/>
          • Write assembly programs for different architectures<br/>
          • Analyze processor specifications and compare performance<br/>
          • Contribute to open-source processor projects like RISC-V
        </p>
      </div>

      <div style="margin-top: 50px;">
        <p style="font-size: 1.3em; color: #667eea; font-weight: bold;">
          Keep Learning, Keep Growing! 🌟
        </p>
        <p style="font-size: 1.1em; color: #555; margin-top: 10px;">
          The world of computer architecture is vast and exciting. You've taken the first step on an amazing journey!
        </p>
      </div>
    </div>
  `,
    questions: [],
    tools: []
};
