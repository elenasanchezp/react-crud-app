import React from  'react';
import Container from 'react-bootstrap/Container';
import {Button, Card } from 'react-bootstrap';

function Details(){
    return(       
        <>
            <Container fluid="md">
                <Card className="mt-2">
                    <Card.Header>User´s details</Card.Header>
                    <Card.Body>
                        <Card.Text>Please, see the user´s details</Card.Text>
                    </Card.Body>
                </Card>   
            </Container>                
        </>
    );
}

export default Details;