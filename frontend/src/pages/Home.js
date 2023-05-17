import React from 'react';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import StatusContainer from '../components/StatusContainer';
import styled from 'styled-components';
import { STATUS } from '../util/Status';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SideBar status={STATUS.PERFECT} />
        <StatusContainer status={STATUS.PERFECT} />
      </Container>
    </>
  );
};

export default Home;
