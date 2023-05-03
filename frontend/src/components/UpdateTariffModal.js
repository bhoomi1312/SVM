import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/TariffService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.tariff_ID, e.target)
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
                        Update Tariff
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row sm={2}>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="tariff_name">
                                    <Form.Label> tariff_name</Form.Label>
                                    <Form.Control type="text" name="name" required defaultValue={props.student.tariff_name} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="min_charge">
                                    <Form.Label> min_charge</Form.Label>
                                    <Form.Control type="text" name="min_charge" required defaultValue={props.student.min_charge} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="above_charge">
                                    <Form.Label>above_charge</Form.Label>
                                    <Form.Control type="text" name="above_charge" required defaultValue={props.student.above_charge} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="rate">
                                    <Form.Label>rate</Form.Label>
                                    <Form.Control type="text" name="rate" required defaultValue={props.student.rate} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="min_KL">
                                    <Form.Label>min_KL</Form.Label>
                                    <Form.Control type="text" name="min_KL" required defaultValue={props.student.min_KL} placeholder="" />
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