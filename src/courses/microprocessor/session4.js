export const session4 = {
    title: "Memory Organization",
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
      .microprocessor-lesson li { margin-bottom: 10px; color: #555; line-height: 1.6; }
      .highlight { background: linear-gradient(120deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); padding: 2px 6px; border-radius: 4px; font-weight: 600; color: #667eea; }
      .quiz-box { background: #fff9e6; padding: 25px; border-radius: 15px; margin-top: 30px; border: 3px solid #ffd700; }
      .fun-fact { background: #e8f5e9; border-left: 5px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 8px; }
      .memory-pyramid { text-align: center; margin: 30px 0; }
      .memory-level { margin: 10px auto; padding: 15px; border-radius: 8px; max-width: 600px; }
      .level-1 { background: #ff6b6b; color: white; max-width: 200px; }
      .level-2 { background: #ffa500; color: white; max-width: 300px; }
      .level-3 { background: #ffd700; max-width: 400px; }
      .level-4 { background: #90ee90; max-width: 500px; }
      .level-5 { background: #87ceeb; max-width: 600px; }
    </style>

    <div class="microprocessor-lesson">
      <div class="hero-box">
        <div style="font-size: 60px; margin-bottom: 15px;">💾</div>
        <p>Memory Organization: Understanding how data is stored, accessed, and managed in computer systems!</p>
      </div>

      <h2>🔍 Memory Hierarchy</h2>
      <p>Computer memory is organized in a hierarchy from fastest/smallest to slowest/largest:</p>
      
      <div class="memory-pyramid">
        <div class="memory-level level-1"><strong>Registers</strong><br/>Fastest • Smallest • Most Expensive</div>
        <div class="memory-level level-2"><strong>Cache (L1, L2, L3)</strong><br/>Very Fast • Small</div>
        <div class="memory-level level-3"><strong>Main Memory (RAM)</strong><br/>Fast • Medium Size</div>
        <div class="memory-level level-4"><strong>Secondary Storage (SSD)</strong><br/>Moderate Speed • Large</div>
        <div class="memory-level level-5"><strong>Tertiary Storage (HDD, Cloud)</strong><br/>Slowest • Largest • Cheapest</div>
      </div>

      <h2>📊 Types of Memory</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">⚡</span>
          <h4>RAM (Random Access)</h4>
          <p><strong>Type:</strong> Volatile (loses data when power off)<br/>
          <strong>Speed:</strong> Fast (nanoseconds)<br/>
          <strong>Use:</strong> Active programs & data<br/>
          <strong>Size:</strong> 4GB - 128GB typical</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💿</span>
          <h4>ROM (Read Only)</h4>
          <p><strong>Type:</strong> Non-volatile (keeps data)<br/>
          <strong>Speed:</strong> Fast<br/>
          <strong>Use:</strong> BIOS, firmware<br/>
          <strong>Variants:</strong> PROM, EPROM, EEPROM</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🚀</span>
          <h4>Cache Memory</h4>
          <p><strong>Type:</strong> Volatile, SRAM-based<br/>
          <strong>Speed:</strong> Extremely fast<br/>
          <strong>Use:</strong> Frequently accessed data<br/>
          <strong>Levels:</strong> L1 (fastest), L2, L3</p>
        </div>
        <div class="info-card">
          <span class="card-icon">💽</span>
          <h4>Virtual Memory</h4>
          <p><strong>Type:</strong> Uses disk as RAM extension<br/>
          <strong>Speed:</strong> Slow<br/>
          <strong>Use:</strong> When RAM is full<br/>
          <strong>Technique:</strong> Paging & swapping</p>
        </div>
      </div>

      <h2>🎯 Memory Addressing</h2>
      <div class="info-box">
        <strong>💡 Address Space:</strong>
        <p style="margin-top: 10px; margin-bottom: 10px;">The address space is the range of memory addresses a processor can access:</p>
        <ul style="margin-bottom: 0;">
          <li><strong>8-bit address:</strong> 2^8 = 256 bytes</li>
          <li><strong>16-bit address:</strong> 2^16 = 64 KB</li>
          <li><strong>32-bit address:</strong> 2^32 = 4 GB</li>
          <li><strong>64-bit address:</strong> 2^64 = 16 Exabytes!</li>
        </ul>
      </div>

      <h2>🔄 Memory Access Methods</h2>
      <div class="cards-grid">
        <div class="info-card">
          <span class="card-icon">🎯</span>
          <h4>Random Access</h4>
          <p>Any location accessed in constant time. RAM, cache, registers use this.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">➡️</span>
          <h4>Sequential Access</h4>
          <p>Must access in order. Magnetic tapes use this method.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔍</span>
          <h4>Direct Access</h4>
          <p>Jump to vicinity, then search. Hard drives use this.</p>
        </div>
        <div class="info-card">
          <span class="card-icon">🔗</span>
          <h4>Associative Access</h4>
          <p>Search by content, not address. Cache uses this.</p>
        </div>
      </div>

      <h2>📦 Memory Segmentation</h2>
      <p>Memory is divided into logical segments:</p>
      <ul>
        <li>📝 <strong>Code Segment:</strong> Program instructions</li>
        <li>📊 <strong>Data Segment:</strong> Global and static variables</li>
        <li>📚 <strong>Stack Segment:</strong> Function calls, local variables</li>
        <li>🎯 <strong>Heap Segment:</strong> Dynamic memory allocation</li>
      </ul>

      <div class="fun-fact">
        <strong>🌟 Amazing Fact:</strong>
        <p style="margin-top: 10px; margin-bottom: 0;">Modern CPUs can access L1 cache in about 1 nanosecond, but accessing main RAM takes 100 nanoseconds - 100 times slower! That's why cache is so important for performance.</p>
      </div>

      <div class="quiz-box">
        <h3>🧠 Test Your Knowledge!</h3>
        <p><strong>Question 1:</strong> Which memory is fastest?</p>
        <ul>
          <li>A) RAM</li>
          <li>B) Cache ✓</li>
          <li>C) SSD</li>
          <li>D) HDD</li>
        </ul>
        <p style="margin-top: 15px;"><em>Answer: B - Cache memory is the fastest!</em></p>
      </div>
    </div>
  `,
    questions: [
        { q: "Which memory is fastest?", options: ["RAM", "Cache", "SSD", "HDD"], answer: 1 },
        { q: "How much memory can a 32-bit address access?", options: ["256 MB", "1 GB", "4 GB", "16 GB"], answer: 2 },
        { q: "Which memory is volatile?", options: ["ROM", "RAM", "Flash", "EPROM"], answer: 1 }
    ],
    tools: [{ name: "Memory Hierarchy Visualizer", type: "interactive", description: "Explore memory levels and access times" }]
};
