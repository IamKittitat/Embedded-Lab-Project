import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const NavBar = () => {
    return (
        <>
            <Container>
                <p>สนับสนุนโดยธาตุทองซาวด์</p>
                <p>Home</p>
                <p>About</p>
            </Container>
        </>
    )
}

export default NavBar;