# Shubham Verma — Portfolio

A personal portfolio website for **Shubham Verma**, an AI/ML student and developer, built to showcase my projects, skills, experiments, education, and learning journey.

Built with **React + Vite**.

## ✨ About

This portfolio is designed to present my work and journey as I learn and build in **Artificial Intelligence, Machine Learning, and Web Development**.

The website brings together my:

* 👨‍💻 Projects
* 🧠 Skills
* 🧪 Experiments
* 🎓 Education
* 🚀 Learning journey
* 📬 Contact information
* 🔗 Professional and social profiles

The portfolio is continuously evolving as I learn new technologies and build new projects.

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript**
* **HTML**
* **CSS**
* **ESLint**

## 📁 Project Structure

```text
public/
├── favicon
├── robots.txt
├── sitemap.xml
└── shubham-photo.jpg

src/
├── data/
│   └── portfolioData.js
│
└── components/
    └── one folder per component
```

## 📝 Managing Portfolio Content

All major personal information is centralized in:

```text
src/data/portfolioData.js
```

This includes information such as:

* Name and introduction
* Biography
* Education
* Skills
* Projects
* Experiments
* Journey
* Email
* GitHub
* LinkedIn
* Other profile information

This structure makes it easier to update the portfolio without having to search through multiple components.

## 🖼️ Profile Photograph

The portfolio currently uses:

```text
public/shubham-photo.jpg
```

The photograph's framing can be adjusted through the `photoPosition` value in:

```text
src/data/portfolioData.js
```

For example:

```javascript
photoPosition: '50% 15%'
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shubham-0402/ShubhamVerma_Portfolio.git
```

### 2. Open the project

```bash
cd ShubhamVerma_Portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The local development server will then be available through the URL shown in the terminal.

## 📦 Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## 🌐 Deployment

The portfolio is deployed online and is continuously updated as the project evolves.

Production deployment should use the generated `dist/` directory from:

```bash
npm run build
```

Before deployment, make sure the portfolio URL is correctly configured in:

```text
index.html
public/robots.txt
public/sitemap.xml
```

## 🎯 Project Goals

This project is more than a personal website. It is also a way for me to:

* Practice modern web development
* Learn and improve React
* Experiment with interactive web experiences
* Present my projects professionally
* Document my progress as a developer
* Build a portfolio that evolves alongside my skills

## 🔄 Future Improvements

The portfolio will continue to evolve with new:

* Projects
* Experiments
* Skills
* Animations and interactions
* Personal information
* Development milestones

## 👨‍💻 About Me

I'm **Shubham Verma**, an AI/ML student interested in technology, software development, artificial intelligence, and building things that can solve real-world problems.

I'm continuously learning, experimenting, and turning ideas into projects.

---

⭐ If you find this project interesting, feel free to explore the repository and follow my journey.

**Built with curiosity, code, and continuous learning.**
