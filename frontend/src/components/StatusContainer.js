import React from 'react';
import styled from 'styled-components';
import StatusCard from './StatusCard';

const StatusContainer = ({ status }) => {
  return (
    <>
      <h1>PARAMETER</h1>
      <StatusCard icon="SOILMOISTURE" data="40.3" name="soil moisture" />
      <StatusCard icon="AIRMOISTURE" data="50.3" name="soil temperature" />
      <StatusCard icon="TEMP" data="60.3" name="temperature" />
      <StatusCard icon="LIGHT" data="70.3" name="Light Intensity" />
    </>
  );
};

export default StatusContainer;
