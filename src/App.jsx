// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);

//   return (
//     <div className="App">
//       <h1>ReactBits Practice</h1>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;










// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   // Using our new useFetch hook!
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice</h1>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
















// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import { SearchUser } from './components/SearchUser';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice</h1>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>

//       {/* NEW: Debounced Search Section */}
//       <div className="section">
//         <h2>useDebounce Hook (Performance)</h2>
//         <SearchUser />
//       </div>
//     </div>
//   );
// }

// export default App;








// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import { SearchUser } from './components/SearchUser';
// import { KeyLogger } from './components/KeyLogger';
// import { ClickOutsideDemo } from './components/ClickOutsideDemo';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice</h1>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useDebounce Hook (Performance)</h2>
//         <SearchUser />
//       </div>

//       {/* NEW: Event Listener Sections */}
//       <div className="section">
//         <h2>useEventListener Hook (DOM Events)</h2>
//         <KeyLogger />
//       </div>

//       <div className="section">
//         <h2>Click Outside Detection</h2>
//         <ClickOutsideDemo />
//       </div>
//     </div>
//   );
// }

// export default App;













// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import { SearchUser } from './components/SearchUser';
// import { KeyLogger } from './components/KeyLogger';
// import { ClickOutsideDemo } from './components/ClickOutsideDemo';
// import { CompoundDemo } from './components/CompoundDemo';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice - Complete Journey! 🚀</h1>
      
//       <div className="progress-tracker">
//         <div className="progress-step completed">1. Basic Hooks</div>
//         <div className="progress-step completed">2. API Hooks</div>
//         <div className="progress-step completed">3. Performance Hooks</div>
//         <div className="progress-step completed">4. DOM Hooks</div>
//         <div className="progress-step current">5. Advanced Patterns</div>
//       </div>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useDebounce Hook (Performance)</h2>
//         <SearchUser />
//       </div>

//       <div className="section">
//         <h2>useEventListener Hook (DOM Events)</h2>
//         <KeyLogger />
//       </div>

//       <div className="section">
//         <h2>Click Outside Detection</h2>
//         <ClickOutsideDemo />
//       </div>

//       {/* FINAL: Compound Components */}
//       <div className="section highlight">
//         <h2>🎓 Compound Components (Advanced Pattern)</h2>
//         <CompoundDemo />
//       </div>
//     </div>
//   );
// }

// export default App;











// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import { SearchUser } from './components/SearchUser';
// import { KeyLogger } from './components/KeyLogger';
// import { ClickOutsideDemo } from './components/ClickOutsideDemo';
// import { CompoundDemo } from './components/CompoundDemo';
// import { TextAnimationsDemo } from './components/TextAnimationsDemo';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice - Complete Journey! 🚀</h1>
      
//       <div className="progress-tracker">
//         <div className="progress-step completed">1. Basic Hooks</div>
//         <div className="progress-step completed">2. API Hooks</div>
//         <div className="progress-step completed">3. Performance Hooks</div>
//         <div className="progress-step completed">4. DOM Hooks</div>
//         <div className="progress-step current">5. Advanced Patterns</div>
//       </div>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useDebounce Hook (Performance)</h2>
//         <SearchUser />
//       </div>

//       <div className="section">
//         <h2>useEventListener Hook (DOM Events)</h2>
//         <KeyLogger />
//       </div>

//       <div className="section">
//         <h2>Click Outside Detection</h2>
//         <ClickOutsideDemo />
//       </div>

//       <div className="section">
//         <h2>🎓 Compound Components (Advanced Pattern)</h2>
//         <CompoundDemo />
//       </div>

//       {/* NEW: Text Animations Section */}
//       <div className="section highlight">
//         <h2>🎭 Text Animations (ReactBits Patterns)</h2>
//         <TextAnimationsDemo />
//       </div>
//     </div>
//   );
// }

// export default App;












// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import { SearchUser } from './components/SearchUser';
// import { KeyLogger } from './components/KeyLogger';
// import { ClickOutsideDemo } from './components/ClickOutsideDemo';
// import { CompoundDemo } from './components/CompoundDemo';
// import { TextAnimationsDemo } from './components/TextAnimationsDemo';
// import { ComponentAnimationsDemo } from './components/ComponentAnimationsDemo';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice - Complete Journey! 🚀</h1>
      
//       <div className="progress-tracker">
//         <div className="progress-step completed">1. Basic Hooks</div>
//         <div className="progress-step completed">2. API Hooks</div>
//         <div className="progress-step completed">3. Performance Hooks</div>
//         <div className="progress-step completed">4. DOM Hooks</div>
//         <div className="progress-step completed">5. Text Animations</div>
//         <div className="progress-step current">6. Component Animations</div>
//       </div>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useDebounce Hook (Performance)</h2>
//         <SearchUser />
//       </div>

//       <div className="section">
//         <h2>useEventListener Hook (DOM Events)</h2>
//         <KeyLogger />
//       </div>

//       <div className="section">
//         <h2>Click Outside Detection</h2>
//         <ClickOutsideDemo />
//       </div>

//       <div className="section">
//         <h2>🎓 Compound Components (Advanced Pattern)</h2>
//         <CompoundDemo />
//       </div>

//       <div className="section highlight">
//         <h2>🎭 Text Animations (ReactBits Patterns)</h2>
//         <TextAnimationsDemo />
//       </div>

//       {/* NEW: Component Animations Section */}
//       <div className="section highlight">
//         <h2>🎬 Component Animations (ReactBits Patterns)</h2>
//         <ComponentAnimationsDemo />
//       </div>
//     </div>
//   );
// }

// export default App;









// import { useLocalStorage } from './hooks/useLocalStorage';
// import { useToggle } from './hooks/useToggle';
// import { useFetch } from './hooks/useFetch';
// import { SearchUser } from './components/SearchUser';
// import { KeyLogger } from './components/KeyLogger';
// import { ClickOutsideDemo } from './components/ClickOutsideDemo';
// import { CompoundDemo } from './components/CompoundDemo';
// import { TextAnimationsDemo } from './components/TextAnimationsDemo';
// import { ComponentAnimationsDemo } from './components/ComponentAnimationsDemo';
// import { BackgroundEffectsDemo } from './components/BackgroundEffectsDemo';
// import './App.css';

// function App() {
//   const [name, setName] = useLocalStorage('username', 'Guest');
//   const [isVisible, { toggle }] = useToggle(true);
  
//   const { data: user, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

//   return (
//     <div className="App">
//       <h1>ReactBits Practice - Complete Journey! 🚀</h1>
      
//       <div className="progress-tracker">
//         <div className="progress-step completed">1. Basic Hooks</div>
//         <div className="progress-step completed">2. API Hooks</div>
//         <div className="progress-step completed">3. Performance Hooks</div>
//         <div className="progress-step completed">4. DOM Hooks</div>
//         <div className="progress-step completed">5. Text Animations</div>
//         <div className="progress-step completed">6. Component Animations</div>
//         <div className="progress-step current">7. Background Effects</div>
//       </div>
      
//       <div className="section">
//         <h2>useLocalStorage Hook</h2>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           placeholder="Enter your name"
//         />
//         <p>Hello, <strong>{name}</strong>! This is saved in localStorage.</p>
//       </div>

//       <div className="section">
//         <h2>useToggle Hook</h2>
//         <button onClick={toggle} className="toggle-btn">
//           {isVisible ? 'Hide' : 'Show'} Message
//         </button>
        
//         {isVisible && (
//           <div className="message">
//             <p>🎉 This content is toggleable!</p>
//             <p>Try clicking the button above!</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useFetch Hook (API Call)</h2>
//         {loading && <p>⏳ Loading user data...</p>}
//         {error && <p className="error">❌ Error: {error}</p>}
//         {user && (
//           <div className="user-card">
//             <h3>User from API:</h3>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Website:</strong> {user.website}</p>
//           </div>
//         )}
//       </div>

//       <div className="section">
//         <h2>useDebounce Hook (Performance)</h2>
//         <SearchUser />
//       </div>

//       <div className="section">
//         <h2>useEventListener Hook (DOM Events)</h2>
//         <KeyLogger />
//       </div>

//       <div className="section">
//         <h2>Click Outside Detection</h2>
//         <ClickOutsideDemo />
//       </div>

//       <div className="section">
//         <h2>🎓 Compound Components (Advanced Pattern)</h2>
//         <CompoundDemo />
//       </div>

//       <div className="section highlight">
//         <h2>🎭 Text Animations (ReactBits Patterns)</h2>
//         <TextAnimationsDemo />
//       </div>

//       <div className="section highlight">
//         <h2>🎬 Component Animations (ReactBits Patterns)</h2>
//         <ComponentAnimationsDemo />
//       </div>

//       {/* NEW: Background Effects Section */}
//       <div className="section highlight">
//         <h2>🌈 Background Effects (ReactBits Patterns)</h2>
//         <BackgroundEffectsDemo />
//       </div>
//     </div>
//   );
// }

// export default App;













import { portfolioData } from './data/portfolioData';
import { HeroSection } from './components/hero/HeroSection';
import { SkillsShowcase } from './components/skills/SkillsShowcase';
import { ProjectGallery } from './components/projects/ProjectGallery';
import { ContactSection } from './components/contact/ContactSection';
import { ResumeSection } from './components/resume/ResumeSection';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <HeroSection personalInfo={portfolioData.personal} />
      <SkillsShowcase skills={portfolioData.skills} />
      <ProjectGallery projects={portfolioData.projects} />
      <ResumeSection 
        experience={portfolioData.experience} 
        education={portfolioData.education} 
      />
      <ContactSection contactInfo={portfolioData.personal} />
    </div>
  );
}

export default App;