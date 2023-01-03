import React, {useState} from  'react';
import {v4 as uuid} from 'uuid';

import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import {Button, Card } from 'react-bootstrap';

import Users from './Users';

function Add(){

    const [name, setName] = useState(''); 
    const [birthdate, setBirthdate] = useState(''); 
    const [validated, setValidated] = useState(false);

    let history = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(true);

            const ids = uuid();
            let uniqueId = ids.slice(0,8);
    
            let a = name, 
            b  = birthdate; 
    
            Users.push({id: uniqueId, name: a, birthdate: b});
    
            history('/');
        }
    };

    return(
        <>
            <Container fluid="md">
                <Card className="mt-2">
                    <Card.Header>Create an user</Card.Header>
                    <Card.Body>
                        <Card.Text>Please, add the details of your new user</Card.Text>
                        
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <FormGroup className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" 
                                                placeholder="Enter Name" 
                                                required 
                                                isInvalid={validated}
                                                onChange={(e) => setName(e.target.value)}></Form.Control>
                                 <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
                            </FormGroup> 
                            <FormGroup className="mb-3" controlId="formBirthdate">
                                <Form.Label>Birthdate</Form.Label>
                                <Form.Control type="date" 
                                                placeholder="Enter birthdate" 
                                                required
                                                isInvalid={validated}
                                                onChange={(e) => setBirthdate(e.target.value)}></Form.Control>
                                <Form.Control.Feedback type="invalid">Please provide a valid birthdate.</Form.Control.Feedback>
                            </FormGroup>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>   
            </Container>                
        </>
    );
}

export default Add;