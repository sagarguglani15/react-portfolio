// project images
import Attendance from "../../assets/img/projects/attendance.png";
import Breakout from "../../assets/img/projects/breakout.png";
import Ecom from "../../assets/img/projects/ecom.jpg";
import Scribble from "../../assets/img/projects/scribble.png";
import TkGames from "../../assets/img/projects/tkgames.png";
import TSA from "../../assets/img/projects/tsa.png";

//skills
import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import NODE_JS from "../../assets/img/skills/nodejs.svg";
import EXPRESS from "../../assets/img/skills/express.svg";
import GITHUB_PAGES from "../../assets/img/skills/github.svg";
import JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import PYTHON from "../../assets/img/skills/python.svg";
import MYSQL from "../../assets/img/skills/mysql.svg"
import TKINTER from '../../assets/img/skills/tkinter.jpg'
import NLP from '../../assets/img/skills/nlp.PNG'
import PYPLOT from '../../assets/img/skills/matplotlib.svg'

export const projects = [
    {
        date: "23/11/2020",
        text: "Breakout Game",
        img: Breakout,
        desc: "This is a Breakout Game created with pure JS concepts and inheritance",
        features: ["3 levels", "Some bricks with extra fruit points", "Bomb brick!", "Easy-Medium-Hard choice to play"],
        techs: [{
            img: HTML5,
            text: "HTML5"
        },{
            img: CSS3,
            text: "CSS3"
        },{
            img: JAVASCRIPT,
            text: "JAVASCRIPT"
        },{
            img: GITHUB_PAGES,
            text: "GitHub Deployement"
        }],
        links: [{
            url: "https://sagarguglani15.github.io/BreakOut/",
            text: "SEE LIVE"
        },{
            url: "https://github.com/sagarguglani15/sagarguglani15.github.io/tree/master/BreakOut",
            text: "SOURCE CODE"
        }]
    },
    {
        date: "15/10/2020",
        text: "Scribble Game",
        img: Scribble,
        desc: "This is a clone to skribbl.io created with web-sockets and NodeJS",
        features: ["Live drawing board", "Live chatbox", "Any person for a room is selected randomly to draw a word"],
        techs: [{
            img: HTML5,
            text: "HTML5"
        },{
            img: CSS3,
            text: "CSS3"
        },{
            img: NODE_JS,
            text: "NODE_JS"
        },{
            img: EXPRESS,
            text: "EXPRESS"
        }],
        links: [{
            url: "https://www.linkedin.com/feed/update/urn:li:activity:6730011464154841088/",
            text: "WATCH VIDEO"
        },{
            url: "https://github.com/sagarguglani15/Scibble-Game",
            text: "SOURCE CODE"
        }]
    },
    {
        date: "02/10/2020",
        text: "Ecommerce APIs",
        img: Ecom,
        desc: "This is an implementation of REST APIs for an E-commerce website",
        features: ["Mocha Testing", "JWT athentication", "Sequlize ORM with models", "JOI payload validation", "Sentry logs", "Winston logger", "Bcrypt hashing for password storage", "Postman Collection"],
        techs: [{
            img: NODE_JS,
            text: "NODE_JS"
        },{
            img: EXPRESS,
            text: "EXPRESS"
        },{
            img: JAVASCRIPT,
            text: "JAVASCRIPT"
        },{
            img: MYSQL,
            text: "MYSQL"
        }],
        links: [{
            url: "https://www.youtube.com/watch?v=Q04hcd-1kfA&t=1392s",
            text: "WATCH VIDEO"
        },{
            url: "https://github.com/sagarguglani15/E-commerce-API",
            text: "SOURCE CODE"
        }]
    },
    {
        date: "07/08/2020",
        text: "Attendace Automation",
        img: Attendance,
        desc: "This is an automatic attendance system based on Face Detection",
        features: ["Haarcascade face-detection", "MySQL athentication", "Graphical results", "Seperate login for students and teachers"],
        techs: [{
            img: PYTHON,
            text: "PYTHON-3"
        },{
            img: TKINTER,
            text: "TKINTER GUI"
        },{
            img: PYPLOT,
            text: "MATPLOTLIB.PYPLOT"
        },{
            img: MYSQL,
            text: "MYSQL"
        }],
        links:[{
            url: "https://github.com/sagarguglani15/AttendanceAutomationSystem",
            text: "SOURCE CODE"
        }]
    },{
        date: "29/07/2020",
        text: "Twitter Sentiments Analysis",
        img: TSA,
        desc: "This is a sentiments analyzer behind tweets implemented using tweepy library, Python",
        features: ["Positive, negative or neutral sentiments", "Applicable to any account on Twitter", "Graphical results"],
        techs: [{
            img: PYTHON,
            text: "PYTHON-3"
        },{
            img: TKINTER,
            text: "TKINTER GUI"
        },{
            img: PYPLOT,
            text: "MATPLOTLIB.PYPLOT"
        },{
            img: NLP,
            text: "Natural Language Processing"
        }],
        links:[{
            url: "https://github.com/sagarguglani15/Twitter-Sentients-Analysis",
            text: "SOURCE CODE"
        }]
    },{
        date: "3/07/2020",
        text: "Python Games",
        img: TkGames,
        desc: "Simple games development using Tkinter GUI Python-3",
        features: ["Flappy Bird", "Snake & Food Game", "Hangman Words", "Captcha Typing Speed Test", "Tic-Tac-Toe"],
        techs: [{
            img: PYTHON,
            text: "PYTHON-3"
        },{
            img: TKINTER,
            text: "TKINTER GUI"
        }],
        links:[{
            url: "https://github.com/sagarguglani15/",
            text: "VISIT MY GITHUB REPOSITORIES FOR SOURCE CODE"
        }]
    }
]