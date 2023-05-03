import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../services/TariffService';


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
                       Add Tariff
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="tariff_name">
                                    <Form.Label> tariff_name</Form.Label>
                                    <Form.Control type="text" name="tariff_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="min_charge">
                                    <Form.Label> min_charge</Form.Label>
                                    <Form.Control type="text" name="min_charge" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="above_charge">
                                    <Form.Label>above_charge</Form.Label>
                                    <Form.Control type="text" name="above_charge" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="rate">
                                    <Form.Label>rate</Form.Label>
                                    <Form.Control type="text" name="rate" required placeholder="" />
                            </Form.Group>
                             <Form.Group controlId="min_KL">
                                    <Form.Label>min_KL</Form.Label>
                                    <Form.Control type="text" name="min_KL" required placeholder="" />
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