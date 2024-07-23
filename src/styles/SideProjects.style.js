// styles/SideProjects.styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.color};
  margin: 10px 0;
`;

export const ProjectDescription = styled.p`
    color: ${({ theme }) => theme.color};
    margin: 5px 0;
`;
