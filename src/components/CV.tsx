import React, { useEffect, useState } from 'react';
import BioCandidate from './BioCandidate';
import CandidateEducation from './CandidateEducation';
import WorkExperience from './WorkExperience';
import SideProjects from './SideProjects';
import TechnicalTooling from './TechnicalTooling';
import LoadingSpinner from './LoadingSpinner';
import ErrorComponent from './ErrorComponent';
import { CandidateModel } from '../models/CandidateModel';
import { getCandidateInformation } from '../services/CandidateService';
import { ParentContainer } from '../styles/ParentContainer.style';
import { GlobalStyle } from '../styles/GlobalStyle.style';

// Component definition
const CV: React.FC = () => {
    const [candidate, setCandidate] = useState<CandidateModel | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCandidateInformation()
            .then((response: CandidateModel) => {
                setCandidate(response);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error loading candidate information:', err);
                setError('Error loading candidate information.');
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorComponent message={error} />;
    }

    return (
        <>
            <GlobalStyle /> {/* Apply global styles */}
            <ParentContainer>
                {candidate && (
                    <>
                        <BioCandidate candidate={candidate} />
                        <WorkExperience workExperience={candidate.work_experience || []} />
                        <SideProjects projects={candidate.side_projects || []} />
                        <TechnicalTooling tooling={candidate.technical_tooling.tooling || []} />
                        <CandidateEducation education={candidate.education_and_certifications || []} />
                    </>
                )}
            </ParentContainer>
        </>
    );
}

export default CV;
