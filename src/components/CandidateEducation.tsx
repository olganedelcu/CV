import React from "react";
import { Education } from "../models/CandidateModel";

export default function CandidateEducation(props: Props) {
    return (
        <div>
            <h2>Education and Certifications</h2>
            {props.education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.degree}</h3>
                    <p>
                        {edu.institution}, {edu.location}
                    </p>
                    <p>
                        {edu.start_date} - {edu.end_date}
                    </p>
                </div>
            ))}
        </div>
    );
}

interface Props {
    education: Education[];
}
