export const session10 = {
    title: "Modern Processor Technologies",
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
        <div style="font-size: 60px; margin-bottom: 15px;">🚀</div>
        <p>Modern Processor Technologies: Cutting-edge innovations powering today's computing revolution!</p>
      </div>

      <h2>🔍 Multi-Core Processors</h2>
      <p>Modern CPUs have multiple processing cores on a single chip, allowing true parallel processing!</p>

      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">👥</span>
          <h4>Dual-Core</h4>
          <p>2 cores - Basic multitasking</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h4>Quad-Core</h4>
          <p>4 cores - Standard for PCs</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>Octa-Core</h4>
          <p>8 cores - Gaming & content creation</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🚀</span>
          <h4>64+ Cores</h4>
          <p>Server & workstation processors</p>
        </div>
      </div>

      <h2>🧠 AI & Machine Learning Acceleration</h2>
      <div class="info-box">
        <strong>💡 Neural Processing Units (NPUs):</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Modern processors include specialized AI accelerators for machine learning tasks, image processing, and neural networks!</p>
      </div>

      <h2>🎯 Advanced Technologies</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>Hyper-Threading</h4>
          <p>One physical core appears as two logical cores. Intel's SMT technology.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔋</span>
          <h4>Dynamic Frequency</h4>
          <p>CPU adjusts clock speed based on workload to save power (Turbo Boost, Precision Boost).</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🎮</span>
          <h4>Integrated Graphics</h4>
          <p>GPU built into CPU chip (Intel UHD, AMD Radeon Graphics).</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h4>SIMD Instructions</h4>
          <p>Process multiple data with one instruction (AVX, SSE, NEON).</p>
        </div>
      </div>

      <h2>🌟 Cutting-Edge Innovations</h2>
      <ul>
        <li>🔬 <strong>3nm Process:</strong> Transistors smaller than viruses!</li>
        <li>🧊 <strong>3D Stacking:</strong> Chiplets stacked vertically</li>
        <li>🔐 <strong>Security Features:</strong> Hardware encryption, secure boot</li>
        <li>🌐 <strong>Heterogeneous Computing:</strong> Big.LITTLE (performance + efficiency cores)</li>
        <li>🧬 <strong>Quantum Computing:</strong> The future of processing!</li>
      </ul>

      <h2>💻 Modern Processor Examples</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">💙</span>
          <h4>Intel Core i9</h4>
          <p>Up to 24 cores, 5.8 GHz boost. Gaming & professional workloads.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔴</span>
          <h4>AMD Ryzen 9</h4>
          <p>Up to 16 cores, excellent multi-threading. Great value!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🍎</span>
          <h4>Apple M-Series</h4>
          <p>ARM-based, incredible efficiency. Unified memory architecture.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">📱</span>
          <h4>Qualcomm Snapdragon</h4>
          <p>Mobile processors with 5G, AI, and graphics.</p>
        </div>
      </div>

      <div class="fun-fact">
        <strong>🌟 Mind-Blowing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">A modern smartphone processor is more powerful than the supercomputers that guided Apollo 11 to the moon! The Apollo Guidance Computer had 2 MHz and 4KB RAM. Your phone has processors running at 3000+ MHz with 8GB+ RAM!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question:</strong> What does SMT stand for?</p>
        <ul>
          <li>A) Simple Multi-Threading</li>
          <li>B) Simultaneous Multi-Threading ✓</li>
          <li>C) System Memory Transfer</li>
          <li>D) Secure Mode Technology</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Simultaneous Multi-Threading (like Hyper-Threading)!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "What does SMT stand for?", options: ["Simple Multi-Threading", "Simultaneous Multi-Threading", "System Memory Transfer", "Secure Mode Technology"], answer: 1 },
        { q: "Which company makes M-series processors?", options: ["Intel", "AMD", "Apple", "Qualcomm"], answer: 2 }
    ],
    tools: [{ name: "Processor Comparison Tool", type: "interactive", description: "Compare modern processors" }]
};
