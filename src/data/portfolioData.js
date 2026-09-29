/**
 * SHUBHAM VERMA — PORTFOLIO DATA
 * ------------------------------------------------------------
 * Everything personal on this site is defined here so it can be
 * updated in one place. This file is the single source of truth
 * for all content rendered across the portfolio.
 */

export const personal = {
  name: 'SHUBHAM VERMA',
  firstName: 'SHUBHAM',
  lastName: 'VERMA',
  displayName: 'Shubham Verma',
  shortMark: 'SV',
  roles: ['AI/ML STUDENT', 'DEVELOPER', 'BUILDER', 'EXPERIMENTER'],
  heroIntro:
    "Curious AI/ML student, full-stack learner, and builder — I love exploring new technologies and turning ideas into real AI and software projects.",
  heroStatement: 'Learning, building, and experimenting at the intersection of AI, software, and the web.',
  tagline: 'Still learning. Still building. Still becoming.',
  photo: '/shubham-photo.jpg',
  photoAlt: 'Shubham Verma — AI/ML student and developer',
  photoPosition: '50% 15%',
  email: 'shubhamv0437@gmail.com',
  phoneIndia: '+91 7250834662',
  phoneNepal: '+977 9842644498',
  location: 'Trichy, Tamil Nadu, India',
  github: 'https://github.com/Shubham-0402',
  linkedin: 'https://www.linkedin.com/in/shubhamverma-aiml',
  instagram: 'https://www.instagram.com/_shubham_verma_4/',
  facebook: 'https://www.facebook.com/profile.php?id=100041730580451',
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'contact', label: 'Contact' },
]

/* Moving display-board text. `tone` maps to a palette color. */
export const marquee = {
  words: [
    { text: 'Machine Learning', tone: 'violet' },
    { text: 'Full-Stack Development', tone: 'cyan' },
    { text: 'React', tone: 'blue' },
    { text: 'AI APIs', tone: 'amber' },
    { text: 'Java', tone: 'white' },
  ],
}

export const about = {
  eyebrow: '01 · About',
  heading: 'Driven by curiosity. Focused on building.',
  accent: "I explore new technologies restlessly, build real projects relentlessly, and add a little creativity to everything I make.",
  paragraphs: [
    "I'm Shubham Verma, a student who loves to engage with machines, explore new technologies, and stays enthusiastic about learning and developing AI.",
    'Curiosity drives everything I do. I learn continuously — watching how tools work, experimenting with what is new — and I build real-world software projects to turn that learning into something useful. I like adding a touch of creativity to every project I make.',
    'This portfolio is my home base — my journey as an AI/ML student, developer, and builder, and the work I am still exploring.',
  ],
  highlights: [
    { label: 'Primary Focus', value: 'AI / ML & Full-Stack Development' },
    { label: 'Current Phase', value: 'Learning & Building' },
    { label: 'Languages', value: 'Nepali · Hindi · English · Bhojpuri · Maithili' },
    { label: 'Professional Direction', value: 'AI/ML Engineer · Full-Stack Developer' },
  ],
}

export const journey = {
  eyebrow: '02 · Journey',
  heading: 'A path built through continuous progress.',
  intro:
    'Not a straight line — a loop. Each stage feeds the next, and the cycle keeps repeating.',
  stages: [
    {
      number: '01',
      arc: 'CURIOUS',
      title: 'Where it began',
      text: 'It started with one question: how does a machine actually think? Curiosity about what happens inside a computer when code runs pulled me in — and kept me there.',
    },
    {
      number: '02',
      arc: 'LEARNING',
      title: 'Foundations',
      text: 'Building core programming logic and computational thinking with C, C++, Python, and Java — the building blocks of everything that followed.',
    },
    {
      number: '03',
      arc: 'BUILDING',
      title: 'First creations',
      text: 'Moving from theory to output — small scripts, web pages, and interfaces that made ideas tangible and gave me confidence that I could build.',
    },
    {
      number: '04',
      arc: 'EXPERIMENTING',
      title: 'AI & computer vision',
      text: 'Exploring machine learning concepts, AI APIs, and real-time vision pipelines — teaching cameras and models to understand what they see.',
    },
    {
      number: '05',
      arc: 'BREAKING',
      title: 'Learning through failure',
      text: 'Deliberately pushing code past its limits. Breaking systems on purpose reveals how they really work — the failures teach more than the successes.',
    },
    {
      number: '06',
      arc: 'FIXING',
      title: 'Debugging & iteration',
      text: 'Reading tracebacks, analyzing logs, and refining user experience — turning broken code into working software, one careful fix at a time.',
    },
    {
      number: '07',
      arc: 'UNDERSTANDING',
      title: 'Connecting the dots',
      text: 'Seeing how ML models, full-stack systems, and user-facing products fit together — and understanding what it takes to ship something real.',
    },
    {
      number: '08',
      arc: 'BUILDING AGAIN',
      title: 'Applied projects',
      text: 'Attendance systems, accessibility tools, and this portfolio — every project pushes the loop forward. Still learning. Still building.',
    },
  ],
}

export const skills = {
  eyebrow: '03 · Skills',
  heading: 'A modern toolkit, shaped by active projects.',
  intro:
    'The languages, frameworks, and tools I use while learning and building — kept honest, no fake percentages.',
  categories: [
    {
      index: 'A',
      name: 'Programming',
      accent: 'cyan',
      items: ['Python', 'C', 'C++', 'Java', 'JavaScript'],
    },
    {
      index: 'B',
      name: 'Web',
      accent: 'blue',
      items: ['HTML', 'CSS', 'React', 'Flask'],
    },
    {
      index: 'C',
      name: 'Database',
      accent: 'violet',
      items: ['SQL'],
    },
    {
      index: 'D',
      name: 'Tools / Version Control',
      accent: 'amber',
      items: ['Git', 'GitHub'],
    },
  ],
  focusLabel: 'Future direction',
  focusAreas: [
    'Deep Learning',
    'Machine Learning & proper prompting',
    'Full-Stack Development',
    'Data Science',
    'More AI/ML development',
  ],
}

export const projects = {
  eyebrow: '04 · Projects',
  heading: 'Selected work & applications.',
  lede:
    'Things I have actually built — real, working projects that turn ideas into code.',
  note: 'Real projects built to solve real problems — every repository is open on GitHub.',
  items: [
    {
      number: '01',
      featured: true,
      title: 'Smart Face Recognition Attendance System',
      category: 'AI / Computer Vision',
      summary:
        'A face-recognition based attendance system designed to recognize multiple faces at once and reduce the time and manual effort required for classroom attendance.',
      built:
        'An end-to-end face recognition pipeline built with Flask, OpenCV, and machine learning libraries to read camera input and recognize faces against a stored dataset.',
      does:
        'Helps prevent proxy attendance — the student must actually be physically present for their face to be recognized. A possible real-world extension is CCTV integration, where classroom cameras mark attendance automatically.',
      how:
        'Camera frames are processed for face detection and recognition using the dataset. Recognition depends on sufficiently good-quality CCTV/camera input for reliable results.',
      technologies: ['Flask', 'OpenCV', 'NumPy', 'Scikit-learn', 'MediaPipe', 'Pandas'],
      visual: 'vision',
      githubLink: 'https://github.com/Shubham-0402/Smart-Face-Recognition-System',
      demoLink: '',
    },
    {
      number: '02',
      featured: false,
      title: 'SRM Lab Assistance / Chemistry Lab Assistant',
      category: 'Web Application / Study Tool',
      summary:
        'A web platform created to assist students with first-year chemistry laboratory experiments at SRM Trichy.',
      built:
        'A Flask-based platform that hosts experiment materials, handwritten laboratory notes, experiment PDFs, notebook information, and calculation techniques.',
      does:
        'Students enter the values collected during an experiment, and the system performs the required calculations and generates the output.',
      how:
        'The generated result can be downloaded as a PDF containing the student\'s name.',
      technologies: ['Flask', 'Flask-CORS', 'Matplotlib', 'ReportLab'],
      visual: 'lab',
      githubLink: 'https://github.com/Shubham-0402/SRM_LAB-Assistance',
      demoLink: '',
    },
    {
      number: '03',
      featured: false,
      title: 'Sign Language to Text and Speech',
      category: 'AI Accessibility Project',
      summary:
        'An AI-based system that uses a pretrained model to translate sign language into text and speech.',
      built:
        'A camera-based pipeline with a pretrained model that processes a performed sign and converts it into text, speech, or both.',
      does:
        'Designed to give non-speaking people another way to communicate in banks, offices, hospitals, and other service environments.',
      how:
        'The user opens the camera and performs a sign; the model processes the input and returns text and/or speech. The user needs to know the relevant sign language for the system to interpret the signs.',
      technologies: [
        'Flask',
        'PyTorch',
        'Transformers',
        'timm',
        'MediaPipe',
        'tqdm',
        'Scikit-learn',
        'XGBoost',
        'Pandas',
        'OpenCV',
        'NumPy',
      ],
      visual: 'sign',
      githubLink: 'https://github.com/Shubham-0402/sign-language-to-text-and-speech',
      demoLink: '',
    },
    {
      number: '04',
      featured: false,
      title: 'Personal Portfolio',
      category: 'Web Experience',
      summary:
        'My personal portfolio website, built to present my journey as an AI/ML student, developer, learner, and builder.',
      built:
        'A React and Vite site driven entirely by one central data file, bringing together my projects, skills, journey, experiments, education, and contact information.',
      does:
        'Showcases my work, learning path, and direction in one place. Currently building — it evolves as I do.',
      how:
        'A component-based React structure reads all content from this data file; CSS powers the atmosphere, marquee, and scroll reveals.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      visual: 'web',
      githubLink: 'https://github.com/Shubham-0402/ShubhamVerma_Portfolio',
      demoLink: '',
    },
  ],
}

export const experiments = {
  eyebrow: '05 · Experiments',
  heading: 'The playground & lab.',
  intro:
    'Not every build is a finished project. These are active explorations, prototypes, and tech spikes — the work-in-progress side of learning.',
  items: [
    {
      index: 'A',
      category: 'Vision & Gesture Lab',
      title: 'Computer vision & tracking experiments',
      text: 'Testing OpenCV filters, bounding-box tracking, and real-time webcam frame-processing pipelines.',
      tag: 'In progress',
    },
    {
      index: 'B',
      category: 'UI & Motion Lab',
      title: 'Interface & interaction sketches',
      text: 'Exploring editorial layouts, subtle motion, responsive systems, and accessible micro-interactions.',
      tag: 'In progress',
    },
    {
      index: 'C',
      category: 'AI & API Integrations',
      title: 'Model wrappers & endpoint parsing',
      text: 'Experimenting with AI API workflows, prompt pipelines, and dynamic data parsing.',
      tag: 'In progress',
    },
    {
      index: 'D',
      category: 'Full-Stack Sketches',
      title: 'Backend logic & database prototypes',
      text: 'Building lightweight API endpoints, auth sketches, and data models to understand full-stack architecture.',
      tag: 'In progress',
    },
  ],
}

export const education = {
  eyebrow: '06 · Education',
  heading: 'Academic foundation & continuous learning.',
  institution: 'SRM Institute of Science and Technology (SRMIST), Tiruchirappalli',
  degree:
    'B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning',
  field: 'Specialization in Artificial Intelligence and Machine Learning',
  status: 'Expected completion 2029',
  coursework: [],
}

export const development = {
  eyebrow: '07 · Development',
  heading: 'Explore my code & repositories.',
  text: 'I build in public — projects, experiments, and source code live on GitHub. Explore the repositories and see how everything here is made.',
  githubUrl: 'https://github.com/Shubham-0402',
  linkedinUrl: 'https://www.linkedin.com/in/shubhamverma-aiml',
}

export const contact = {
  eyebrow: '08 · Contact',
  heading: "Let's build something.",
  text: 'Whether you want to discuss AI/ML, software development, a project idea, or collaboration — my inbox is open.',
  closingTitle: 'Still learning.',
  closingLine: 'This portfolio is a work in progress — just like I am.',
}

export function isPlaceholder(value) {
  if (!value) return true
  return /YOUR_|_HERE/.test(value)
}