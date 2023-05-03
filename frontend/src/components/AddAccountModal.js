import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../services/AccountService';


const AddStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add ");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Add Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="account_name">
                                    <Form.Label> account_name</Form.Label>
                                    <Form.Control type="text" name="account_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="account_number">
                                    <Form.Label> account_number </Form.Label>
                                    <Form.Control type="text" name="account_number" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="branch_name">
                                    <Form.Label> branch_name</Form.Label>
                                    <Form.Control type="text" name="branch_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="bank_name">
                                    <Form.Label>bank_name</Form.Label>
                                    <Form.Control type="text" name="bank_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="pin">
                                    <Form.Label>pin</Form.Label>
                                    <Form.Control type="text" name="pin" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="bank_city">
                                    <Form.Label>bank_city</Form.Label>
                                    <Form.Control type="text" name="bank_city" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddStudentModal;