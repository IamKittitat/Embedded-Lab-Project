import React from 'react';
import styled from 'styled-components';
import StatusCard from './StatusCard';
import { COLORS } from './Colors';

const Topic = styled.p`
  margin-left: 10px;
  margin-top: 20px;
  font-size: 60px;
  font-weight: 700;
  text-decoration: underline;
`;

const StatusDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
`;

const Container = styled.div`
  background-color: ${COLORS.lightgreen};
  width: 73%;
  height: 85vh;
`;

const StatusContainer = ({ status }) => {
  return (
    <Container>
      <Topic>PARAMETER</Topic>
      <StatusDiv>
        <StatusCard icon="SOILMOISTURE" data="40.3" name="soil moisture" />
        <StatusCard icon="AIRMOISTURE" data="50.3" name="soil temperature" />
        <StatusCard icon="TEMP" data="60.3" name="temperature" />
        <StatusCard icon="LIGHT" data="70.3" name="Light Intensity" />
      </StatusDiv>
    </Container>
  );
};

export default StatusContainer;
