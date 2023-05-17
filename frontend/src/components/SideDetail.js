import React from 'react';
import styled from 'styled-components';
import { STATUS } from '../util/Status';

const SideDetail = ({ status }) => {
  return (
    <>
      {status === STATUS.PERFECT ? (
        <div>PERFECT</div>
      ) : status === STATUS.WARNING ? (
        <div>WARNING</div>
      ) : (
        <div>PROCESS</div>
      )}
    </>
  );
};

export default SideDetail;
