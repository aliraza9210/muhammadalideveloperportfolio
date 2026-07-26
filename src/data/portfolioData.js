// ============================================================
// portfolioData.js — Centralized configuration for Muhammad Ali's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Muhammad Ali",
  firstName: "Muhammad",
  brandName: "Muhammad Ali",
  title: "Full Stack & MERN Stack Developer",
  location: "Lahore, Pakistan",
  phone: "+92 333-2469359",
  emails: {
    primary: "muhammadali.deve@gmail.com",
    secondary: "muhammadali.deve@gmail.com",
  },
  summary:
    "Computer Science undergraduate at Punjab University skilled in React.js, Node.js, Express.js, MongoDB, and WordPress development with Elementor & WooCommerce. Passionate about building fast, modern, responsive, and user-friendly web applications.",
  resumeUrl: "/Muhammad_Ali_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/aliraza9210",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/muhammadali.deve/",
};

export const heroContent = {
  greeting: "Hi, I'm Muhammad Ali",
  titleHighlight: "Full Stack Web Developer",
  subtitle:
    "I specialize in the MERN stack and WordPress development, turning creative ideas into scalable digital solutions — from clean front-end interfaces to custom Web pages & back-end systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:muhammadali.deve@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Muhammad Ali,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Muhammad_Ali_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Muhammad Ali</span>. I am a Computer Science undergraduate student in my 6th semester at the University of the Punjab, specializing in full-stack web development with the MERN stack and WordPress (Elementor & WooCommerce). I enjoy building modern, responsive, and user-friendly web applications from scratch.`,
  techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "WordPress"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and technical approach to build clean, robust full-stack applications and custom WordPress sites.",
  cards: [
    {
      number: "01",
      title: "Research & Planning",
      text: "Understanding client requirements, target audience, and system architecture to establish clear technical specifications.",
    },
    {
      number: "02",
      title: "UI/UX & Frontend Design",
      text: "Crafting intuitive interfaces with Figma, React.js, Tailwind CSS, and WordPress Elementor that deliver pixel-perfect user experiences.",
    },
    {
      number: "03",
      title: "Backend & API Development",
      text: "Building secure Node.js & Express RESTful APIs, JWT authentication, and integrating MongoDB / WooCommerce e-commerce stores.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      text: "Performance optimization, cross-browser debugging, and seamless deployment with ongoing support and maintenance.",
    },
  ],
  endText: "Ready to build!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "Python", level: 78 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Web Design", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 90 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      title: "CMS & WordPress Development",
      skills: [
        { name: "WordPress (From Scratch)", level: 92 },
        { name: "Elementor Page Builder", level: 94 },
        { name: "WooCommerce & E-Commerce", level: 88 },
        { name: "Plugins & Custom Webpages", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 82 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "npm", level: 90 },
        { name: "Antigravity IDE", level: 85 },
        { name: "Figma & Canva", level: 82 }
      ]
    },
    {
      title: "Computer Science & AI Tools",
      skills: [
        { name: "OOP", level: 90 },
        { name: "Data Structures & Algorithms", level: 86 },
        { name: "DBMS & SDLC", level: 85 },
        { name: "ChatGPT / Gemini / Claude AI", level: 92 }
      ]
    }
  ]
};

// Creative Direction / Visual Skills Data
export const contentCreation = {
  badge: "Design & Digital Marketing",
  heading: "UI/UX Design, Branding & WordPress Development",
  description: "Beyond coding, I bring expertise in WordPress custom webpage design, Elementor, WooCommerce, and digital marketing strategies.",
  categories: [
    {
      title: "WordPress & WooCommerce",
      description: "Building custom WordPress websites, Elementor landing pages, and fully functional WooCommerce e-commerce stores from scratch.",
      stats: "WordPress, Elementor & WooCommerce",
      icon: "🌐"
    },
    {
      title: "UI/UX & Prototyping",
      description: "Designing modern, pixel-perfect user interfaces, wireframes, and interactive Figma prototypes.",
      stats: "Figma & Responsive Design",
      icon: "🎨"
    },
    {
      title: "Digital Marketing & Ads",
      description: "Managing Meta (Facebook & Instagram) ads campaigns, email marketing, and content marketing strategies.",
      stats: "Meta Ads & Content",
      icon: "📈"
    },
    {
      title: "Branding & Asset Design",
      description: "Crafting social media posts, business cards, letterheads, flyers, and promotional banners with Canva & Adobe tools.",
      stats: "Graphics & Branding",
      icon: "✨"
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "Class & Team Collaboration Lead",
    description: "Actively leading group projects, coordinating technical development phases, and mentoring peers in web development.",
    role: "Project Team Lead",
    badge: "Leadership"
  },
  {
    title: "Web Development Trainee & Advocate",
    description: "Participated in hands-on industry training at Qalam Institute & ShellShift Co-Workspace, assisting fellow trainees in MERN stack concepts.",
    role: "MERN Stack Specialist",
    badge: "Co-Curricular"
  },
  {
    title: "PFTP AI Program Graduate",
    description: "Completed government-funded 3-month certification program in Artificial Intelligence with Python.",
    role: "AI Trainee",
    badge: "Innovation"
  }
];

// Internships & Work Experience Data
export const internshipsList = [
  {
    organization: "Qalam Institute, Lahore",
    role: "Web Development Intern",
    duration: "6 Months",
    skills: ["Full-Stack Web Dev", "API Integration", "Debugging", "Responsive Web Design"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    organization: "Shell Shift Co-Workspace (SMC-Pvt.) Ltd., Lahore",
    role: "Full-Stack Web Development Trainee",
    duration: "3 Months",
    skills: ["Frontend & Backend Dev", "REST APIs", "Git Version Control", "Live Projects"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"]
  },
  {
    organization: "Seebiz, Lahore",
    role: "Full-Stack Web Development Intern",
    duration: "3 Months",
    skills: ["MERN Stack", "RESTful APIs", "State Management", "API Testing"],
    tech: ["React.js", "JavaScript", "Node.js", "Postman", "CSS3"]
  },
  {
    organization: "BitDegree Online Platform",
    role: "WordPress Development Trainee",
    duration: "2024 Certification",
    skills: ["WordPress Development", "Elementor Page Builder", "WooCommerce", "Webpage Design & Plugins"],
    tech: ["WordPress", "Elementor", "WooCommerce", "PHP & CSS"]
  },
  {
    organization: "Hi Skills, Lower Mall Road, Lahore",
    role: "Digital Marketing Trainee",
    duration: "3 Months",
    skills: ["Social Media Marketing", "Meta Ads", "Email Marketing", "Affiliate Marketing"],
    tech: ["Meta Ads Manager", "Canva", "Email Automation"]
  },
  {
    organization: "Hi Skills, Lower Mall Road, Lahore",
    role: "Digital Literacy Trainee",
    duration: "3 Months",
    skills: ["Digital Productivity", "Document Design", "Office Automation"],
    tech: ["MS Word", "MS Excel", "MS PowerPoint", "Outlook"]
  },
  {
    organization: "PFTP Government-Funded Online Program",
    role: "Artificial Intelligence with Python Trainee",
    duration: "3 Months",
    skills: ["Python Programming", "AI Fundamentals", "Machine Learning Concepts"],
    tech: ["Python", "AI Tools", "Jupyter"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex programming problems into modular, efficient code." },
  { name: "Communication", icon: "💬", desc: "Clear verbal and written interaction with clients, seniors, and team members." },
  { name: "Teamwork & Collaboration", icon: "🤝", desc: "Working seamlessly in multi-disciplinary teams to deliver software on schedule." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly mastering new JavaScript frameworks, libraries, and AI development tools." },
  { name: "Time Management", icon: "⏰", desc: "Balancing BS Computer Science studies with professional internship projects." },
  { name: "Attention to Detail", icon: "🔍", desc: "Ensuring pixel-perfect UI layouts, clean code syntax, and thorough API testing." },
  { name: "Self-Learning", icon: "📚", desc: "Constantly upgrading technical skill sets through online resources and building side projects." },
  { name: "Presentation Skills", icon: "🎤", desc: "Demonstrating web prototypes and explaining technical concepts with clarity." }
];

export const projects = [
  {
    id: "document-hub",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Document & Image Processing Hub",
    description:
      "A full-stack web application allowing users to convert files across multiple formats (PDF, Word, PPT) and compress or enhance images. Engineered with a secure Node.js/Express API to process high-volume file uploads efficiently, featuring a dynamic React frontend with real-time conversion progress indicators.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "File Uploads",
    ],
    links: {
      github: "https://github.com/aliraza9210",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "ai-skincare",
    number: "02",
    badge: "✨ AI Powered",
    title: "AI Skincare Analysis App",
    description:
      "An AI-powered application that analyzes uploaded facial images to provide personalized skincare diagnostics and treatment recommendations. Integrated third-party computer vision APIs with a secure Node.js backend and a user-centric React interface to visualize skin metrics in real-time.",
    techTags: ["React.js", "Node.js", "Express.js", "AI Vision API", "MongoDB"],
    links: {
      github: "https://github.com/aliraza9210",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "ai-virality",
    number: "03",
    badge: "🧠 AI Analytics",
    title: "AI Content Virality Analyzer",
    description:
      "An AI-powered platform that predicts the virality potential of social media content across Instagram, TikTok, X, LinkedIn, and Facebook. Uses NLP models to analyze hook strength, sentiment, emotional impact, and keywords, presenting real-time virality scores and optimization suggestions in an interactive React dashboard.",
    techTags: ["React.js", "Node.js", "Express.js", "AI/NLP API", "Tailwind CSS"],
    links: {
      github: "https://github.com/aliraza9210",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "frontend-engineering",
    number: "04",
    badge: "🎨 UI Clone",
    title: "Front-End Engineering (FickleFlight & UltraEdit)",
    description:
      "Translated complex Figma prototypes into pixel-perfect, fully responsive React interfaces for the FickleFlight flight booking platform and built a high-fidelity clone of the UltraEdit landing page using modern CSS layouts and performance optimization techniques.",
    techTags: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Figma to Code"],
    links: {
      github: "https://github.com/aliraza9210",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      id: "cert-wordpress-bitdegree",
      name: "Learn WordPress from Scratch",
      issuer: "BitDegree Online Platform",
      date: "February 29, 2024",
      icon: "🌐",
      file: "/certificates/wordpress-bitdegree-cert.pdf",
      image: "/certificates/wordpress-bitdegree-cert.jpg"
    },
    {
      id: "cert-js-specialist",
      name: "IT Specialist — JavaScript",
      issuer: "Certiport & Pearson VUE",
      date: "September 2, 2025",
      icon: "📜",
      file: "/certificates/javascript-specialist-cert.pdf",
      image: "/certificates/javascript-specialist-cert.jpg"
    },
    {
      id: "cert-fullstack",
      name: "Full Stack Web Development",
      issuer: "ShellShift Co-Workspace, Lahore",
      date: "2024",
      icon: "💻",
      file: "/certificates/javascript-specialist-cert.pdf",
      image: "/certificates/javascript-specialist-cert.jpg"
    },
    {
      id: "cert-digital-marketing",
      name: "3 Months Training in Digital Marketing",
      issuer: "Hi Skills Institute of Digital Trainings",
      date: "May 2024 – August 2024",
      icon: "📈",
      file: "/certificates/digital-marketing-cert.pdf",
      image: "/certificates/digital-marketing-cert.jpg"
    },
    {
      id: "cert-digital-literacy",
      name: "Digital Literacy Certification",
      issuer: "Hi Skills Institute of Digital Trainings",
      date: "May 24, 2024",
      icon: "🎓",
      file: "/certificates/digital-literacy-cert.pdf",
      image: "/certificates/digital-literacy-cert.jpg"
    },
    {
      id: "cert-ai-python",
      name: "Artificial Intelligence with Python",
      issuer: "PFTP Government Certification Program",
      date: "April 11, 2025",
      icon: "🤖",
      file: "/certificates/ai-python-cert.pdf",
      image: "/certificates/ai-python-cert.jpg"
    }
  ],
  viewAllUrl: "https://github.com/aliraza9210",
};

export const education = {
  degree: "BS in Computer Science",
  institution: "University of the Punjab (Affiliated Program)",
  cgpa: "6th Semester",
  graduation: "2027",
  twelfth: "ICS Physics — Unique College for Boys, Lahore (2021–2023)",
  tenth: "Matriculation / Basic Education",
};

export const footerContent = {
  taglines: [
    "Full Stack & MERN Stack Web Developer",
    "React.js · Node.js · Express · MongoDB · WordPress",
    "Building Fast, Responsive Web Solutions",
  ],
  credential: "BS Computer Science · Punjab University",
  copyright: `© ${new Date().getFullYear()} Muhammad Ali | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4enguxo",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_hpyzu7w",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "7GBihAoSQbGjC9mEF",
};
