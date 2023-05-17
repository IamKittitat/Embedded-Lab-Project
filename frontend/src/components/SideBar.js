import React from 'react';
import styled from 'styled-components';
import SideDetail from './SideDetail';
import SideStatus from './SideStatus';
import { STATUS } from '../util/Status';

const SideBar = ({ status }) => {
  return (
    <>
      <SideDetail status={status} />
      <SideStatus status={status} />
    </>
  );
};

export default SideBar;
