import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 16px;
`;

export const Heading = styled.h2`
  color: #800080;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  background-color: #ffffff;
  color: linear-gradient(135deg, rgba(217, 102, 255, 0.8) 0%, rgba(150, 80, 255, 0.8) 100%);
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  border: 5px solid #570ed5;
  font-size: 1.2em;
  animation: moveAround 5s infinite alternate ease-in-out;

  @keyframes moveAround {
    0% { transform: translate(0, 0); }
    25% { transform: translate(10px, -10px); }
    50% { transform: translate(-10px, 10px); }
    75% { transform: translate(20px, -20px); }
    100% { transform: translate(-20px, 20px); }
  }
`;
