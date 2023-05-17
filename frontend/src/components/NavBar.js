import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from './Colors';

const GroupName = styled(Link)`
  font-family: 'Prompt', sans-serif;
  text-decoration: none;
  color: ${COLORS.black};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15vh;
  background-color: ${COLORS.darkbrown};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 57%;
  margin: auto;
  border-radius: 30px;
  background-color: ${COLORS.white};
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: ${COLORS.black};
  /* text-align: center; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
`;

const NavBar = () => {
  return (
    <Container>
      <InnerContainer>
        <GroupName to={`/`}>สนับสนุนโดยธาตุทองซาวด์</GroupName>
        <StyledLink to={`/`}>Home</StyledLink>
        <StyledLink to={`/about`}>About</StyledLink>
      </InnerContainer>
    </Container>
  );
};

export default NavBar;
