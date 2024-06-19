export interface CandidateModel {
    name: string;
    location: string;
    email: string;
    phone: string;
    visa_status: string;
    linkedIn: string;
    github: string;
    website: string;
    picture: string;
    technical_tooling: string[];
    work_experience?: WorkExperience[];
    education_and_certifications?: Education[];
    side_projects?: Project[];
}

export interface WorkExperience {
    position: string;
    company: string;
    link?: string;
    location: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    start_date: string;
    end_date: string;
}

export interface Project {
    project_name: string;
    description: string;
}
