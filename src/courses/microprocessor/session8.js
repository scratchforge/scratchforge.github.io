export const session8 = {
    title: "Pipelining & Performance",
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
      .pipeline-stage { display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px 25px; margin: 5px; border-radius: 8px; }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">⚡</div>
        <p>Pipelining: Making processors faster by overlapping instruction execution - like an assembly line!</p>
      </div>

      <h2>🔍 What is Pipelining?</h2>
      <p>Pipelining is a technique where multiple instructions are overlapped in execution. Think of it like a car assembly line - while one car gets painted, another gets its engine installed!</p>

      <h2>🏭 Pipeline Stages</h2>
      <div style="text-align: center; margin: 30px 0;">
        <div class="pipeline-stage">FETCH</div>
        <div class="pipeline-stage">DECODE</div>
        <div class="pipeline-stage">EXECUTE</div>
        <div class="pipeline-stage">MEMORY</div>
        <div class="pipeline-stage">WRITE-BACK</div>
      </div>

      <div class="info-box">
        <strong>💡 5-Stage Pipeline:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">Modern processors use a 5-stage pipeline:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>IF (Instruction Fetch):</strong> Get instruction from memory</li>
          <li><strong>ID (Instruction Decode):</strong> Decode and read registers</li>
          <li><strong>EX (Execute):</strong> Perform ALU operation</li>
          <li><strong>MEM (Memory Access):</strong> Read/write memory if needed</li>
          <li><strong>WB (Write Back):</strong> Write result to register</li>
        </ul>
      </div>

      <h2>⚠️ Pipeline Hazards</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">📊</span>
          <h4>Data Hazards</h4>
          <p>Instruction needs data from previous instruction that hasn't finished yet. Solution: Forwarding or stalling.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔀</span>
          <h4>Control Hazards</h4>
          <p>Branch instructions change program flow. Solution: Branch prediction!</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🏗️</span>
          <h4>Structural Hazards</h4>
          <p>Hardware resource conflict. Solution: Duplicate resources or stall.</p>
        </div>
      </div>

      <h2>🚀 Performance Improvements</h2>
      <ul>
        <li>⚡ <strong>Superscalar:</strong> Multiple pipelines working in parallel</li>
        <li>🔮 <strong>Branch Prediction:</strong> Guess which way a branch will go</li>
        <li>📦 <strong>Out-of-Order Execution:</strong> Execute instructions when ready, not in order</li>
        <li>🎯 <strong>Speculative Execution:</strong> Execute instructions before knowing if needed</li>
      </ul>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Modern CPUs can have pipelines 20+ stages deep and execute 4-6 instructions per clock cycle! Some processors can have over 100 instructions in flight simultaneously!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question:</strong> What is the main benefit of pipelining?</p>
        <ul>
          <li>A) Reduces power consumption</li>
          <li>B) Increases throughput ✓</li>
          <li>C) Simplifies design</li>
          <li>D) Reduces cost</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Pipelining increases instruction throughput!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "What is the main benefit of pipelining?", options: ["Reduces power", "Increases throughput", "Simplifies design", "Reduces cost"], answer: 1 },
        { q: "How many stages in a typical RISC pipeline?", options: ["3", "5", "10", "20"], answer: 1 }
    ],
    tools: [{ name: "Pipeline Visualizer", type: "interactive", description: "See instructions flowing through pipeline" }]
};

export const session9 = {
    title: "Cache Memory & Optimization",
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
        <div style="font-size: 60px; margin-bottom: 15px;">💾</div>
        <p>Cache Memory: The secret weapon that makes modern processors blazingly fast!</p>
      </div>

      <h2>🔍 What is Cache?</h2>
      <p>Cache is a small, ultra-fast memory that stores frequently accessed data. It's like keeping your most-used tools on your desk instead of in the garage!</p>

      <h2>📊 Cache Levels</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🚀</span>
          <h4>L1 Cache</h4>
          <p><strong>Size:</strong> 32-64 KB per core<br/>
          <strong>Speed:</strong> 1-2 ns (fastest!)<br/>
          <strong>Location:</strong> Inside each CPU core<br/>
          <strong>Split:</strong> Separate for data & instructions</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>L2 Cache</h4>
          <p><strong>Size:</strong> 256 KB - 1 MB per core<br/>
          <strong>Speed:</strong> 3-10 ns<br/>
          <strong>Location:</strong> Per core or shared<br/>
          <strong>Purpose:</strong> Backup for L1</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💨</span>
          <h4>L3 Cache</h4>
          <p><strong>Size:</strong> 8-64 MB (shared)<br/>
          <strong>Speed:</strong> 10-20 ns<br/>
          <strong>Location:</strong> Shared by all cores<br/>
          <strong>Purpose:</strong> Reduce RAM access</p>
        </div>
      </div>

      <h2>🎯 Cache Mapping Techniques</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">📍</span>
          <h4>Direct Mapped</h4>
          <p>Each memory block maps to exactly one cache line. Simple but can cause conflicts.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔄</span>
          <h4>Fully Associative</h4>
          <p>Any memory block can go anywhere in cache. Flexible but complex and expensive.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">⚖️</span>
          <h4>Set Associative</h4>
          <p>Compromise: N-way set associative. Most common in modern CPUs (4-way, 8-way).</p>
        </div>
      </div>

      <h2>📈 Cache Performance</h2>
      <div class="info-box">
        <strong>💡 Key Metrics:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">Cache performance is measured by:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>Hit Rate:</strong> % of accesses found in cache (want high!)</li>
          <li><strong>Miss Rate:</strong> % of accesses not in cache (want low!)</li>
          <li><strong>Hit Time:</strong> Time to access cache</li>
          <li><strong>Miss Penalty:</strong> Time to fetch from RAM on miss</li>
        </ul>
      </div>

      <h2>🔄 Cache Replacement Policies</h2>
      <ul>
        <li>🕐 <strong>LRU (Least Recently Used):</strong> Replace least recently accessed</li>
        <li>🎲 <strong>Random:</strong> Replace random entry</li>
        <li>📊 <strong>LFU (Least Frequently Used):</strong> Replace least frequently accessed</li>
        <li>⏰ <strong>FIFO:</strong> Replace oldest entry</li>
      </ul>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">A cache hit can be 100x faster than accessing RAM! A modern CPU with 95% cache hit rate can be 20x faster than one with 75% hit rate, even with the same clock speed!</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question:</strong> Which cache level is fastest?</p>
        <ul>
          <li>A) L1 ✓</li>
          <li>B) L2</li>
          <li>C) L3</li>
          <li>D) All same speed</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: A - L1 cache is the fastest!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "Which cache level is fastest?", options: ["L1", "L2", "L3", "All same"], answer: 0 },
        { q: "What does LRU stand for?", options: ["Last Recently Used", "Least Recently Used", "Low Rate Usage", "Long Range Update"], answer: 1 }
    ],
    tools: [{ name: "Cache Simulator", type: "interactive", description: "Visualize cache hits and misses" }]
};

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
