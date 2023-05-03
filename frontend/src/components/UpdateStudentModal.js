import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/CorporationService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.corporation_id, e.target)
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
                        Update  Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control type="text" name="name" required defaultValue={props.student.name} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="address">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control type="text" name="address" required defaultValue={props.student.address} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" name="city" required defaultValue={props.student.city} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="district">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control type="text" name="district" required defaultValue={props.student.district} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="pincode">
                                    <Form.Label>Pincode</Form.Label>
                                    <Form.Control type="text" name="pincode" required defaultValue={props.student.pincode} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" required defaultValue={props.student.email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="helpline">
                                    <Form.Label>Helpline</Form.Label>
                                    <Form.Control type="text" name="helpline" required defaultValue={props.student.helpline} placeholder="" />
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