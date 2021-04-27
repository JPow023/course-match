import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(props) {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="http://localhost:3000/">Course Correctly</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
                    <input type='text' placeholder="Keyword Search" className="mr-sm-2"></input>
                    <input type='submit'></input>
                </form>
            </Container>
        </Navbar>
        </>
    )};

export default Navigation;