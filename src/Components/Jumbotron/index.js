import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Header() {
    return(
        <Jumbotron fluid>
        <Container>
            <h1>Course Correctly</h1>
            <p>
            The biggest database of online courses.
            </p>
        </Container>
        </Jumbotron>
    )
}

export default Header;
