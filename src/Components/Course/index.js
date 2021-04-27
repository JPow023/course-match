import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css';

function Course(props) {

        return(
            <div>
                <Container>
                    {props.courses.map(course =>
                        <Card id="card" key={course.title}>
                            <Card.Header as="h5">{course.platform} {course.price}</Card.Header>
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.headline}
                                </Card.Text>
                                
                                <Button variant="primary" href={course.aff_url}>More Information</Button>
                            </Card.Body>
                        </Card>
                    )}
              </Container>  
            </div>
        )
    }

export default Course;