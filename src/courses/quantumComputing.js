export const quantumComputing = {
  id: "quantum-computing",
  title: "Quantum Computing",
  description: "Understand the revolutionary world of quantum mechanics",
  color: "#4ECDC4",
  icon: "🔬",
  level: "Beginner",
  duration: "6 hours",
  students: "1,850",
  sessions: [
    {
      title: "What is Quantum Computing?",
      content: `<h3>Introduction to Quantum Computing</h3>...`, // (content here)
      questions: [
        {
          q: "What is the basic unit of information in quantum computing?",
          options: ["Bit", "Qubit", "Byte", "Nibble"],
          answer: 1
        }]
      },
      {
        title: "Quantum Bits (Qubits)",
        content: `
          <h3>Understanding Qubits</h3>
          <p>The quantum bit (qubit) is the fundamental unit of quantum information.</p>
          
          <div class="lesson-section">
            <h4>📊 Bit vs Qubit</h4>
            <div class="comparison-box">
              <div class="bit-box">
                <h5>Classical Bit</h5>
                <p>Can be: 0 OR 1</p>
                <p>At any moment: one specific value</p>
                <p>Like a light switch: ON or OFF</p>
              </div>
              <div class="qubit-box">
                <h5>Quantum Bit (Qubit)</h5>
                <p>Can be: 0 AND 1 simultaneously</p>
                <p>At any moment: both values at once</p>
                <p>Like a coin spinning in the air (heads and tails)</p>
              </div>
            </div>
          </div>
          
          <div class="lesson-section">
            <h4>🎲 States of a Qubit</h4>
            <p><strong>State |0⟩:</strong> Qubit is definitely 0 (like lying heads)</p>
            <p><strong>State |1⟩:</strong> Qubit is definitely 1 (like lying tails)</p>
            <p><strong>Superposition:</strong> Qubit is both 0 and 1 (like spinning coin)</p>
          </div>
          
          <div class="lesson-section">
            <h4>📈 Computing Power</h4>
            <p><strong>2 Classical Bits:</strong> Can represent ONE of four values at a time</p>
            <p>00, 01, 10, or 11 (but only one)</p>
            <p><strong>2 Qubits:</strong> Can represent ALL FOUR values simultaneously</p>
            <p>00, 01, 10, AND 11 (all at once!)</p>
            <p><strong>N Qubits:</strong> Can represent 2^N values simultaneously</p>
            <ul>
              <li>3 Qubits = 2^3 = 8 values</li>
              <li>10 Qubits = 2^10 = 1,024 values</li>
              <li>300 Qubits = 2^300 = more than atoms in universe!</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>🔬 How Qubits Work Physically</h4>
            <p><strong>Implementations:</strong></p>
            <ul>
              <li><strong>Trapped Ions:</strong> Uses charged atoms trapped by electric fields</li>
              <li><strong>Superconducting Qubits:</strong> Uses circuits cooled to near absolute zero</li>
              <li><strong>Photonic Qubits:</strong> Uses properties of light particles</li>
              <li><strong>Topological Qubits:</strong> Uses exotic quantum states (future)</li>
            </ul>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Qubit can be 0, 1, or both simultaneously</li>
              <li>N qubits represent 2^N values at once</li>
              <li>This is the source of quantum computing power</li>
              <li>Multiple physical implementations exist</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "How many values can 3 qubits represent simultaneously?",
            options: ["3", "6", "8", "9"],
            answer: 2
          }
        ]
      },
      {
        title: "Superposition Principle",
        content: `
          <h3>Understanding Superposition</h3>
          <p>Superposition is the quantum property that allows qubits to exist in multiple states simultaneously.</p>
          
          <div class="lesson-section">
            <h4>🌊 What is Superposition?</h4>
            <p><strong>Definition:</strong> A quantum system can exist in a combination of multiple states at the same time.</p>
            <p><strong>Real-world analogy:</strong></p>
            <ul>
              <li><strong>Sound wave:</strong> Can be high pitch and low pitch at same time (creates harmony)</li>
              <li><strong>Water waves:</strong> Multiple waves can overlap and interfere</li>
              <li><strong>Coin:</strong> Spinning coin is both heads and tails until it lands</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>🎯 The Schrodinger's Cat Thought Experiment</h4>
            <p><strong>Famous experiment:</strong> A cat in a sealed box with a radioactive atom</p>
            <p><strong>Scenario:</strong></p>
            <ul>
              <li>If atom decays → Poison released → Cat dies</li>
              <li>If atom doesn't decay → Cat lives</li>
            </ul>
            <p><strong>Quantum Truth:</strong> Until we open the box and observe, the cat is BOTH dead AND alive!</p>
            <p><strong>Key Point:</strong> Observation collapses superposition to one state</p>
          </div>
          
          <div class="lesson-section">
            <h4>💻 Superposition in Computing</h4>
            <p><strong>Classical Search:</strong> Check item 1, then 2, then 3... (serial process)</p>
            <p><strong>Quantum Search:</strong> Check ALL items at once (parallel superposition)</p>
            <p><strong>Result:</strong> Exponential speedup for certain problems!</p>
          </div>
          
          <div class="lesson-section">
            <h4>📊 Mathematical Representation</h4>
            <p><strong>Qubit State:</strong> |ψ⟩ = α|0⟩ + β|1⟩</p>
            <ul>
              <li>α = probability amplitude for state |0⟩</li>
              <li>β = probability amplitude for state |1⟩</li>
              <li>α² + β² = 1 (must sum to 1)</li>
            </ul>
            <p><strong>Example:</strong> |ψ⟩ = 0.6|0⟩ + 0.8|1⟩</p>
            <p>60% chance to measure 0, 40% chance to measure 1</p>
          </div>
          
          <div class="lesson-section">
            <h4>🔍 Measurement Collapses Superposition</h4>
            <p><strong>Before Measurement:</strong> Qubit is in superposition (both 0 and 1)</p>
            <p><strong>During Measurement:</strong> Superposition collapses</p>
            <p><strong>After Measurement:</strong> We get definitely 0 or 1</p>
            <p><strong>Key:</strong> Measurement forces a single outcome</p>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Superposition = existing in multiple states simultaneously</li>
              <li>Measurement collapses superposition to one state</li>
              <li>This enables quantum speedup</li>
              <li>Different from classical probability</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "What happens when you measure a superposed qubit?",
            options: ["Stays the same", "Collapses to 0 or 1", "Becomes undefined", "Multiplies"],
            answer: 1
          }
        ]
      },
      {
        title: "Entanglement Concept",
        content: `
          <h3>Understanding Entanglement</h3>
          <p>Entanglement is the spooky quantum connection between particles.</p>
          
          <div class="lesson-section">
            <h4>👻 What is Entanglement?</h4>
            <p><strong>Definition:</strong> Two or more qubits become connected so their states depend on each other.</p>
            <p><strong>Key Feature:</strong> Measuring one instantly affects the other, even if far apart!</p>
            <p><strong>Einstein's Term:</strong> "Spooky action at a distance"</p>
          </div>
          
          <div class="lesson-section">
            <h4>🎲 The Entangled Coins Analogy</h4>
            <p><strong>Imagine:</strong> Two magic coins created together</p>
            <p><strong>Property:</strong> They always show opposite faces</p>
            <p><strong>You:</strong> Take one coin to New York, friend takes one to Tokyo</p>
            <p><strong>Then:</strong> You flip your coin and get heads</p>
            <p><strong>Instantly:</strong> Your friend's coin MUST show tails</p>
            <p><strong>No communication:</strong> They didn't contact each other!</p>
          </div>
          
          <div class="lesson-section">
            <h4>⚙️ Entangled Qubit States</h4>
            <p><strong>Bell States (maximally entangled):</strong></p>
            <div class="bell-states">
              <p>|00⟩ + |11⟩ → Both 0 or both 1</p>
              <p>|01⟩ + |10⟩ → Always opposite</p>
            </div>
            <p><strong>Key:</strong> Qubits are interdependent</p>
          </div>
          
          <div class="lesson-section">
            <h4>🚀 Applications of Entanglement</h4>
            <ul>
              <li><strong>Quantum Computing:</strong> Entangled qubits work together for power</li>
              <li><strong>Quantum Cryptography:</strong> Unhackable communication</li>
              <li><strong>Quantum Teleportation:</strong> Transfer quantum states</li>
              <li><strong>Quantum Sensors:</strong> Incredibly precise measurements</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>❓ The Mystery of Entanglement</h4>
            <p><strong>Question:</strong> How do particles "communicate" instantly?</p>
            <p><strong>Answer:</strong> They don't! They share a quantum state</p>
            <p><strong>Limitation:</strong> Can't use entanglement to send messages faster than light</p>
            <p><strong>Why:</strong> The results appear random until compared</p>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Entanglement creates quantum correlation between particles</li>
              <li>Measuring one instantly affects the other</li>
              <li>No faster-than-light communication possible</li>
              <li>Essential for quantum computing advantage</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "What does measuring one entangled qubit do?",
            options: ["Nothing", "Destroys the other", "Affects the other instantly", "Reverses polarity"],
            answer: 2
          }
        ]
      },
      {
        title: "Quantum Gates",
        content: `
          <h3>Understanding Quantum Gates</h3>
          <p>Quantum gates manipulate qubits, similar to how logic gates work in classical computers.</p>
          
          <div class="lesson-section">
            <h4>🎮 What are Quantum Gates?</h4>
            <p><strong>Definition:</strong> Operations that manipulate the state of qubits</p>
            <p><strong>Classical analogy:</strong> Logic gates (AND, OR, NOT) manipulate bits</p>
            <p><strong>Quantum gates:</strong> Manipulate qubits using quantum mechanics</p>
          </div>
          
          <div class="lesson-section">
            <h4>🔧 Common Quantum Gates</h4>
            <div class="gate">
              <h5>Pauli-X Gate (NOT Gate)</h5>
              <p><strong>Effect:</strong> Flips qubit state</p>
              <p>|0⟩ → |1⟩</p>
              <p>|1⟩ → |0⟩</p>
            </div>
            <div class="gate">
              <h5>Pauli-Z Gate</h5>
              <p><strong>Effect:</strong> Adds phase</p>
              <p>|0⟩ → |0⟩</p>
              <p>|1⟩ → -|1⟩</p>
            </div>
            <div class="gate">
              <h5>Hadamard Gate (H)</h5>
              <p><strong>Effect:</strong> Creates superposition</p>
              <p>|0⟩ → (|0⟩ + |1⟩)/√2</p>
              <p>Creates equal superposition of 0 and 1</p>
            </div>
            <div class="gate">
              <h5>CNOT Gate</h5>
              <p><strong>Effect:</strong> Controlled NOT</p>
              <p>If control qubit is 1, flip target qubit</p>
              <p>Can create entanglement</p>
            </div>
          </div>
          
          <div class="lesson-section">
            <h4>🔄 Quantum Circuit</h4>
            <p><strong>Similar to:</strong> Classical circuit with logic gates</p>
            <p><strong>Difference:</strong> Gates apply quantum operations</p>
            <p><strong>Process:</strong></p>
            <ol>
              <li>Initialize qubits (usually |0⟩)</li>
              <li>Apply quantum gates</li>
              <li>Measure qubits</li>
              <li>Get classical result</li>
            </ol>
          </div>
          
          <div class="lesson-section">
            <h4>⚙️ Reversibility</h4>
            <p><strong>Key Property:</strong> Quantum gates are reversible</p>
            <p><strong>Why:</strong> Quantum mechanics is time-reversible</p>
            <p><strong>Implication:</strong> Can't "delete" quantum information (no garbage collection)</p>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Quantum gates manipulate qubit states</li>
              <li>Common gates: X, Z, H, CNOT</li>
              <li>Gates are reversible operations</li>
              <li>Combine gates to build quantum algorithms</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "What does the Hadamard gate do?",
            options: ["Flips qubit", "Measures qubit", "Creates superposition", "Entangles qubits"],
            answer: 2
          }
        ]
      },
      {
        title: "Quantum Circuits Basics",
        content: `
          <h3>Understanding Quantum Circuits</h3>
          <p>Quantum circuits are the blueprints for quantum computations.</p>
          
          <div class="lesson-section">
            <h4>📐 What is a Quantum Circuit?</h4>
            <p><strong>Definition:</strong> Sequence of quantum gates applied to qubits</p>
            <p><strong>Visual Representation:</strong></p>
            <ul>
              <li><strong>Horizontal lines:</strong> Represent qubits</li>
              <li><strong>Boxes:</strong> Represent quantum gates</li>
              <li><strong>Measurement symbol:</strong> Shows measurement point</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>🔌 Building a Quantum Circuit</h4>
            <p><strong>Step 1:</strong> Initialize qubits to |0⟩</p>
            <p><strong>Step 2:</strong> Apply gates from left to right</p>
            <p><strong>Step 3:</strong> Gates can act on single or multiple qubits</p>
            <p><strong>Step 4:</strong> Measure at the end</p>
          </div>
          
          <div class="lesson-section">
            <h4>📊 Simple Example Circuit</h4>
            <p><strong>Goal:</strong> Create superposition and measure</p>
            <p><strong>Circuit:</strong></p>
            <ol>
              <li>Qubit 1: Initialize to |0⟩</li>
              <li>Apply Hadamard gate (H)</li>
              <li>Now in superposition: (|0⟩ + |1⟩)/√2</li>
              <li>Measure</li>
              <li>Result: 50% 0, 50% 1</li>
            </ol>
          </div>
          
          <div class="lesson-section">
            <h4>🔗 Multi-Qubit Circuits</h4>
            <p><strong>Qubit 1:</strong> H gate (create superposition)</p>
            <p><strong>Qubit 2:</strong> Start at |0⟩</p>
            <p><strong>CNOT gate:</strong> Control=Qubit1, Target=Qubit2</p>
            <p><strong>Result:</strong> Entangled state!</p>
            <p><strong>Measurement:</strong> Both qubits always opposite or same</p>
          </div>
          
          <div class="lesson-section">
            <h4>🛠️ Quantum Circuit Design Principles</h4>
            <ul>
              <li><strong>Minimize gates:</strong> Fewer gates = less error</li>
              <li><strong>Exploit superposition:</strong> Check multiple paths simultaneously</li>
              <li><strong>Use entanglement:</strong> Correlate qubits for advantage</li>
              <li><strong>Quantum interference:</strong> Cancel wrong answers</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>💻 Real Quantum Computers</h4>
            <p><strong>IBM Quantum Experience:</strong> Public access to real quantum computer</p>
            <p><strong>Google Sycamore:</strong> 53 qubits</p>
            <p><strong>IonQ:</strong> Trapped ion qubits</p>
            <p><strong>Rigetti:</strong> Hybrid classical-quantum approach</p>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Quantum circuits sequence quantum gates</li>
              <li>Lines represent qubits, boxes represent gates</li>
              <li>Can operate on single or multiple qubits</li>
              <li>Measurement at end gives classical result</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "What do the horizontal lines in a quantum circuit represent?",
            options: ["Time", "Qubits", "Gates", "Measurements"],
            answer: 1
          }
        ]
      },
      {
        title: "Quantum Algorithms Intro",
        content: `
          <h3>Introduction to Quantum Algorithms</h3>
          <p>Quantum algorithms are designed to leverage quantum properties for speedup.</p>
          
          <div class="lesson-section">
            <h4>🎯 What is a Quantum Algorithm?</h4>
            <p><strong>Definition:</strong> Step-by-step procedure to solve a problem using qubits</p>
            <p><strong>Goal:</strong> Solve faster than classical algorithms</p>
            <p><strong>Key:</strong> Exploit superposition and entanglement</p>
          </div>
          
          <div class="lesson-section">
            <h4>🔍 Grover's Algorithm</h4>
            <p><strong>Problem:</strong> Find an item in an unsorted database</p>
            <p><strong>Classical:</strong> Need to check ~N/2 items on average</p>
            <p><strong>Quantum (Grover):</strong> Only need √N checks!</p>
            <p><strong>Example:</strong></p>
            <ul>
              <li>1 million items: Classical needs 500,000, Grover needs 1,000</li>
              <li>Speedup: 500x faster!</li>
            </ul>
            <p><strong>How:</strong> Uses superposition to check all items, then amplifies right answer</p>
          </div>
          
          <div class="lesson-section">
            <h4>🔐 Shor's Algorithm</h4>
            <p><strong>Problem:</strong> Factor large numbers into primes</p>
            <p><strong>Classical:</strong> Takes exponential time (thousands of years for large numbers)</p>
            <p><strong>Quantum (Shor):</strong> Takes polynomial time (hours or days)</p>
            <p><strong>Impact:</strong> Could break RSA encryption!</p>
            <p><strong>Application:</strong> Cryptography, security implications</p>
          </div>
          
          <div class="lesson-section">
            <h4>🧪 VQE (Variational Quantum Eigensolver)</h4>
            <p><strong>Problem:</strong> Find ground state energy of molecules</p>
            <p><strong>Classical:</strong> Complex simulations needed</p>
            <p><strong>Quantum:</strong> Qubits naturally represent molecular states</p>
            <p><strong>Application:</strong> Drug discovery, materials science</p>
            <p><strong>Hybrid:</strong> Uses both quantum and classical computers</p>
          </div>
          
          <div class="lesson-section">
            <h4>🎓 Quantum Fourier Transform (QFT)</h4>
            <p><strong>Classical version:</strong> Fast Fourier Transform (FFT)</p>
            <p><strong>Quantum version:</strong> QFT</p>
            <p><strong>Advantage:</strong> Exponential speedup</p>
            <p><strong>Used in:</strong> Shor's algorithm, phase estimation</p>
          </div>
          
          <div class="lesson-section">
            <h4>📈 Quantum vs Classical Speedup</h4>
            <div class="speedup-table">
              <table>
                <thead>
                  <tr>
                    <th>Problem</th>
                    <th>Classical</th>
                    <th>Quantum</th>
                    <th>Speedup</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Search (Grover)</td>
                    <td>N</td>
                    <td>√N</td>
                    <td>√N faster</td>
                  </tr>
                  <tr>
                    <td>Factor (Shor)</td>
                    <td>Exponential</td>
                    <td>Polynomial</td>
                    <td>Huge!</td>
                  </tr>
                  <tr>
                    <td>Simulation</td>
                    <td>Exponential</td>
                    <td>Polynomial</td>
                    <td>Exponential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Quantum algorithms exploit quantum properties</li>
              <li>Grover: √N speedup for search</li>
              <li>Shor: Exponential speedup for factoring</li>
              <li>Most powerful for specific problem classes</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "How much faster is Grover's algorithm than classical search?",
            options: ["2x", "10x", "√N times", "N times"],
            answer: 2
          }
        ]
      },
      {
        title: "Quantum Error Correction",
        content: `
          <h3>Understanding Quantum Error Correction</h3>
          <p>Quantum systems are fragile and need protection from errors.</p>
          
          <div class="lesson-section">
            <h4>⚠️ Why Errors Happen</h4>
            <p><strong>Main sources:</strong></p>
            <ul>
              <li><strong>Decoherence:</strong> Environmental disturbance</li>
              <li><strong>Temperature:</strong> Thermal noise (superconducting qubits)</li>
              <li><strong>Electromagnetic radiation:</strong> Random perturbations</li>
              <li><strong>Gate errors:</strong> Imprecise qubit operations</li>
            </ul>
            <p><strong>Problem:</strong> Classical computers can handle ~1 error per 10^17 operations</p>
            <p><strong>Quantum:</strong> Can handle ~1 error per 1000 operations (1000x worse!)</p>
          </div>
          
          <div class="lesson-section">
            <h4>🛡️ Classical Error Correction vs Quantum</h4>
            <p><strong>Classical:</strong> Simply copy information</p>
            <p>Bit value → Repeat it 3 times → Vote on correct value</p>
            <p><strong>Quantum:</strong> Can't copy qubits (no-cloning theorem)</strong></p>
            <p><strong>Solution:</strong> Entangle multiple qubits, distribute information</p>
          </div>
          
          <div class="lesson-section">
            <h4>🔧 Quantum Error Correction Codes</h4>
            <div class="code">
              <h5>Three-Qubit Code (Simplest)</h5>
              <p>Use 3 physical qubits to protect 1 logical qubit</p>
              <p>Can detect and fix single qubit errors</p>
            </div>
            <div class="code">
              <h5>Surface Code</h5>
              <p>Most practical for large-scale quantum computers</p>
              <p>Qubits arranged in 2D grid</p>
              <p>Check syndrome measurements</p>
            </div>
            <div class="code">
              <h5>Stabilizer Codes</h5>
              <p>General framework for quantum codes</p>
              <p>Can correct multiple error types</p>
            </div>
          </div>
          
          <div class="lesson-section">
            <h4>📊 Error Correction Overhead</h4>
            <p><strong>Problem:</strong> Need many physical qubits per logical qubit</p>
            <p><strong>Current requirement:</strong> ~1000 physical qubits per logical qubit</p>
            <p><strong>Future goal:</strong> Reduce to ~100</p>
            <p><strong>Implication:</strong> Today's 50-qubit computers useful only for specific problems</p>
          </div>
          
          <div class="lesson-section">
            <h4>🎯 Error Correction Steps</h4>
            <ol>
              <li>Encode logical qubit across multiple physical qubits</li>
              <li>Apply quantum gates (errors may occur)</li>
              <li>Measure syndrome (detect errors without destroying data)</li>
              <li>Apply corrective operations based on syndrome</li>
              <li>Proceed with computation</li>
            </ol>
          </div>
          
          <div class="lesson-section">
            <h4>🔮 Future of Quantum Computers</h4>
            <p><strong>Current era:</strong> NISQ (Noisy Intermediate-Scale Quantum)</p>
            <p><strong>Challenge:</strong> Limited qubits, high error rates</p>
            <p><strong>Future:</strong> Fault-tolerant quantum computers</p>
            <p><strong>Requirement:</strong> Solve quantum error correction problem</p>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Quantum errors are common and harmful</li>
              <li>Can't simply copy quantum information</li>
              <li>Need quantum error correction codes</li>
              <li>Requires significant overhead (many qubits)</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "Why can't we use simple copying for quantum error correction?",
            options: ["Too slow", "No-cloning theorem", "Too expensive", "Requires measurement"],
            answer: 1
          }
        ]
      },
      {
        title: "Real-World Examples",
        content: `
          <h3>Real-World Applications of Quantum Computing</h3>
          <p>Discover how quantum computers will transform industries.</p>
          
          <div class="lesson-section">
            <h4>💊 Drug Discovery and Molecular Simulation</h4>
            <p><strong>Current Problem:</strong> Simulating molecular interactions takes years of computation</p>
            <p><strong>Quantum Solution:</strong> Qubits naturally represent molecular systems</p>
            <p><strong>Speedup:</strong> Simulate in hours what takes months classically</p>
            <p><strong>Impact:</strong></p>
            <ul>
              <li>Faster drug development</li>
              <li>Lower pharmaceutical costs</li>
              <li>Better personalized medicine</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>🔐 Cryptography and Security</h4>
            <p><strong>Threat:</strong> Shor's algorithm can break RSA encryption</p>
            <p><strong>Impact:</strong> Current encryption useless to quantum computers</p>
            <p><strong>Post-Quantum Cryptography:</strong> New algorithms resistant to quantum attacks</p>
            <p><strong>Quantum Key Distribution:</strong> Unhackable communication using quantum mechanics</p>
          </div>
          
          <div class="lesson-section">
            <h4>💰 Financial Optimization</h4>
            <p><strong>Application:</strong> Portfolio optimization, risk analysis</p>
            <p><strong>Current:</strong> Complex calculations for investment strategies</p>
            <p><strong>Quantum:</strong> Solve optimization problems exponentially faster</p>
            <p><strong>Benefit:</strong> Better investment decisions, reduced financial risk</p>
          </div>
          
          <div class="lesson-section">
            <h4>🤖 Artificial Intelligence and Machine Learning</h4>
            <p><strong>Quantum Machine Learning:</strong> Train models faster</p>
            <p><strong>Applications:</strong></p>
            <ul>
              <li>Pattern recognition</li>
              <li>Data classification</li>
              <li>Optimization of neural networks</li>
            </ul>
            <p><strong>Challenge:</strong> Still exploring best quantum ML algorithms</p>
          </div>
          
          <div class="lesson-section">
            <h4>🧬 Materials Science</h4>
            <p><strong>Problem:</strong> Designing new materials with specific properties</p>
            <p><strong>Quantum Solution:</strong> Simulate material behavior at quantum level</p>
            <p><strong>Examples:</strong></p>
            <ul>
              <li>Better batteries for electric vehicles</li>
              <li>Superconductors for power transmission</li>
              <li>More efficient solar panels</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>🔬 Current Real Systems</h4>
            <div class="systems">
              <p><strong>IBM Quantum:</strong> 50+ qubits, cloud-accessible</p>
              <p><strong>Google Sycamore:</strong> 53 qubits, achieved quantum advantage</p>
              <p><strong>IonQ:</strong> High-fidelity trapped ion qubits</p>
              <p><strong>Rigetti:</strong> Hybrid classical-quantum</p>
            </div>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Key Takeaways</h4>
            <ul>
              <li>Drug discovery: Exponential speedup in molecular simulation</li>
              <li>Cryptography: Will break current encryption</li>
              <li>Finance: Better optimization and risk analysis</li>
              <li>Materials: Design new compounds faster</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "What is the main threat of quantum computers to cryptography?",
            options: ["Hacking", "Shor's algorithm", "Noise", "Temperature"],
            answer: 1
          }
        ]
      },
      {
        title: "Revision: Quiz and Summary",
        content: `
          <h3>Quantum Computing Course Review</h3>
          <p>Test your understanding of quantum computing fundamentals!</p>
          
          <div class="lesson-section">
            <h4>📚 What You've Learned</h4>
            <ul>
              <li>✓ Quantum computers use quantum mechanics for computation</li>
              <li>✓ Qubits can be 0, 1, or both (superposition)</li>
              <li>✓ Superposition enables parallel computation</li>
              <li>✓ Entanglement creates quantum correlations</li>
              <li>✓ Quantum gates manipulate qubits</li>
              <li>✓ Quantum circuits sequence gates</li>
              <li>✓ Famous algorithms: Grover (search), Shor (factoring)</li>
              <li>✓ Error correction is essential</li>
              <li>✓ Real-world applications in many industries</li>
            </ul>
          </div>
          
          <div class="lesson-section">
            <h4>🎯 Key Concepts Summary</h4>
            <div class="concept">
              <h5>Superposition</h5>
              <p>Qubits in multiple states simultaneously = exponential computation</p>
            </div>
            <div class="concept">
              <h5>Entanglement</h5>
              <p>Qubits correlated so measuring one affects the other</p>
            </div>
            <div class="concept">
              <h5>Quantum Gates</h5>
              <p>X, Z, H, CNOT - manipulate qubit states</p>
            </div>
            <div class="concept">
              <h5>Quantum Advantage</h5>
              <p>Exponential speedup for specific problem classes</p>
            </div>
          </div>
          
          <div class="lesson-section">
            <h4>⚡ Quick Reference</h4>
            <ul>
              <li><strong>Bit:</strong> 0 or 1</li>
              <li><strong>Qubit:</strong> 0, 1, or both</li>
              <li><strong>N Qubits:</strong> 2^N states simultaneously</li>
              <li><strong>Grover speedup:</strong> √N</li>
              <li><strong>Shor speedup:</strong> Exponential</li>
            </ul>
          </div>
          
          <div class="key-takeaways">
            <h4>📌 Next Steps</h4>
            <ul>
              <li>Retake quizzes to reinforce learning</li>
              <li>Explore IBM Quantum Experience (free access)</li>
              <li>Write your first quantum program (Qiskit)</li>
              <li>Learn more about specific algorithms</li>
              <li>Explore quantum machine learning</li>
            </ul>
          </div>
        `,
        questions: [
          {
            q: "What is the fundamental difference between a bit and qubit?",
            options: ["Size", "Superposition ability", "Cost", "Speed"],
            answer: 1
          },
          {
            q: "Which algorithm breaks RSA encryption?",
            options: ["Grover", "Shor", "Deutch-Jozsa", "HHL"],
            answer: 1
          },
          {
            q: "What enables quantum computing speedup?",
            options: ["Faster processors", "Superposition and entanglement", "Better algorithms", "More memory"],
            answer: 1
          },
          {
            q: "Why is error correction important for quantum computers?",
            options: ["It's optional", "Qubits are fragile to errors", "Reduces cost", "Increases qubits"],
            answer: 1
          },
          {
            q: "How many values can 4 qubits represent at once?",
            options: ["4", "8", "16", "32"],
            answer: 2
          }
        ]
      },
    // ... rest of 10 sessions
  ]
};
