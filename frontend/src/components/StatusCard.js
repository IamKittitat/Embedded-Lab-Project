import React from 'react';
import styled from 'styled-components';
import { COLORS } from './Colors';
import { ReactSVG } from 'react-svg';
import { STATUS } from '../util/Status';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 40px;
  border: 3px solid black;
  width: 420px;
  height: 198px;
  background-color: ${(props) =>
    props.status === STATUS.PERFECT
      ? COLORS.green
      : props.status === STATUS.PROCESS
      ? COLORS.blue
      : COLORS.red};
`;

const Data = styled.p`
  margin-left: 20px;
  font-size: 70px;
  font-weight: 900;
  line-height: 85px;
  text-align: center;
  text-shadow: -2px 0px 0px black, 2px 0px 0px black, 0px -2px 0px black,
    0px 2px 0px black;
  color: ${COLORS.white};
`;

const Unit = styled.p`
  position: relative;
  top: 80px;
  left: 325px;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

const StatusCard = ({ icon, data, name, status, unit }) => {
  return (
    <Container>
      <InnerContainer status={status}>
        <Unit>{unit}</Unit>
        <ReactSVG src={icon} style={{ marginLeft: '30px' }} />
        <Data>{data}</Data>
      </InnerContainer>
      <Name>{name}</Name>
    </Container>
  );
};

export default StatusCard;
