// styles/CandidateEducation.style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, rgba(217, 102, 255, 0.8) 0%, rgba(150, 80, 255, 0.8) 100%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const EducationItem = styled.div`
  margin-bottom: 20px;
`;

export const Degree = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

export const Institution = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;

export const Dates = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;
