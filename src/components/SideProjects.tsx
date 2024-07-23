import React from "react";
import { Project } from "../models/ProjectModel";
import '../styles/SideProjects.style';

interface Props {
    projects: Project[];
}

export default function SideProjects({ projects }: Props) {
    return (
        <div className="side-projects-container">
            <h2>Side Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.project_name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}
