import React from 'react';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import StatusContainer from '../components/StatusContainer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Home = ({
  status,
  soilMoisture,
  temperature,
  lightIntensity,
  humidity,
  client,
}) => {
  return (
    <>
      <Navbar />
      <Container>
        <SideBar status={status} client={client} />
        <StatusContainer
          status={status}
          soilMoisture={soilMoisture}
          temperature={temperature}
          lightIntensity={lightIntensity}
          humidity={humidity}
        />
      </Container>
    </>
  );
};

export default Home;
