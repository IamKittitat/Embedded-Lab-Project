import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  width: 46%;
  height: 60%;
  border-radius: 40px;
  margin-top: 10px;
`;

const Topic = styled.p`
  margin-left: 20px;
  margin-top: 10px;
  font-size: 30px;
  font-weight: 700;
`;

const Detail = styled.p`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
`;

const Recommend = styled.span`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const ParameterCard = ({ topic, detail, recommend }) => {
  return (
    <Container>
      <Topic> {topic} </Topic>
      <Detail> {detail}</Detail>
      <Recommend>Recommended: {recommend}</Recommend>
    </Container>
  );
};

export default ParameterCard;
