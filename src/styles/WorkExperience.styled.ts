import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 20px;
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
  list-style-type: none; /* Remove bullet points */
  padding: 0;
  margin: 0;
  line-height: 1.6; /* Improve readability */
  color: #000; /* Set color to black */
`;

export const ListItem = styled.li`
  margin-bottom: 8px; /* Space between items */
  background-color: #ffffff; /* White background */
  color: ${(props) => props.theme.textColor}; /* Text color from theme */
  padding: 10px 15px; /* Padding for items */
  border-radius: 8px; /* Rounded corners */
  border: 2px solid ${(props) => props.theme.textColor}; /* Border color */
  font-size: 1em; /* Font size for items */
  transition: background-color 0.3s, transform 0.3s; /* Smooth hover effects */

  &:hover {
    background-color: ${(props) => props.theme.textColor}; /* Darker background on hover */
    color: ${(props) => props.theme.backgroundColor}; /* Change text color for contrast */
    transform: scale(1.02); /* Slight scale effect */
  }
`;
