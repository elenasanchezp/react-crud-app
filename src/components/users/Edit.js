import React, {useState, useEffect} from  'react';

import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import {Button, Card } from 'react-bootstrap';

import Users from './Users';

function Edit(){

    const [id, setId] = useState(''); 
    const [name, setName] = useState(''); 
    const [birthdate, setBirthdate] = useState(''); 
    const [validated, setValidated] = useState(false);

    let history = useNavigate();

    var index = Users.map(function(e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let users = Users[index];
        users.Name = name; 
        users.Birthdate = birthdate;

        history('/');
    };

    useEffect (() => {
        setName(localStorage.getItem('Name'))
        setBirthdate(localStorage.getItem('Birthdate'))
        setId(localStorage.getItem('Id'));
    }, []);

    return(       
        <>
            <Container fluid="md">
                <Card className="mt-2">
                    <Card.Header>Edit an user</Card.Header>
                    <Card.Body>
                        <Card.Text>Please, edit the user´s details</Card.Text>
                        
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <FormGroup className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" 
                                                placeholder="Enter Name" 
                                                required 
                                                value={name}
                                                isInvalid={validated}
                                                onChange={(e) => setName(e.target.value)}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                            </FormGroup> 
                            <FormGroup className="mb-3" controlId="formBirthdate">
                                <Form.Label>Birthdate</Form.Label>
                                <Form.Control type="date" 
                                                placeholder="Enter birthdate" 
                                                value={birthdate}
                                                required
                                                isInvalid={validated}
                                                onChange={(e) => setBirthdate(e.target.value)}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please provide a valid birthdate.</Form.Control.Feedback>
                            </FormGroup>
                            <Button variant="primary" type="submit">Update</Button>
                        </Form>
                    </Card.Body>
                </Card>   
            </Container>                
        </>
    );
}

export default Edit;