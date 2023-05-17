import React from 'react';
import Navbar from '../components/NavBar';
import styled from 'styled-components';
import { COLORS } from '../components/Colors';

import MemberCard from '../components/MemberCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27%;
  height: 85vh;
  background-color: rgba(204, 112, 75, 0.5);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 85%;
  height: 93%;
  background-color: rgba(247, 243, 207, 0.6);
  border-radius: 40px;
  border: 3px solid black;
`;

const Member = styled.p`
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
  text-decoration: underline;
`;

const Topic = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 50px;
  font-weight: 700;
  text-decoration: underline;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 73%;
  background-color: ${COLORS.lightgreen3};
`;

const GoalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.3%;
  height: 28%;
  background-color: rgba(159, 192, 136, 0.3);
  border-radius: 40px;
  border: 3px solid black;
`;

const Detail = styled.li`
  margin-top: 10px;
  margin-left: 40px;
  font-size: 18px;
  font-weight: 500;
`;

const ParameterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.3%;
  height: 62%;
  background-color: rgba(97, 65, 36, 0.3);
  border-radius: 40px;
  border: 3px solid black;
`;

const ParameterInnerContainer = styled.div``;

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <MemberContainer>
          <InnerContainer>
            <Member>MEMBER</Member>
            <MemberCard
              name={'Kanawat Vilasri'}
              id={6430001121}
              role={'STM32'}
            />
            <MemberCard
              name={'Kittitat Tuntisak'}
              id={6431304521}
              role={'Frontend Developer'}
            />
            <MemberCard
              name={'Thamon Nantasen'}
              id={6431313121}
              role={'MCUV2 NETPIE'}
            />
            <MemberCard
              name={'Naphat Wareesawetsuwan'}
              id={6431315421}
              role={'UX/UI Designer'}
            />
          </InnerContainer>
        </MemberContainer>
        <DetailContainer>
          <GoalContainer>
            <Topic>GOAL</Topic>
            <ul>
              <Detail>
                <strong>Reduce unnecessary water usage</strong>: By measuring
                various parameters, water can be used more efficiently by
                watering only when necessary and avoiding waste.
              </Detail>
              <Detail>
                <strong>Promote tree growth worldwide</strong>: By preventing
                tree loss due to drought or excessive watering, the overall
                environmental health can be improved.
              </Detail>
            </ul>
          </GoalContainer>
          <ParameterContainer>
            <Topic>PARAMETER INFORMATION</Topic>
            <ParameterInnerContainer>
              <p>one</p>
              <p>two</p>
              <p>three</p>
              <p>four</p>
            </ParameterInnerContainer>
          </ParameterContainer>
        </DetailContainer>
      </Container>
    </>
  );
};

export default About;
