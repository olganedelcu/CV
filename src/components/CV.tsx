import React, { useEffect, useState } from "react";
import WorkExperience from "./WorkExperience";
import CandidateEducation from "./CandidateEducation";
import BioCandidate from "./BioCandidate";
import SideProjects from "./SideProjects";
import TechnicalTooling from "./TechnicalTooling";
import { CandidateModel } from "../models/CandidateModel";
import { getCandidateInformation } from "../services/CandidateService";

export default function CV() {
  const [candidate, setCandidate] = useState<CandidateModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getCandidateInformation()
        .then((response: CandidateModel) => {
          console.log(response);
          setCandidate(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
        });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading candidate information.</p>;
  }

  return (
      <div>
        {candidate && (
            <>
              <BioCandidate
                  name={candidate.name}
                  location={candidate.location}
                  email={candidate.email}
                  phone={candidate.phone}
                  visaStatus={candidate.visa_status}
                  linkedIn={candidate.linkedIn}
                  github={candidate.github}
                  website={candidate.website}
                  picture={candidate.picture}
              />
              <CandidateEducation education={candidate.education_and_certifications!} />
              <WorkExperience workExperience={candidate.work_experience!} />
              <SideProjects projects={candidate.side_projects!} />
              <TechnicalTooling tools={candidate.technical_tooling!} />
            </>
        )}
      </div>
  );
}
