export const portfolioData = {
  personal: {
    name: "Sa'adi Safdar",
    title: "Full Stack Developer | React Portfolio",
    bio: "Passionate full stack developer specializing in Python, Java, and React. Building real-world applications with focus on clean code, user experience, and modern technologies.",
    email: "saadisafder@yahoo.com",
    location: "Wah, Pakistan",
    social: {
      github: "Saadi-Safdar-Pro",
      linkedin: "saadi-safdar-60339636a",
      fiverr: "s/99gvDVa"
    }
  },
  
  skills: [
    { name: "Python", level: 85, category: "Backend", icon: "🐍" },
    { name: "Java", level: 80, category: "Backend", icon: "☕" },
    { name: "React.js", level: 70, category: "Frontend", icon: "⚛️" },
    { name: "JavaScript", level: 75, category: "Frontend", icon: "🟨" },
    { name: "Node.js", level: 70, category: "Backend", icon: "🟢" },
    { name: "HTML/CSS", level: 80, category: "Frontend", icon: "🎨" },
    { name: "SQL Databases", level: 75, category: "Database", icon: "🗄️" },
    { name: "Tkinter GUI", level: 85, category: "Desktop", icon: "🖥️" },
    { name: "API Integration", level: 70, category: "Backend", icon: "🔗" },
    { name: "Git & GitHub", level: 80, category: "Tools", icon: "📚" },
    { name: "UI/UX Design", level: 60, category: "Design", icon: "✨" }
  ],
  
  projects: [
    {
      id: 1,
      title: "FutureLens - Career Guidance System",
      description: "Intelligent career guidance platform providing personalized recommendations to students based on skills, preferences, and performance analysis.",
      technologies: ["Java", "SQL Server", "Swing GUI", "Database Design"],
      liveUrl: "https://fantastic-selkie-eb2191.netlify.app/",
      githubUrl: "https://github.com/Saadi-Safdar-Pro/my-first-repo/tree/main/Java%20Programs",
      image: "/project1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Image Viewer App with Tkinter GUI",
      description: "Desktop application for browsing and viewing images with advanced features including zoom, fullscreen mode, slideshow, and folder navigation.",
      technologies: ["Python", "Tkinter", "GUI Development", "File Handling"],
      liveUrl: "https://fantastic-selkie-eb2191.netlify.app/",
      githubUrl: "https://github.com/Saadi-Safdar-Pro/my-first-repo/blob/main/Python%20Programs/ImageViewer.py",
      image: "/project2.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Weather App - Web Development",
      description: "Responsive web application displaying real-time weather data using public weather API with clean UI and JSON data processing.",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration", "JSON"],
      liveUrl: "https://fantastic-selkie-eb2191.netlify.app/",
      githubUrl: "https://github.com/Saadi-Safdar-Pro/my-first-repo/blob/main/Web%20Developement%20(HTML%2C%20CSS%2C%20JS)%20Programs/weather/weather.css",
      image: "/project3.jpg",
      featured: false
    },
    {
      id: 4,
      title: "ReactBits Portfolio",
      description: "Professional developer portfolio built with React, custom hooks, and advanced animations. Demonstrates modern React patterns and responsive design.",
      technologies: ["React", "JavaScript", "CSS Animations", "Custom Hooks", "Vite"],
      liveUrl: "https://fantastic-selkie-eb2191.netlify.app/",
      githubUrl: "#",
      image: "/project4.jpg", 
      featured: true
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Freelance & Academic Projects",
      position: "Student Developer",
      period: "2023 - Present",
      description: "Developing real-world applications in Python, Java, and web technologies with focus on GUI development, database integration, and API implementation.",
      achievements: [
        "Built FutureLens career guidance system using Java and SQL Server with multiple interactive modules",
        "Developed Tkinter-based Image Viewer application with advanced features including zoom and slideshow functionality",
        "Implemented API integration in Python applications for real-time data processing and utility services"
      ]
    },
    {
      id: 2,
      company: "Personal Development & Open Source",
      position: "Full Stack Developer",
      period: "2024 - Present", 
      description: "Expanding expertise in modern web technologies including React.js, Node.js, and Express.js with database connectivity and RESTful API development.",
      achievements: [
        "Developed weather application in Python integrating external APIs for real-time data visualization",
        "Built Node.js and Express applications with SQLite database for backend development practice",
        "Created React.js projects with dynamic user interfaces and API integration"
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      institution: "University of Wah",
      degree: "Bachelor of Computer Science",
      period: "2024 - Present",
      description: "Coursework in Data Structures, Artificial Intelligence, Computer Networks, Information Security, and Software Engineering. Developing practical programming skills through academic and personal projects."
    }
  ]
};