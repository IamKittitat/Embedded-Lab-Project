import About from './pages/About';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { STATUS } from './util/Status';
import '@fontsource/inter';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Paho from 'paho-mqtt';

const client = new Paho.Client(
  'mqtt.netpie.io',
  Number(443),
  '00eb2fc6-d9fb-49ad-8fba-e38363cda556',
);

function App() {
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
    setSoilMoisture(convertSoilMoisture(parseFloat(soilMoisture)).toFixed(2));
    setHumidity(parseFloat(humidity).toFixed(2));
    setTemperature(parseFloat(temperature).toFixed(2));
    setLightIntensity(
      convertLightIntensity(parseFloat(lightIntensity)).toFixed(2),
    );

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          client={client}
          status={status}
          humidity={humidity}
          soilMoisture={soilMoisture}
          temperature={temperature}
          lightIntensity={lightIntensity}
        />
      ),
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
