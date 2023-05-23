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
  position: relative;
  left: 150px;
  font-size: 70px;
  font-weight: 900;
  text-align: center;
  text-shadow: -2px 0px 0px black, 2px 0px 0px black, 0px -2px 0px black,
    0px 2px 0px black;
  color: ${COLORS.white};
`;

const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const StatusCard = ({ icon, data, name, status, unit }) => {
  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : num.toFixed(2);
  }

  return (
    <Container>
      <InnerContainer status={status}>
        <Data>{kFormatter(data)}</Data>
        <ReactSVG src={icon} style={{ position: 'absolute' }} />
      </InnerContainer>
      <Name>
        {name} ({unit})
      </Name>
    </Container>
  );
};

export default StatusCard;
