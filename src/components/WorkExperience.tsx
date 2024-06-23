import React from "react";
import { WorkExperienceModel } from "../models/CandidateModel";

export default function WorkExperience(props: Props) {
  return (
    <div>
      <h2>Work Experience</h2>
      {props.workExperience.map((job, index) => (
        <div key={index}>
          <h3>
            {job.position} at {job.company}, {job.location}
          </h3>
          <p>
            {job.start_date} - {job.end_date}
          </p>
          <ul>
            {job.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

interface Props {
  workExperience: WorkExperienceModel[];
}
