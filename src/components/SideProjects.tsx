import React from 'react';

export default function sideProjects(props: Props) {
    return (
        <div>
            <h2>Side Projects</h2>
            {props.projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.project_name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}


interface Props {
    projects: Project[];
}