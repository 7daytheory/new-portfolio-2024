//Project Images
import hangYourBannerImage from './assets/projects/hangyourbanner.png';
import articleSummarizerImage from './assets/projects/article-summarizer.png';
import kingsImage from './assets/projects/kings.png';
import ticTacToeImage from './assets/projects/tictactoe.png';
import quizImage from './assets/projects/quiz.png';
import simonImage from './assets/projects/simon.png';

//Project Logos
import hangYourBannerLogo from './assets/projects/hangyourbanner-logo.svg';
// import articleSummarizerLogo from './assets/projects/article-summarizer-logo.png';
import kingsLogo from './assets/projects/kings-logo.png';
// import ticTacToeLogo from './assets/projects/tictactoe-logo.png';
// import quizLogo from './assets/projects/quiz-logo.png';
import simonLogo from './assets/projects/simon-logo.png';

const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "ShipEarly",
      iconBg: "#ff6347",
      date: "Aug 2023 – 2024 (9-month contract)",
      tasks: [
        "Joined a smaller company on a contract to help them try to create a more efficient environment",
        "Worked on their front-end and back-end using Cake PHP to develop a sales system that was integrated with salesforce",
        "Worked with Git, integrated it with Trello and then requested and did code reviews",
        "Had to learn their entire codebase on my own and explain it t0 a junior deveooper while doing it"
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
  projects: [
    {
      projectName: "Hang Your Banner",
      projectDesc: "Create your own championship banners for teams that don't have real ones",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "http://www.hangyourbanner.com",
      projectImage: hangYourBannerImage,
      projectLogo: hangYourBannerLogo,
      projectBgColor: null,
    },
    {
      projectName: "AI Article Summarizer",
      projectDesc: "Put the URL of an article and it will summarize the content",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "summarizer/index.html",
      projectImage: articleSummarizerImage,
      projectLogo: null,
      projectBgColor: null,
    },
	  {
      projectName: "Kings",
      projectDesc: "The digital version of the (commonly drinking) game Kings, incase you forget cards",
      projectType: "Javascript, JQuery, HTML, CSS3",
      projectLink: "kings/index.html",
      projectImage: kingsImage,
      projectLogo: kingsLogo,
      projectBgColor: null,
    },
    {
      projectName: "Xs and Os",
      projectDesc: "Classic game Xs and Os - 2 player (Eventually on different computers)",
      projectType: "Javascript, HTML, CSS3, localstorage",
      projectLink: "tictactoe/index.html",
      projectImage: ticTacToeImage,
      projectLogo: null,
      projectBgColor: null,
    },
    {
      projectName: "Sports Quiz",
      projectDesc: "Quiz game that uses an API to fetch questions and keeps score",
      projectType: "Javascript, HTML, CSS3, localstorage",
      projectLink: "quiz/index.html",
      projectImage: quizImage,
      projectLogo: null,
      projectBgColor: null,
    },
    {
      projectName: "Simon Game",
      projectDesc: "Remember the color pattern and repeat it by pressing the colored buttons",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "simon/index.html",
      projectImage: simonImage,
      projectLogo: simonLogo,
      projectBgColor: null,
    },
  ]
};

export {
    experiences,
    allProjects
};
