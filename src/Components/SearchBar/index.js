import React from 'react';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './SearchBar.css';
// import { propTypes } from 'react-bootstrap/esm/Image';

// import {BrowserRouter as Redirect} from 'react-router-dom';
// import {BrowserRouter as Switch} from 'react-router-dom';

// import {NavLink} from 'react-router-dom';

function SearchBar(props) {
    return(
        <Container>
            <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
                <input id='searchbar' type='text' placeholder='Search by Keyword'></input>
                <input id='submitbutton' type='submit' value="Search"></input>
            </form>
        </Container>
    )
}

export default SearchBar;