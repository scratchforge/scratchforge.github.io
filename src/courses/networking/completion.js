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
      <p class="completion-message">You've successfully completed the <strong>Networking Course</strong>!<br/>You're now ready to design, implement, and troubleshoot computer networks!</p>

      <div class="achievement-box">
        <div style="font-size:50px;margin:20px 0">🎊 🎉 🎊</div>
        <h2 style="color: #667eea; margin: 20px 0;">You are now a Networking Expert!</h2>
        <p style="font-size: 1.2em; color: #555;">You've mastered the fundamentals of computer networking and are ready for advanced topics!</p>
      </div>

      <div class="skills-learned">
        <h3>🎯 Skills You've Mastered</h3>
        <ul>
          <li>Network topologies and architectures</li>
          <li>OSI Model and TCP/IP stack</li>
          <li>Physical layer and transmission media</li>
          <li>Ethernet and MAC addressing</li>
          <li>IP addressing and subnetting</li>
          <li>Routing and switching fundamentals</li>
          <li>TCP/UDP transport protocols</li>
          <li>Application layer protocols (HTTP, DNS, etc.)</li>
          <li>Network security principles</li>
          <li>Wireless networks and IoT</li>
        </ul>
      </div>

      <div style="margin-top: 50px;">
        <p style="font-size: 1.3em; color: #667eea; font-weight: bold;">Build the Connected World! 🌟</p>
        <p style="font-size: 1.1em; color: #555; margin-top: 10px;">Networks power everything - from the Internet to smart homes. Go make amazing connections!</p>
      </div>
    </div>
  `,
    questions: [],
    tools: []
};
