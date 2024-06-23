import React, { useEffect, useState } from "react";
import WorkExperience from "./WorkExperience";
import { CandidateModel } from "../models/CandidateModel";
import { getCandidateInformation } from "../services/CandidateService";

export default function CV() {
  const [candidate, setCandidate] = useState<CandidateModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getCandidateInformation()
      .then((response: any) => {
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
        <WorkExperience workExperience={candidate.work_experience!} />
      )}
    </div>
  );
}
