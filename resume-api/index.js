const express = require('express');

const app = express();
const port = 3000;

const resume = {
  name: "Matthew Lowe",
  title: "Software/Web Developer",
  contact: {
    phone: "(+1) 416 660 7973",
    email: "Matthewjlowe11@gmail.com",
    github: "https://github.com/7daytheory",
    portfolio: "https://www.matthewjlowe.com"
  },
  overview: "Over 10 years of experience working on front and back end of projects. I am well versed in Git and doing code reviews, PRs, and more on GitHub. I have worked with JavaScript, PHP, MySQL, C++, SQL, APIs, and more. Worked on frameworks such as React & Angular as well as Laravel & Cake. I am able to work, learn, teach and articulate ideas well with others.",
  experiences: [
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
  skills: [
    "Outgoing", 
    "Self-Driven", 
    "Accountable", 
    "Independent", 
    "Proactively identify new tasks", 
    "Collaborating with colleagues", 
    "Always learning"
  ],
  references: "George Nichols: Quillsoft CTO, Chad Stewart: Manager Quillsoft - Available upon request"
};

//Full resume
app.get('/resume', (req, res) => {
  res.json(resume);
});

// Overview section
app.get('/resume/overview', (req, res) => {
  res.json(resume.overview);
});

// Experiences section
app.get('/resume/experiences', (req, res) => {
  res.json(resume.experiences);
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
