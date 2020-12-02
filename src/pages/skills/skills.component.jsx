import React from 'react'

import './skills.style.scss'
import { skills } from './skills'

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="text-center font-details-b">TECH SKILLS</h1>
            <div className="skills-container-main">
                <div className="skills-container-left skills-container focus">
                    <div className="skills-title">FrontEnd</div>

                    <div className="card-text d-flex justify-content-start flex-column">
                        {skills.frontend.map((skill, index) => (
                            <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></img> {skill.skillName}
                                </a>
                            </span>
                        ))}
                    </div>

                </div>
                <div className="skills-container-center">
                    <div className="skills-container-center-up skills-container focus">
                        <div className="skills-title">BackEnd</div>

                        <div className="card-text d-flex justify-content-start flex-column">
                        {skills.backend.map((skill, index) => (
                            <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></img> {skill.skillName}
                                </a>
                            </span>
                        ))}
                    </div>

                    </div>
                    <div className="skills-container-center-down skills-container focus">
                        <div className="skills-title">Hosting Platform</div>

                        <div className="card-text d-flex justify-content-start flex-column">
                        {skills.hostingPlatforms.map((skill, index) => (
                            <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></img> {skill.skillName}
                                </a>
                            </span>
                        ))}
                    </div>

                    </div>
                </div>

                <div className="skills-container-right">
                    <div className="skills-container-right-up skills-container focus">
                        <div className="skills-title">Programming Languages</div>

                        <div className="card-text d-flex justify-content-start flex-column">
                        {skills.programmingLanguages.map((skill, index) => (
                            <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></img> {skill.skillName}
                                </a>
                            </span>
                        ))}
                    </div>

                    </div>
                    <div className="skills-container-right-down skills-container focus">
                        <div className="skills-title">Database</div>

                        <div className="card-text d-flex justify-content-start flex-column">
                        {skills.databases.map((skill, index) => (
                            <span className="p-2" key={index}>
                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <img src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></img> {skill.skillName}
                                </a>
                            </span>
                        ))}
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills