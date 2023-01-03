import {React, useState} from  'react';
import {Link, useNavigate } from 'react-router-dom'
import {Button, Card, Table, Alert } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import DeleteConfirmation from "../shared/deleteConfirmation/DeleteConfirmation";

function List(){

    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [userMessage, setUserMessage] = useState(null);

    let history = useNavigate();

    const handleViewDetails = (id) => {
        return (
            <div>
            </div>
        )
    };

    const handleEdit = (id, name, birthdate) => {
        localStorage.setItem('Id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Birthdate', birthdate);
    };

    const deleteUser = (id) => {
        var index = Users.map(function(e){
            return e.id;
        }).indexOf(id);

        Users.splice(index, 1);

        history('/');
    };

    // Handle the displaying of the modal based on id
    const showDeleteModal = (id) => {
        setId(id);        
        setDeleteMessage(`Are you sure you want to delete the USER '${Users.find((x) => x.id === id).name}'?`);
       
        setDisplayConfirmationModal(true);
    };

    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    // Handle the actual deletion of the item
    const submitDelete = (id) => {    
        setUserMessage(`The user '${Users.find((x) => x.id === id).name}' was deleted successfully.`);
        deleteUser(id);
    
        setDisplayConfirmationModal(false);
    };

    return(       
        <div>
            <Card className="mt-2">
                <Card.Header>List of users</Card.Header>
                <Card.Body>
                    {userMessage && <Alert variant="success">{userMessage}</Alert>}

                    <Table responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Birthdate</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Users && Users.length > 0 
                                ? 
                                Users.map((user) => {
                                    return(
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.birthdate}</td>
                                            <td>
                                                <Link to="/details">
                                                    <Button variant="link" onClick={() => handleViewDetails(user.id)}>View details</Button>
                                                </Link>
                                                <Link to="/edit">
                                                    <Button variant="link" onClick={() => handleEdit(user.id, user.name, user.birthdate)}>Update</Button>
                                                </Link>
                                                <Button variant="link" onClick={() => showDeleteModal(user.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )                            
                                })
                                : 
                                <tr>
                                    <td colspan="4"><p>There is no users defined</p></td>
                                </tr>                        
                            }                   
                        </tbody>
                    </Table>   
                </Card.Body>
            </Card>             
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage}  />
        </div>
    );
}

export default List;