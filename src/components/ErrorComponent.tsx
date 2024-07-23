import React from 'react';
import styled from 'styled-components';

interface Props {
    message: string;
}

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin: 20px;
`;

export default function ErrorComponent({ message }: Props) {
    return <ErrorMessage>{message}</ErrorMessage>;
}
