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
  background-color: ${(props) =>
    props.status === STATUS.PERFECT
      ? COLORS.lightgreen2
      : props.status === STATUS.PROCESS
      ? COLORS.lightblue2
      : COLORS.lightred2};
  width: 27%;
  height: 85vh;
`;

const SideBar = ({ status }) => {
  return (
    <Container status={status}>
      <SideDetail status={status} />
      {/* <SideDetail status={'Warning'} /> */}
      {/* <SideDetail status={'Perfect'} /> */}
      {/* <SideDetail status={'Processing'} /> */}
      <SideStatus status={status} />
    </Container>
  );
};

export default SideBar;
