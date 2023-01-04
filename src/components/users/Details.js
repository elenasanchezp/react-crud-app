import React, {useState, useEffect}  from  'react';
import Container from 'react-bootstrap/Container';
import {Button, Card, Table } from 'react-bootstrap';

import Users from './Users';

function Details(){
    const [id, setId] = useState(''); 
    const [name, setName] = useState(''); 
    const [birthdate, setBirthdate] = useState(''); 

    var index = Users.map(function(e) {
        return e.id;
    }).indexOf(id);

    useEffect (() => {
        setName(localStorage.getItem('Name'))
        setBirthdate(localStorage.getItem('Birthdate'))
        setId(localStorage.getItem('Id'));
    }, []);

    return(       
        <>
            <Container fluid="md">
                <Card className="mt-2">
                    <Card.Header><h1>User´s details</h1></Card.Header>
                    <Card.Body>
                        <Card.Text>Please, see following the user´s details</Card.Text>

                        <Table responsive>
                            <tbody>
                                <tr>
                                    <td><strong>Id</strong></td>
                                    <td>{id}</td>
                                </tr>
                                <tr>
                                    <td><strong>Name</strong></td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Birthdate</strong></td>
                                    <td>{birthdate}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>   
            </Container>                
        </>
    );
}

export default Details;