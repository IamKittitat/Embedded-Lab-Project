import React from 'react';
import styled from 'styled-components';
import { STATUS } from '../util/Status';
import { COLORS } from './Colors';

const Perfect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.darkgreen};
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
        <Perfect>Everything is Perfect!</Perfect>
      ) : status === STATUS.WARNING ? (
        <div>WARNING</div>
      ) : (
        <div>PROCESS</div>
      )}
    </>
  );
};

export default SideDetail;
