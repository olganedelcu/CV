import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  color: #FFBF00; /* Golden color for the heading */
  margin-bottom: 16px; /* Space below the heading */
  font-size: 2em; /* Larger font size for emphasis */
`;

export const JobTitleContainer = styled.div`
  margin: 16px 0; /* Spacing for title */
`;

export const JobPosition = styled.h3`
  color: ${({ theme }) => theme.color};
  margin-bottom: 10px;
`;

export const JobDetails = styled.p`
  color: ${({ theme }) => theme.color};
  margin: 5px 0;
`;

export const ResponsibilitiesList = styled.ul`
  list-style-type: none; 
  padding: 0;
  margin: 0;
  line-height: 1.6;
`;

export const ListItem = styled.li`
  margin-bottom: 8px; 
  background-color: #ffffff; 
  color: ${(props) => props.theme.textColor}; 
  padding: 10px 15px; 
  border-radius: 8px; 
  font-size: 1em; /* Font size for items */
  transition: background-color 0.3s, transform 0.3s; 

  &:hover {
    background-color: ${(props) => props.theme.textColor}; 
    color: ${(props) => props.theme.backgroundColor}; 
    transform: scale(1.02); 
  }
`;
