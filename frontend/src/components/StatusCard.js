import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const InnerContainer = styled.div`
  border-radius: 40px;
  border: 3px solid black;
  width: 420px;
  height: 198px;
  background-color: ${COLORS.green};
`;

const StatusCard = ({ icon, data, name }) => {
  return (
    <Container>
      <InnerContainer>
        <p>{icon}</p>
        <p>{data}</p>
      </InnerContainer>
      <h2>{name}</h2>
    </Container>
  );
};

export default StatusCard;
