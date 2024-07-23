import React from 'react';
import { Container, Heading, List, ListItem } from '../styles/TechnicalTooling.style';

interface Props {
    tooling: string[];  // Update the prop name to `tooling`
}

export default function TechnicalTooling({ tooling }: Props) {
    return (
        <Container>
            <Heading>Technical Tooling</Heading>
            <List>
                {tooling.map((tool, index) => (
                    <ListItem key={index}>
                        {tool}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
