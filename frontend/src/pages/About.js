import React from 'react';
import Navbar from '../components/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoalContainer = styled.div`
  display: flex;
`;

const ParameterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <MemberContainer>
          <h1>MEMBER</h1>
          <p>6430001121</p>
          <p>6431304521</p>
          <p>6431313121</p>
          <p>6431315421</p>
        </MemberContainer>
        <DetailContainer>
          <GoalContainer>
            <h2>GOAL</h2>
            <p>Reduce Unneccessary water usage</p>
            <p>Promote tree growth worldwide</p>
          </GoalContainer>
          <ParameterContainer>
            <h2>PARAMETER INFORMATION</h2>
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
          </ParameterContainer>
        </DetailContainer>
      </Container>
    </>
  );
};

export default About;
