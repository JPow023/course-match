import React from 'react';
import './Pagination.css';
import Container from 'react-bootstrap/Container';


function Paginate(props) {
    return(
        <div id='paginate'>
        <Container>
            <button type='button' onClick={props.handlePaginate}>Load More</button>
        </Container>
    </div>
    )
}

export default Paginate;