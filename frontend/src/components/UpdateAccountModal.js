import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/AccountService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.account_id, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update ");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Account Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="account_name">
                                    <Form.Label> account_name</Form.Label>
                                    <Form.Control type="text" name="account_name" required defaultValue={props.student.account_name} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="account_number">
                                    <Form.Label>account_number</Form.Label>
                                    <Form.Control type="text" name="account_number" required defaultValue={props.student.account_number} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="branch_name">
                                    <Form.Label>branch_name</Form.Label>
                                    <Form.Control type="text" name="branch_name" required defaultValue={props.student.branch_name} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="bank_name">
                                    <Form.Label>bank_name</Form.Label>
                                    <Form.Control type="text" name="bank_name" required defaultValue={props.student.bank_name} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="pin">
                                    <Form.Label>pin</Form.Label>
                                    <Form.Control type="text" name="pin" required defaultValue={props.student.pin} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="bank_city">
                                    <Form.Label>bank_city</Form.Label>
                                    <Form.Control type="text" name="bank_city" required defaultValue={props.student.bank_city} placeholder="" />
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


 export default UpdateStudentModal;