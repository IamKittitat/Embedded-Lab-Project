import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.white};
  width: 82%;
  height: 16%;
  border-radius: 30px;
`;

const TextContainer = styled.div``;
const MemberContainer = ({ img, name, id, role }) => {
  return (
    <Container>
      <p>img</p>
      <TextContainer>
        <p>{name}</p>
        <p>{id}</p>
        <p>{role}</p>
      </TextContainer>
    </Container>
  );
};

export default MemberContainer;
