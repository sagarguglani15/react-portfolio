import React from 'react'
import Tilt from 'react-tilt'

import './internship.style.scss'
import { internships } from "./internships-data";

const Internship = () => {
    return (
        <div id="internship" className="internship">

            <h1 className="text-center font-details-b">INTERNSHIPS</h1>
            <hr/>
            <div className="internship-container-main">
                {internships.map((internship, index) => (

                    <Tilt className="Tilt" options={{ max: 25 }}>

                        <span className="p-2" key={index}>
                            <div className="internship-container">
                                <div className="internship-container-left">
                                    <img src={internship.img} alt={internship.imgAlt} rounded className="internship-image m-1"></img>
                                </div>
                                <div className="internship-container-right">
                                    <div className="internship-title">{internship.title}</div>
                                    <div className="internship-company">{internship.company}</div>
                                    <ul>
                                        {internship.desc.map((description, i) => (

                                            <li className="internship-desc">{description}</li>

                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </span>
                    </Tilt>
                ))}
            </div>
        </div>
    )
}

export default Internship