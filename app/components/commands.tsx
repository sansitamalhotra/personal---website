export const commands = {
  help: () => (
    <div className="space-y-2">
      <div className="text-yellow-400 font-bold mb-2">Available Commands:</div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div><span className="text-cyan-400">help</span> - Show this help message</div>
        <div><span className="text-cyan-400">about</span> - Learn about Sansa</div>
        <div><span className="text-cyan-400">skills</span> - View technical skills</div>
        <div><span className="text-cyan-400">projects</span> - See my projects</div>
        <div><span className="text-cyan-400">experience</span> - Work experience</div>
        <div><span className="text-cyan-400">contact</span> - Get in touch</div>
        <div><span className="text-cyan-400">socials</span> - Social media links</div>
        <div><span className="text-cyan-400">resume</span> - Download resume</div>
        <div><span className="text-cyan-400">clear</span> - Clear terminal</div>
        <div><span className="text-cyan-400">matrix</span> - Enter the Matrix 🟢</div>
        <div><span className="text-cyan-400">joke</span> - Random dev joke</div>
        <div><span className="text-cyan-400">ascii</span> - ASCII art surprise</div>
      </div>
    </div>
  ),

  about: () => (
    <div className="space-y-2">
      <div className="text-yellow-400 text-lg mb-2">👋 Hi, I'm Sansa!</div>
      <div className="text-white">
        <p>🎓 2nd year Computer Engineering @ University of Toronto</p>
        <p>💼 Full Stack Developer @ S M Software Solutions</p>
        <p>🏆 First Place @ NewHacks 2025 with GigIT</p>
        <p>🚀 Building the future, one line of code at a time</p>
      </div>
      <div className="mt-3 text-cyan-400 italic">
        "Coding is the only field that can intersect with other fields and solve issues."
      </div>
    </div>
  ),

  skills: () => (
    <div className="space-y-3">
      <div className="text-yellow-400 text-lg mb-2">🛠️ Technical Skills</div>
      <div>
        <div className="text-cyan-400">Languages:</div>
        <div className="ml-4 text-white">Python • JavaScript • TypeScript • Java • C • Verilog</div>
      </div>
      <div>
        <div className="text-cyan-400">Frontend:</div>
        <div className="ml-4 text-white">React • Next.js • Tailwind CSS • Three.js</div>
      </div>
      <div>
        <div className="text-cyan-400">Backend:</div>
        <div className="ml-4 text-white">Node.js • Express • MongoDB • PostgreSQL • Firebase</div>
      </div>
      <div>
        <div className="text-cyan-400">Tools:</div>
        <div className="ml-4 text-white">Git • Docker • AWS • Vercel • GSAP • Framer Motion</div>
      </div>
    </div>
  ),

  projects: () => (
    <div className="space-y-3">
      <div className="text-yellow-400 text-lg mb-2">🚀 Featured Projects</div>
      
      <div className="border-l-2 border-cyan-400 pl-3">
        <div className="text-white font-bold">🏆 GigIT - NewHacks 2025 Winner</div>
        <div className="text-sm text-gray-300">KYC verification platform • 85% accuracy</div>
        <div className="text-xs text-cyan-400">React • Node.js • MongoDB • Face++</div>
      </div>

      <div className="border-l-2 border-cyan-400 pl-3">
        <div className="text-white font-bold">🛡️ SafetyNet HER - DeltaHacks 12</div>
        <div className="text-sm text-gray-300">AI-powered crisis response system</div>
        <div className="text-xs text-cyan-400">React Native • OpenAI • Firebase</div>
      </div>

      <div className="border-l-2 border-cyan-400 pl-3">
        <div className="text-white font-bold">🔄 Schema Sync - Hack the Valley X</div>
        <div className="text-sm text-gray-300">AI data integration • 92% field match accuracy</div>
        <div className="text-xs text-cyan-400">Python • TensorFlow • PostgreSQL</div>
      </div>

      <div className="border-l-2 border-cyan-400 pl-3">
        <div className="text-white font-bold">🎮 CodeCrush</div>
        <div className="text-sm text-gray-300">Gamified coding interview prep platform</div>
        <div className="text-xs text-cyan-400">Next.js • TypeScript • Vercel</div>
      </div>
    </div>
  ),

  experience: () => (
    <div className="space-y-3">
      <div className="text-yellow-400 text-lg mb-2">💼 Work Experience</div>
      
      <div className="border-l-2 border-green-400 pl-3">
        <div className="text-white font-bold">Full Stack Developer</div>
        <div className="text-cyan-400">S M Software Solutions</div>
        <div className="text-xs text-gray-400">June 2022 - Present</div>
        <ul className="text-sm text-gray-300 mt-1 space-y-1">
          <li>• Production systems serving 250+ daily users</li>
          <li>• Full-stack development with modern tech</li>
          <li>• Performance optimization & scalability</li>
        </ul>
      </div>
    </div>
  ),

  contact: () => (
    <div className="space-y-2">
      <div className="text-yellow-400 text-lg mb-2">📬 Get In Touch</div>
      <div className="text-white">
        <p>📧 Email: <span className="text-cyan-400">your.email@example.com</span></p>
        <p>📱 Open to Summer 2026 internship opportunities!</p>
      </div>
    </div>
  ),

  socials: () => (
    <div className="space-y-2">
      <div className="text-yellow-400 text-lg mb-2">🌐 Find Me Online</div>
      <div className="space-y-1 text-white">
        <div>🔗 GitHub: <span className="text-cyan-400 hover:underline cursor-pointer">github.com/yourusername</span></div>
        <div>💼 LinkedIn: <span className="text-cyan-400 hover:underline cursor-pointer">linkedin.com/in/yourname</span></div>
        <div>🐦 Twitter: <span className="text-cyan-400 hover:underline cursor-pointer">@yourhandle</span></div>
      </div>
    </div>
  ),

  resume: () => (
    <div className="text-green-400">
      ✅ Resume download started! (Feature coming soon)
    </div>
  ),

  matrix: () => (
    <div className="text-green-400 animate-pulse">
      <pre className="text-xs">
{`
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

🐰 Knock, knock, Neo.
`}
      </pre>
      <div className="text-yellow-400 mt-2">💊 Red pill or blue pill?</div>
    </div>
  ),

  joke: () => {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "How many programmers does it take to change a light bulb? None. It's a hardware problem. 💡",
      "Why do Java developers wear glasses? Because they don't C#! 👓",
      "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺",
      "!false - It's funny because it's true! 😄",
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return <div className="text-yellow-400">😂 {randomJoke}</div>;
  },

  ascii: () => (
    <pre className="text-cyan-400 text-xs">
{`
    /\\_/\\  
   ( o.o ) 
    > ^ 
   /|   |\\
  (_|   |_)
  
   Meow! 🐱
`}
    </pre>
  ),
};