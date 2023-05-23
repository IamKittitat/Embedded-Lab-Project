import React from 'react';
import styled from 'styled-components';
import { STATUS } from '../util/Status';
import { COLORS } from './Colors';
import PerfectIcon from '../icon/PerfectIcon.svg';
import WarningIcon from '../icon/WarningIcon.svg';
import ProcessIcon from '../icon/ProcessIcon.svg';
import { ReactSVG } from 'react-svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FillWater = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
  width: 245px;
  border: 3px solid #000000;
  border-radius: 100px;
  background-color: #409bce;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${COLORS.white};
  cursor: pointer;
`;

const SideStatus = ({ status, client }) => {
  const waterHandler = () => {
    client.publish('@msg/command', 'water');
  };
  return (
    <>
      {status === STATUS.PERFECT ? (
        <Container>
          <ReactSVG src={PerfectIcon} />
        </Container>
      ) : status === STATUS.WARNING ? (
        <Container>
          <ReactSVG src={WarningIcon} />
        </Container>
      ) : (
        <Container>
          <ReactSVG src={ProcessIcon} />
        </Container>
      )}
      <FillWater onClick={waterHandler}>Watering Plant</FillWater>
    </>
  );
};

export default SideStatus;
