import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import SideBar from '../components/SideBar';
import StatusContainer from '../components/StatusContainer';
import styled from 'styled-components';
import { STATUS } from '../util/Status';
import Paho from 'paho-mqtt';

const client = new Paho.Client(
  'mqtt.netpie.io',
  Number(443),
  '00eb2fc6-d9fb-49ad-8fba-e38363cda556',
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Home = () => {
  const [soilMoisture, setSoilMoisture] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [lightIntensity, setLightIntensity] = useState(0);
  const [status, setStatus] = useState(STATUS.PERFECT);

  function convertLightIntensity(read) {
    const vout = (read * 3.3) / 4095;
    const rldr = (330 * (3.3 - vout)) / vout;
    return 500 / (rldr / 1000);
  }

  function convertSoilMoisture(read) {
    const moisturePercentage = ((read - 700) * 100) / 420;
    if (moisturePercentage >= 100) return 100;
    if (moisturePercentage <= 0) return 0;
    return moisturePercentage;
  }

  function onMessage(message) {
    const [lightIntensity, temperature, humidity, soilMoisture, waterStatus] =
      message.payloadString.split('|');
    setSoilMoisture(convertSoilMoisture(soilMoisture));
    setHumidity(parseFloat(humidity));
    setTemperature(parseFloat(temperature));
    setLightIntensity(convertLightIntensity(lightIntensity));

    if (waterStatus === '1') {
      setStatus(STATUS.PROCESS);
    } else {
      if (
        41 <= soilMoisture <= 80 &&
        60 <= humidity <= 80 &&
        24 <= temperature <= 43 &&
        lightIntensity >= 60000
      ) {
        setStatus(STATUS.PERFECT);
      } else {
        setStatus(STATUS.WARNING);
      }
    }
  }

  useEffect(() => {
    client.connect({
      useSSL: true,
      userName: '4e4pEKJ1ZNXoBym5asXkCK5ZPHudFbqT',
      password: '*EEcB(l*ftaj!pRNABx43qLL3()(ax4_',
      onSuccess: () => {
        console.log('Connected!');
        client.subscribe('@msg/data');
        client.publish('@msg/command', 'fetch');
        client.onMessageArrived = onMessage;
        // client.publish('@msg/request', 'r');
      },
      onFailure: () => {
        console.log('Failed to connect!');
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <SideBar status={status} />
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
