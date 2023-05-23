import React from 'react';
import styled from 'styled-components';
import { STATUS } from '../util/Status';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.status === STATUS.PERFECT
      ? COLORS.darkgreen
      : props.status === STATUS.PROCESS
      ? COLORS.darkblue
      : COLORS.darkred};

  color: ${COLORS.white};
  width: 305px;
  height: 40%;
  border-radius: 30px;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  border: 3px solid black;
`;

const SideDetail = ({ status }) => {
  return (
    <>
      {status === STATUS.PERFECT ? (
        <Container status={status}>Everything is Perfect!</Container>
      ) : status === STATUS.WARNING ? (
        <Container status={status}>WARNING</Container>
      ) : (
        <Container status={status}>PROCESS</Container>
      )}
    </>
  );
};

export default SideDetail;
