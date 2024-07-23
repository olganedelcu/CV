import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  margin: 100px auto;
  width: 50px;
  height: 50px;
  border: 5px solid lightgray;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
`;

export default function LoadingSpinner() {
    return <Spinner />;
}
