import React from 'react';
import styled from 'styled-components';
import { STATUS } from '../util/Status';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) =>
    props.status === STATUS.PERFECT
      ? COLORS.darkgreen
      : props.status === STATUS.PROCESS
      ? COLORS.darkblue
      : COLORS.darkred};
  border: 3px solid black;
  width: 305px;
  height: 40%;
  border-radius: 30px;
`;

const Text = styled.p`
  color: ${COLORS.white};
  font-size: 40px;
  font-weight: 900;
  text-align: center;
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

const SideDetail = ({ status }) => {
  const waterHandler = () => {
    alert('Watering Plant');
  };
  return (
    <>
      {status === STATUS.PERFECT ? (
        <Container status={status}>
          <Text>Everything is Perfect!</Text>
        </Container>
      ) : status === STATUS.WARNING ? (
        <Container status={status}>
          <Text>WARNING!!</Text>
          <FillWater onClick={waterHandler}>Watering Plant</FillWater>
        </Container>
      ) : (
        <Container status={status}>
          <Text>
            PROCESSING <br /> ...
          </Text>
        </Container>
      )}
    </>
  );
};

export default SideDetail;
