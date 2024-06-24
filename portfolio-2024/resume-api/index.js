const express = require('express');

const app = express();
const port = 3000;

const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "ShipEarly",
      date: "Aug 2023 – 2024 (9-month contract)",
      tasks: [
        "Joined a small startup on a contract to help them grow",
        "Worked on their back end using Cake 2 PHP to develop a sales system that was integrated with salesforce",
        "Worked with Git, did code reviews and integrated it with Trello",
        "Communicated the need for regular meetings, which the owner would not do and caused me to leave after contract ended"
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Lawlabs",
      date: "2021 - 2023",
      tasks: [
        "Worked on their SASS product using Angular",
        "Worked as a team to turn designs into functioning website or SASS functionality",
        "Worked with Git, did code reviews and stand ups every morning",
        "Presented work and ideas to the owner regularly"
      ],
    },
    {
      title: "Developer",
      company_name: "Quillsoft",
      date: "2017 - 2021",
      tasks: [
        "Created and oversaw growth of the CRM system",
        "Built a PWA of the main desktop application for schools",
        "Developed a license management system",
        "Implemented up-to-date encryption methods"
      ],
    },
    {
      title: "Developer",
      company_name: "Strategic Transitions Inc",
      date: "2014 – 2017",
      tasks: [
        "Created and integrated a license management system",
        "Developed encryption for user data security",
        "Developed a customized CMS system",
        "Wireframed, designed, and coded company websites"
      ],
    },
    {
      title: "BPMS Administrator",
      company_name: "NeXsys",
      date: "2013",
      tasks: [
        "Created and integrated a license management system",
        "Developed encryption for user data security",
        "Developed a customized CMS system",
        "Wireframed, designed, and coded company websites"
      ],
    },
  ];
  

  app.get('/resume', (req, res) => {
    res.json({ experiences });
  });
  
  app.listen(port, () => {
    console.log(`Resume API listening at http://localhost:${port}`);
  });