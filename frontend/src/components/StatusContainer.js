import React from 'react';
import styled from 'styled-components';
import StatusCard from './StatusCard';
import RefreshIcon from '../icon/Refresh.svg';
import Humidity from '../icon/Humidity.svg';
import LightIntensity from '../icon/LightIntensity.svg';
import SoilMoisture from '../icon/SoilMoisture.svg';
import Temperature from '../icon/Temperature.svg';
import { ReactSVG } from 'react-svg';
import { COLORS } from './Colors';
import { STATUS } from '../util/Status';

const TopicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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
`;

const Container = styled.div`
  background-color: ${COLORS.lightgreen};
  width: 73%;
  height: 85vh;
`;

const StatusContainer = ({
  status,
  soilMoisture,
  humidity,
  temperature,
  lightIntensity,
}) => {
  const refreshPage = () => window.location.reload();

  return (
    <Container>
      <TopicContainer>
        <Topic>PARAMETER</Topic>
        <ReactSVG
          src={RefreshIcon}
          onClick={refreshPage}
          style={{ cursor: 'pointer', marginTop: '20px', marginLeft: '10px' }}
        />
      </TopicContainer>
      {status === STATUS.PROCESS ? (
        <StatusDiv>
          <StatusCard
            icon={SoilMoisture}
            data={soilMoisture}
            name="Soil Moisture"
            status={status}
            unit="%"
          />
          <StatusCard
            icon={Humidity}
            data={humidity}
            name="Relative Humidity"
            status={status}
            unit="%"
          />
          <StatusCard
            icon={Temperature}
            data={temperature}
            name={'Temperature'}
            status={status}
            unit="°C"
          />
          <StatusCard
            icon={LightIntensity}
            data={lightIntensity}
            name="Light Intensity"
            status={status}
            unit="Lux"
          />
        </StatusDiv>
      ) : (
        <StatusDiv>
          {41 <= soilMoisture && soilMoisture <= 80 ? (
            <StatusCard
              icon={SoilMoisture}
              data={soilMoisture}
              name="Soil Moisture"
              status={STATUS.PERFECT}
              unit="%"
            />
          ) : (
            <StatusCard
              icon={SoilMoisture}
              data={soilMoisture}
              name="Soil Moisture"
              status={STATUS.WARNING}
              unit="%"
            />
          )}
          {60 <= humidity && humidity <= 80 ? (
            <StatusCard
              icon={Humidity}
              data={humidity}
              name="Relative Humidity"
              status={STATUS.PERFECT}
              unit="%"
            />
          ) : (
            <StatusCard
              icon={Humidity}
              data={humidity}
              name="Relative Humidity"
              status={STATUS.WARNING}
              unit="%"
            />
          )}
          {24 <= temperature && temperature <= 43 ? (
            <StatusCard
              icon={Temperature}
              data={temperature}
              name={'Temperature'}
              status={STATUS.PERFECT}
              unit="°C"
            />
          ) : (
            <StatusCard
              icon={Temperature}
              data={temperature}
              name={'Temperature'}
              status={STATUS.WARNING}
              unit="°C"
            />
          )}

          <StatusCard
            icon={LightIntensity}
            data={lightIntensity}
            name="Light Intensity"
            status={STATUS.PERFECT}
            unit="Lux"
          />
        </StatusDiv>
      )}
    </Container>
  );
};

export default StatusContainer;
