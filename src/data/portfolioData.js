/**
 * SHUBHAM VERMA — PORTFOLIO DATA
 * ------------------------------------------------------------
 * Everything personal on this site is defined here so it can be
 * updated in one place. Placeholders use the YOUR_* / *_HERE
 * convention and are rendered visibly as "to edit" chips.
 *
 * Replace:
 *   email       -> real email address
 *   github      -> https://github.com/<username>
 *   linkedin    -> https://www.linkedin.com/in/<username>
 *   location    -> city / country (optional)
 */

export const personal = {
  name: 'SHUBHAM VERMA',
  firstName: 'SHUBHAM',
  lastName: 'VERMA',
  displayName: 'Shubham Verma',
  shortMark: 'SV',
  roles: ['AI/ML STUDENT', 'DEVELOPER', 'BUILDER', 'EXPERIMENTER'],
  heroIntro:
    "I'm an AI/ML student who learns by building — turning ideas into real projects with Python, machine learning, computer vision, and the web.",
  heroStatement: 'Learning, building, and experimenting at the intersection of AI, software, and the web.',
  tagline: 'Still learning. Still building. Still becoming.',
  photo: '/shubham-photo.jpg',
  photoAlt: 'Shubham Verma — AI/ML student and developer',
  photoPosition: '50% 15%',
  email: 'YOUR_EMAIL_HERE',
  phone: 'YOUR_PHONE_HERE',
  github: 'YOUR_GITHUB_URL_HERE',
  linkedin: 'YOUR_LINKEDIN_URL_HERE',
  location: 'YOUR_LOCATION_HERE',
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
    { text: 'AI / ML', tone: 'cyan' },
    { text: 'PYTHON', tone: 'blue' },
    { text: 'MACHINE LEARNING', tone: 'violet' },
    { text: 'JAVA', tone: 'amber' },
    { text: 'WEB DEVELOPMENT', tone: 'blue' },
    { text: 'COMPUTER VISION', tone: 'cyan' },
    { text: 'BUILD', tone: 'amber' },
    { text: 'CREATE', tone: 'cyan' },
    { text: 'EXPERIMENT', tone: 'violet' },
    { text: 'LEARN', tone: 'blue' },
    { text: 'CODE', tone: 'white' },
    { text: 'PROBLEM SOLVING', tone: 'violet' },
    { text: 'FULL-STACK', tone: 'cyan' },
    { text: 'DATA', tone: 'blue' },
    { text: 'SOFTWARE', tone: 'white' },
    { text: 'IDEAS → CODE', tone: 'amber' },
    { text: 'LEARNING → BUILDING', tone: 'cyan' },
  ],
}

export const about = {
  eyebrow: '01 · About',
  heading: 'Driven by curiosity. Focused on building.',
  accent: 'I learn by doing — building, breaking, fixing, and rebuilding until things actually work.',
  paragraphs: [
    'I am an AI/ML student studying machine learning while teaching myself practical software development. My work sits at the intersection of AI, computer vision, and the web — where ideas become applications people can use.',
    'Instead of relying only on theory, I learn through projects: writing code, reading errors, experimenting with models and APIs, and iterating until a solution feels real. Every build teaches me something the textbooks cannot.',
    'This portfolio is my home base — my story, my projects, and the work I am still exploring.',
  ],
  highlights: [
    { label: 'Primary Focus', value: 'AI / ML & Computer Vision' },
    { label: 'Engineering', value: 'Full-Stack Web & Software' },
    { label: 'Methodology', value: 'Project-Based Learning & Prototyping' },
    { label: 'Current Status', value: 'Student & Active Builder' },
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
    'The languages, frameworks, and tools I use while building and experimenting. No fake percentages — competence grows with every line of code written.',
  categories: [
    {
      index: 'A',
      name: 'Programming',
      accent: 'cyan',
      items: ['Python', 'Java', 'C', 'C++'],
    },
    {
      index: 'B',
      name: 'Web Development',
      accent: 'blue',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      index: 'C',
      name: 'AI & Data',
      accent: 'violet',
      items: ['Machine Learning', 'Computer Vision', 'Data Analysis', 'AI APIs'],
    },
    {
      index: 'D',
      name: 'Developer Tools',
      accent: 'amber',
      items: ['Git', 'GitHub', 'VS Code'],
    },
  ],
  focusLabel: 'Currently focusing on',
  focusAreas: [
    'Building end-to-end full-stack web applications',
    'Integrating computer vision & ML models into web interfaces',
    'Clean code architecture & accessible component design',
    'Version control workflows & continuous self-learning',
  ],
}

export const projects = {
  eyebrow: '04 · Projects',
  heading: 'Selected work & applications.',
  lede:
    'The things I have actually built. Each one is a real, functioning project — a lesson in what happens when ideas meet code.',
  note: 'Replace the link placeholders with your live repository and demo URLs in src/data/portfolioData.js.',
  items: [
    {
      number: '01',
      featured: true,
      title: 'AI Face Recognition Attendance System',
      category: 'AI / Computer Vision',
      summary:
        'An intelligent computer vision system that detects and recognizes faces from a live video stream to automate attendance tracking.',
      built:
        'A video-capture pipeline that processes camera frames to detect faces, recognize them against a student dataset, and record presence automatically.',
      does:
        'Replaces manual attendance marking — when a person steps in front of the camera, the system matches their face and logs them as present.',
      how:
        'Camera frames are analyzed for face detection; detected regions are compared with the stored dataset; a successful match registers an attendance entry.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
      visual: 'vision',
      githubLink: 'YOUR_GITHUB_URL_HERE',
      demoLink: 'YOUR_LIVE_DEMO_HERE',
    },
    {
      number: '02',
      featured: false,
      title: 'Chemistry Lab Assistant',
      category: 'Web Application / Study Tool',
      summary:
        'An interactive web tool that supports chemistry lab work — organizing reactions, safety guidelines, element properties, and formula references.',
      built:
        "A structured reference web app with an interactive UI and organized, searchable chemistry data.",
      does:
        'Gives a chemistry student quick access to reactions, safety notes, element details, and formulas while working in the lab.',
      how:
        'A React front end organizes chemistry content into data modules with search and filter, so the right reference is always a glance away.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      visual: 'lab',
      githubLink: 'YOUR_GITHUB_URL_HERE',
      demoLink: 'YOUR_LIVE_DEMO_HERE',
    },
    {
      number: '03',
      featured: false,
      title: 'Sign Language to Text and Speech',
      category: 'AI Accessibility Project',
      summary:
        'An accessibility-focused project that translates sign language gestures into real-time text and speech using computer vision and machine learning.',
      built:
        'A hand-tracking and classification pipeline that maps captured gestures to text, paired with a speech-synthesis output.',
      does:
        'Lets a signer communicate live — gestures are seen by the camera, converted to words on screen, and spoken aloud.',
      how:
        'Webcam frames are analyzed for hand positions; a model classifies each gesture; the mapped text is displayed and read through speech synthesis.',
      technologies: ['Python', 'Computer Vision', 'AI APIs', 'Speech Synthesis'],
      visual: 'sign',
      githubLink: 'YOUR_GITHUB_URL_HERE',
      demoLink: 'YOUR_LIVE_DEMO_HERE',
    },
    {
      number: '04',
      featured: false,
      title: 'Personal Portfolio',
      category: 'Web Experience / Storytelling',
      summary:
        'This website — a clean, editorial web experience presenting my background, skills, journey, and projects with refined typography and smooth motion.',
      built:
        'A responsive single-page site built with React and Vite, driven entirely by one central data file.',
      does:
        'Introduces me, my work, and my direction as a developer in one polished, memorable experience.',
      how:
        'A component-based React structure reads all content from src/data/portfolioData.js; CSS powers the atmosphere, marquee, and scroll reveals.',
      technologies: ['React', 'JavaScript', 'Vite', 'CSS3'],
      visual: 'web',
      githubLink: 'YOUR_GITHUB_URL_HERE',
      demoLink: '#home',
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
  institution: 'YOUR_COLLEGE_NAME',
  degree: 'YOUR_DEGREE_DETAILS',
  field: 'Artificial Intelligence, Machine Learning & Software Development',
  status: 'Current Student',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java / C++)',
    'Machine Learning & Data Analysis',
    'Computer Vision Fundamentals',
    'Web Architecture & Front-End Design',
    'Database Systems & Software Logic',
  ],
}

export const development = {
  eyebrow: '07 · Development',
  heading: 'Explore my code & repositories.',
  text: 'I build in public — projects, experiments, and source code live on GitHub. Inspect my commit history and see how everything here is made.',
  githubUrl: 'YOUR_GITHUB_URL_HERE',
  linkedinUrl: 'YOUR_LINKEDIN_URL_HERE',
}

export const contact = {
  eyebrow: '08 · Contact',
  heading: "Let's build something.",
  text: 'Whether you want to discuss AI/ML, web development, a project idea, or collaboration — my inbox is open.',
  closingTitle: 'Still building.',
  closingLine: 'This portfolio is a work in progress — just like I am.',
}

export function isPlaceholder(value) {
  if (!value) return true
  return /YOUR_|_HERE/.test(value)
}