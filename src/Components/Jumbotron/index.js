import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Header() {
    return(
        <Jumbotron fluid>
        <Container>
            <h1>Course Correctly</h1>
            <p>
            Independent, unbiased reviews of online courses for knowledge workers.
            </p>
        </Container>
        </Jumbotron>
    )
}

export default Header;