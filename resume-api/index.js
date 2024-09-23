const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const resume = {
  contact: {
    overview: "I have removed personal information from the web version of my resune. If you would like my full resume or contact info I'd be happpy to provide it upon request.",
    name: "Matthew",
    title: "Software/Web Developer",
    phone: "Upon Request",
    email: "Upon Request",
    github: "https://github.com/7daytheory",
    portfolio: "https://www.matthewjlowe.com"
  },
  overview: "I have 10 years of experience working in the industry working as a front-end and back-end developer, as well as database management and hosting. I have worked extensively in Javascript, PHP, MySQL and NoSQL databases, using and creating APIs, and many frameworks including React, Angular, JQuery, CakePHP, and Laravel. including frameworks like React and Angular. I have brought multiple projects from start to deployement stages with version control integrated. I am confident that I can be an asset to any company that requires a developer but I also try to always be learning more.",
  experience: [
    {
      title: "Full Stack Developer",
      company_name: "ShipEarly",
      date: "2023 – 2024 (9-month contract)",
      tasks: [
        "Joined a small startup on a contract to help them grow.",
        "Worked on their back end using Cake 2 PHP to develop a sales system that was integrated with Salesforce.",
        "Worked with Git, did code reviews, and integrated it with Trello.",
        "Communicated the need for regular meetings, but it was not implemented."
      ]
    },
    {
      title: "Developer",
      company_name: "Quillsoft",
      date: "2017 – 2023",
      tasks: [
        "Created and oversaw the growth of the CRM system.",
        "Built a PWA of the main desktop application for schools.",
        "Developed a license management system integrated into all applications.",
        "Implemented up-to-date encryption methods for data security."
      ]
    },
    {
      title: "Developer",
      company_name: "Strategic Transitions Inc",
      date: "2014 – 2017",
      tasks: [
        "Created and integrated a license management system.",
        "Developed encryption for user data security.",
        "Developed a customized CMS system.",
        "Wireframed, designed, and coded all company websites."
      ]
    },
    {
      title: "BPMS Administrator",
      company_name: "NeXsys",
      date: "2013",
      tasks: [
        "Created and integrated a license management system.",
        "Developed encryption for user data security.",
        "Developed a customized CMS system.",
        "Wireframed, designed, and coded all company websites."
      ]
    }
  ],
  education: {
    institution: "Fanshawe College",
    years: "2008-2011",
    degree: "Interactive Media & Development",
    details: [
      "The program at Fanshawe had 2 years of general graphic design, video editing, game design, and mainly web/app development courses.",
      "In the 3rd year, I chose a specialty in web/app development but still have knowledge in the other areas that has been useful.",
      "Did a project with Strategic Transitions Inc my final year in the program and was the only person hired; I was employed before I finished the program.",
      "I also completed a year in a graphic design program but switched to web/app development as it aligned more with my career goals."
    ]
  },
  skills: [
    "Outgoing", 
    "Self-Driven", 
    "Accountable", 
    "Independent", 
    "Proactively identify new tasks", 
    "Collaborating with colleagues", 
    "Always learning"
  ],
  references: "George xxxxxx: Company CTO, Chad xxxxxxx: Manager - Available upon request"
};

// Full resume
app.get('/resume', (req, res) => {
  res.json(resume);
});

// Overview section
app.get('/resume/overview', (req, res) => {
  res.json(resume.overview);
});

// Personal Info section
app.get('/resume/contact', (req, res) => {
  res.json(resume.contact);
});

// Experience section
app.get('/resume/experience', (req, res) => {
  res.json(resume.experience);
});

// Education section
app.get('/resume/education', (req, res) => {
  res.json(resume.education);
});

// Skills section
app.get('/resume/skills', (req, res) => {
  res.json(resume.skills);
});

// References
app.get('/resume/references', (req, res) => {
  res.json(resume.references);
});

app.listen(port, () => {
  console.log(`Resume API listening at http://localhost:${port}`);
});
