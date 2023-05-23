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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 80px;
  width: 305px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.status === STATUS.PERFECT
      ? COLORS.green
      : props.status === STATUS.PROCESS
      ? COLORS.blue
      : COLORS.red};
`;

const Text = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: black;
`;

const SideStatus = ({ status }) => {
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
    </>
  );
};

export default SideStatus;
