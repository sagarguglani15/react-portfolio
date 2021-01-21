import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";

import { projects } from "./projects-data";

import './project.style.css'

const Project = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <hr/>
            <Timeline>
                <Events>

                    {projects.map((project, index) => (
                        <ImageEvent
                            date={project.date}
                            className="text-center projects-container"
                            text={project.text}
                            src={project.img}
                            alt={project.text}
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                        <Accordion.Toggle
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <div>
                                                <strong>Description:</strong> {project.desc}
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">

                                                    {project.features.map((feature, index) => (
                                                        <li>{feature}</li>
                                                    ))}
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>

                                                    {project.techs.map((tech, index) => (
                                                        <li>
                                                            <span className="p-2">
                                                                <img
                                                                    src={tech.img}
                                                                    alt={tech.text}
                                                                    rounded
                                                                    className="image-style m-1"
                                                                ></img>{" "}
                                                                {tech.text}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Accordion.Collapse>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">

                                    {project.links.map((link, index) => (
                                        <UrlButton
                                            href={link.url}
                                            target="_blank"
                                        >
                                            {link.text}
                                        </UrlButton>
                                    ))}
                                </div>
                            </div>
                        </ImageEvent>
                    ))}


                </Events>
            </Timeline>

        </div>
    )
}

export default Project