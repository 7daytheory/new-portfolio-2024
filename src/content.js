//Project Images
import hangYourBannerImage from './assets/projects/hangyourbanner.png';
import articleSummarizerImage from './assets/projects/article-summarizer.png';
import kingsImage from './assets/projects/kings.png';
import ticTacToeImage from './assets/projects/tictactoe.png';
import quizImage from './assets/projects/quiz.png';
import simonImage from './assets/projects/simon.png';
import pacmanImage from './assets/projects/pacman.png';

//Project Logos
import hangYourBannerLogo from './assets/projects/hangyourbanner-logo.svg';
import kingsLogo from './assets/projects/kings-logo.png';
import simonLogo from './assets/projects/simon-logo.png';
import pacmanLogo from './assets/projects/pacman-logo.png';

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "ShipEarly",
    iconBg: "#ff6347",
    date: "September 2023 – 2024 (contract)",
    tasks: [
      "Small company contract role to work on the front and back end of their B2B application",
      "Developed a sales system integrated with Salesforce using Cake PHP and Javascript for both front-end and back-end",
      "Collaborated via Git, integrated it with Trello, and participated in and ran code reviews",
      "Independently learned the codebase and taught it to a junior developer while doing it",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Quillsoft",
    iconBg: "#46b1c9",
    date: "2017 - 2023",
    tasks: [
      "Created and grew the CMS to ensure our tech support had all the data required to help users calling for support",
      "Built a Progressive Web Application (PWA) for the main desktop application used in schools",
      "Developed a license management system that is currently in use by every school district that use our apps",
      "Developed the API from scratch that was used to call our backend from the apps",
      "Implemented modern encryption methods for enhanced security",
    ],
  },
  {
    title: "Web Developer and Designer",
    company_name: "Strategic Transitions Inc",
    date: "2014 – 2017",
    iconBg: "#9ccd5d",
    tasks: [
      "Developed and integrated a license management system",
      "Implemented encryption techniques to secure user data",
      "Created a custom Content Management System (CMS)",
      "Designed and developed company websites, including wireframing and coding",
    ],
  },
  {
    title: "BPMS Administrator",
    company_name: "NeXsys",
    iconBg: "#5eb54a",
    date: "2013",
    tasks: [
      "Created Business Management Systems for large companies such as Wescam",
      "Visited companies that used BMS Systems to collect data and perform tests to fix issues",
      "Designed web components for the senior developer",
    ],
  },
];

//Projects Section
const allProjects = {
  projects: [
    {
      projectName: "Hang Your Banner",
      projectDesc: "Create your own championship banners for teams that don't have real ones.",
      projectType: "React, JavaScript, HTML, CSS",
      projectLink: "http://www.hangyourbanner.com",
      projectImage: hangYourBannerImage,
      projectLogo: hangYourBannerLogo,
      projectBgColor: null,
    },
    {
      projectName: "AI Article Summarizer",
      projectDesc: "Enter the URL of an article to get a summarized version of the content.",
      projectType: "React, JavaScript, HTML, CSS",
      projectLink: "summarizer/index.html",
      projectImage: articleSummarizerImage,
      projectLogo: null,
      projectBgColor: null,
    },
    {
      projectName: "Kings",
      projectDesc: "A digital version of the popular (drinking) game Kings, perfect for times when you don't have a deck of cards.",
      projectType: "JavaScript, jQuery, HTML, CSS3",
      projectLink: "kings/index.html",
      projectImage: kingsImage,
      projectLogo: kingsLogo,
      projectBgColor: null,
    },
    {
      projectName: "Xs and Os",
      projectDesc: "Classic two-player Tic Tac Toe game, with plans for online multiplayer.",
      projectType: "JavaScript, HTML, CSS3, LocalStorage",
      projectLink: "tictactoe/index.html",
      projectImage: ticTacToeImage,
      projectLogo: null,
      projectBgColor: null,
    },
    {
      projectName: "Sports Quiz",
      projectDesc: "Trivia game using an API to fetch questions and keep score.",
      projectType: "JavaScript, HTML, CSS3, LocalStorage",
      projectLink: "quiz/index.html",
      projectImage: quizImage,
      projectLogo: null,
      projectBgColor: null,
    },
    {
      projectName: "Simon Game",
      projectDesc: "Follow the color sequence and repeat it by pressing the colored buttons.",
      projectType: "React, JavaScript, HTML, CSS",
      projectLink: "simon/index.html",
      projectImage: simonImage,
      projectLogo: simonLogo,
      projectBgColor: null,
    },
    {
      projectName: "Pacman",
      projectDesc: "Re-created the class game Pacman using Javascript with HTML5 Canvas",
      projectType: "JavaScript, HTML, CSS",
      projectLink: "pacman/index.html",
      projectImage: pacmanImage,
      projectLogo: pacmanLogo,
      projectBgColor: null,
    },
  ],
};

export { 
  experiences,
  allProjects 
};
