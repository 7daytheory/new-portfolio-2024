const express = require('express');
const app = express();
const port = 3000;

const resume = {
    name: "Matthew Lowe",
    title: "Software/Web Developer",
    contact: {
      phone: "+1 416 660 7973",
      email: "Matthewjlowe11@gmail.com",
      github: "https://github.com/7daytheory",
      portfolio: "https://7daytheory.github.io/portfolio-react"
    },
    overview: "Over 10 years of experience working on front and back end of projects. I am well versed in Git and doing code reviews, PRs and more on GitHub. I have worked with JavaScript, PHP, MySQL, C++, SQL, APIs and more. Worked on frameworks such as React & Angular as well as Laravel & Cake. I am able to work, learn, teach and articulate ideas well with others.",
    experience: [
      {
        company: "ShipEarly",
        period: "2023 – 2024 (9-month contract)",
        role: "Full Stack Developer",
        responsibilities: [
          "Joined a small startup on a contract to help them grow",
          "Worked on their back end using Cake 2 PHP to develop a sales system that was integrated with salesforce",
          "Worked with Git, did code reviews and integrated it with Trello",
          "Communicated the need for regular meetings, which were not implemented"
        ]
      },
      {
        company: "Quillsoft",
        period: "2017 - 2023",
        role: "Developer",
        responsibilities: [
          "Created and oversaw growth of the CRM system",
          "Built a PWA of the main desktop application for schools",
          "Developed a license management system",
          "Implemented up-to-date encryption methods"
        ]
      },
      {
        company: "Strategic Transitions Inc",
        period: "2014 – 2017",
        role: "Developer",
        responsibilities: [
          "Created and integrated a license management system",
          "Developed encryption for user data security",
          "Developed a customized CMS system",
          "Wireframed, designed, and coded company websites"
        ]
      },
      {
        company: "NeXsys",
        period: "2013",
        role: "BPMS Administrator",
        responsibilities: [
          "Created and integrated a license management system",
          "Developed encryption for user data security",
          "Developed a customized CMS system",
          "Wireframed, designed, and coded company websites"
        ]
      }
    ],
    skills: [
      "Outgoing", "Self-Driven", "Accountable", "Independent", "Proactively identify new tasks", "Collaborating with colleagues", "Always learning"
    ],
    references: "Available Upon Request"
  };

app.get('/resume', (req, res) => {
  res.json(resume);
});

app.listen(port, () => {
  console.log(`Resume API listening at http://localhost:${port}`);
});