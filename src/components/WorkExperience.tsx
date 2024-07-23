import React from "react";
import { WorkExperienceModel } from "../models/WorkExperienceModel";
import { Container, JobTitleContainer, JobPosition, JobDetails, ResponsibilitiesList, ListItem, Heading } from "../styles/WorkExperience.styled";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    workExperience: WorkExperienceModel[];
}

export default function WorkExperience({ workExperience }: Props) {
    const formatJobTitle = (job: WorkExperienceModel): string => {
        return `${job.position}`;
    };

    const formatJobDetails = (job: WorkExperienceModel): string => {
        return `${job.company} | ${job.location} | ${job.start_date} - ${job.end_date}`;
    };

    return (
        <Container>
            <Heading>Work Experience</Heading>
            {workExperience.map((job) => (
                <div key={uuidv4()}>
                    <JobTitleContainer>
                        <JobPosition>{formatJobTitle(job)}</JobPosition>
                        <JobDetails>{formatJobDetails(job)}</JobDetails>
                    </JobTitleContainer>
                    <ResponsibilitiesList>
                        {job.responsibilities.map((responsibility, i) => (
                            <ListItem key={i}>{responsibility}</ListItem>
                        ))}
                    </ResponsibilitiesList>
                </div>
            ))}
        </Container>
    );
}
