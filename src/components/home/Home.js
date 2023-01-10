import React from  'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from '../users/List';

function Home(){
    return(        
        <div>
            <Container fluid="md">
                <Row>
                    <Col >
                        <List />

                        <div> 
                            <p>If you want to <strong>add a new User</strong>, please do click <Link to="/add">here</Link></p>
                        </div> 
                    </Col>
                </Row>
            </Container>   
        </div>
    );
}

export default Home;