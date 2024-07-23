import styled from 'styled-components';

export const ParentContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
