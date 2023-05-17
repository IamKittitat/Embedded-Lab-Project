import React from 'react';
import styled from 'styled-components';
import SideDetail from './SideDetail';
import SideStatus from './SideStatus';
import { STATUS } from '../util/Status';
import { COLORS } from './Colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.lightgreen2};
  width: 27%;
  height: 85vh;
`;

const SideBar = ({ status }) => {
  return (
    <Container>
      <SideDetail status={status} />
      <SideStatus status={status} />
    </Container>
  );
};

export default SideBar;
