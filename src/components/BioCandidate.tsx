import React from "react";
import { CandidateModel } from "../models/CandidateModel";
import { Container, ProfileImage, CandidateInfo, LinkContainer, Link } from "../styles/CandidateBio.styled";

interface Props {
    candidate: CandidateModel;
}

export default function BioCandidate({ candidate }: Props) {
    const { picture, name, location, email, phone, linkedIn, github, website } = candidate;

    return (
        <Container>
            <ProfileImage src={picture} alt={`${name}'s profile`} />
            <CandidateInfo>
                <h1>{name}</h1>
                <p>{location}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <LinkContainer>
                    <Link href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    <Link href={github} target="_blank" rel="noopener noreferrer">GitHub</Link>
                    <Link href={website} target="_blank" rel="noopener noreferrer">Website</Link>
                </LinkContainer>
            </CandidateInfo>
        </Container>
    );
}
