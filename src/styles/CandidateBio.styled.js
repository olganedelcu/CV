import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  background: linear-gradient(135deg, rgba(217, 102, 255, 0.8) 0%, rgba(150, 80, 255, 0.8) 100%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ProfileImage = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  margin-right: 190px;
  margin-left: 80px;
`;

export const CandidateInfo = styled.div`
  color: ${({ theme }) => theme.color};

  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 5px 0;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;`;

export const Link = styled.a`color: #f8f9fb;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: rgba(217, 102, 255, 0.8);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff69b4;
    transform: scale(1.05);
  }
`;
