export const completion = {
    title: "🎉 Course Completed!",
    content: `
    <style>
      .completion-page { text-align: center; padding: 40px 20px; }
      .trophy { font-size: 120px; animation: bounce 2s infinite; margin: 30px 0; }
      @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
      .completion-title { color: #667eea; font-size: 2.5em; margin: 20px 0; font-weight: bold; }
      .completion-message { font-size: 1.3em; color: #555; margin: 20px 0; line-height: 1.8; }
      .achievement-box { background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-radius: 20px; padding: 40px; margin: 40px auto; max-width: 800px; border: 3px solid #667eea; }
      .skills-learned { text-align: left; margin: 30px auto; max-width: 600px; }
      .skills-learned h3 { color: #667eea; font-size: 1.8em; margin-bottom: 20px; text-align: center; }
      .skills-learned ul { list-style: none; padding: 0; }
      .skills-learned li { background: white; padding: 15px 20px; margin: 10px 0; border-radius: 10px; border-left: 5px solid #667eea; font-size: 1.1em; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
      .skills-learned li::before { content: "✓ "; color: #4caf50; font-weight: bold; font-size: 1.3em; margin-right: 10px; }
    </style>

    <div class="completion-page">
      <div class="trophy">🏆</div>
      <h1 class="completion-title">Congratulations!</h1>
      <p class="completion-message">You've successfully completed the <strong>Microcontroller Course</strong>!<br/>You're now ready to build amazing embedded systems and IoT projects!</p>

      <div class="achievement-box">
        <div style="font-size:50px;margin:20px 0">🎊 🎉 🎊</div>
        <h2 style="color: #667eea; margin: 20px 0;">You are now a Microcontroller Expert!</h2>
        <p style="font-size: 1.2em; color: #555;">You've mastered embedded systems programming and hardware interfacing!</p>
      </div>

      <div class="skills-learned">
        <h3>🎯 Skills You've Mastered</h3>
        <ul>
          <li>GPIO and digital I/O control</li>
          <li>Timers, counters, and PWM</li>
          <li>Interrupt handling and event-driven programming</li>
          <li>ADC for analog sensor reading</li>
          <li>Serial communication (UART, SPI, I2C)</li>
          <li>Motor control and servo positioning</li>
          <li>Embedded C programming</li>
          <li>Real-world project development</li>
        </ul>
      </div>

      <div style="margin-top: 50px;">
        <p style="font-size: 1.3em; color: #667eea; font-weight: bold;">Start Building Amazing Projects! 🌟</p>
        <p style="font-size: 1.1em; color: #555; margin-top: 10px;">The world of embedded systems awaits you. Go create something incredible!</p>
      </div>
    </div>
  `,
    questions: [],
    tools: []
};
