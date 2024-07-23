import React from "react";
import { Project } from "../models/ProjectModel";
import { Container, Title, ProjectTitle, ProjectDescription } from '../styles/SideProjects.style';

interface Props {
    projects: Project[];
}

const SideProjects: React.FC<Props> = ({ projects }) => {
    return (
        <Container>
            <Title>Side Projects</Title>
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectTitle>{project.project_name}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                </div>
            ))}
        </Container>
    );
};

export default SideProjects;
