import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.white};
  width: 82%;
  height: 20%;
  border-radius: 30px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 70px;
  height: 72px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const MemberContainer = ({ img, name, id, role }) => {
  return (
    <Container>
      <Image src={img} alt="member" />
      <TextContainer>
        <p>{name}</p>
        <p>{id}</p>
        <p>{role}</p>
      </TextContainer>
    </Container>
  );
};

export default MemberContainer;
