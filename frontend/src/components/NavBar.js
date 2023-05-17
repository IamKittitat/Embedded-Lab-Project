import React from 'react';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavBar = () => {
  return (
    <>
      <Container>
        <p>สนับสนุนโดยธาตุทองซาวด์</p>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
      </Container>
    </>
  );
};

export default NavBar;
