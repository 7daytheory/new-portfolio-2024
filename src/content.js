const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "ShipEarly",
      iconBg: "#ff6347",
      date: "Aug 2023 – 2024 (9-month contract)",
      tasks: [
        "Joined a small startup on a contract to help them grow",
        "Worked on their back end using Cake 2 PHP to develop a sales system that was integrated with salesforce",
        "Worked with Git, did code reviews and integrated it with Trello",
        "Communicated the need for regular meetings, which the owner would not do and caused me to leave after contract ended"
      ],
    },
    {
      title: "Developer",
      company_name: "Quillsoft",
      iconBg: "#46b1c9",
      date: "2017 - 2023",
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
      iconBg: "#9ccd5d",
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
      iconBg: "#5eb54a",
      date: "2013",
      tasks: [
        "Created and integrated a license management system",
        "Developed encryption for user data security",
        "Developed a customized CMS system",
        "Wireframed, designed, and coded company websites"
      ],
    },
  ];

//Projects Section
const allProjects = {
  display: true,
  projects: [
    {
      projectName: "Hang Your Banner",
      projectDesc: "A tool that allows you to create your own championship banners for teams that don't have real ones",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "http://www.hangyourbanner.com",
      projectImage: null
    },
    {
      projectName: "AI Article Summarizer",
      projectDesc: "Put the URL of an article and it will summarize the content",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "summarizer/index.html",
      projectImage: null
    },
	  {
      projectName: "Kings",
      projectDesc: "The digital version of the (commonly drinking) game Kings, incase you forget cards",
      projectType: "Javascript, JQuery, HTML, CSS3",
      projectLink: "kings/index.html",
      projectImage: null
    },
    {
      projectName: "Xs and Os",
      projectDesc: "Classic game Xs and Os - 2 player (Eventually on different computers)",
      projectType: "Javascript, HTML, CSS3, localstorage",
      projectLink: "tictactoe/index.html",
      projectImage: null
    },
    {
      projectName: "Quiz Game",
      projectDesc: "Quiz game that uses an API to fetch questions and keeps score",
      projectType: "Javascript, HTML, CSS3, localstorage",
      projectLink: "quiz/index.html",
      projectImage: null
    },
    {
      projectName: "Simon(Game)",
      projectDesc: "Remember the color pattern and repeat it by pressing the colored buttons",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "simon/index.html",
      projectImage: null
    },
  ]
};

export {
    experiences,
    allProjects
};
