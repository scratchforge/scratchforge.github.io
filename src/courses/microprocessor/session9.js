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
