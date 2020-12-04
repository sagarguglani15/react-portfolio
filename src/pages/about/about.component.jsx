import React from "react";
import MyPhoto from '../../assets/img/profile/profile.webp'

import './about.style.scss'

const About = () => {
    return (
        <div id="about">
            <h1 className="text-center font-details-b">ABOUT ME</h1>
            <hr></hr>
            <div className="about-container">
                <div className="about-left">
                    <img className="about-image" src={MyPhoto} alt="My Photograph" />
                </div>
                <div className="about-right">
                    <h2 className="about-name">Hi there! I am <b>Sagar Guglani</b></h2>
                    <div className="about-desc">
                        <ul>
                            <li>Express, NodeJS projects:
                                <ol>
                                    <li>Scribble game using web Sockets for live drawing board and chatBox</li>
                                    <li>E-commerce CRUD APIs with JWT auth, Bcrypt encryption, JOI payload validations, Sequelize(MySQL), Redis Cache</li>
                                </ol>
                            </li>
                            <li>Pure Javascript Game: 2D Breakout https://sagarguglani15.github.io/BreakOut</li>
                            <li>OpenCV Python3 projects: face detection based attendance automation system</li>
                            <li>Tkinter GUI games, Python3: SnakeFood, Hangman, FlappyBird</li>
                            <li>Twitter Sentiments Analysis: using Tweepy library(collecting tweets) and TextBlob to get -ve, 0, +ve sentiments behind tweets, Matplotlib, Pyplot for data visualization, Pandas Dataframes</li>
                        </ul>
                    </div>


                    <ul className="about-buttons">
                        <li className="about-buttons-li"><a href="https://drive.google.com/file/d/1KQ1KQCHh0FdCmfepl4JO5ckGLbV6_Jeo/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer">My Resume</a></li>
                        <li className="about-buttons-li"><a href="#contact" target="_blank" rel="noopener noreferrer">Lets talk!</a></li>
                        <li className="about-buttons-li"><a href="https://github.com/sagarguglani15" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li className="about-buttons-li"><a href="https://www.linkedin.com/in/sagar-guglani/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About