import React,{ useEffect, useState } from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../services/ZoneService';
import { getStudents } from '../services/CorporationService';

const AddStudentModalZone = (props) => {
 const [corporations, setCorporations] = useState([]);
 useEffect(() => {
        getStudents().then((data) => setCorporations(data));
    }, []);
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
                       Add Zone
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control type="text" name="name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="code">
                                    <Form.Label> Code </Form.Label>
                                    <Form.Control type="text" name="code" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="address">
                                    <Form.Label> Address</Form.Label>
                                    <Form.Control type="text" name="address" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="office_number">
                                    <Form.Label>Office Number</Form.Label>
                                    <Form.Control type="text" name="office_number" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="email_id">
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control type="email" name="email_id" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="corporation">
                                    <Form.Label>Corporation</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="corporation"
                                        required
                                    >
                                        <option value="">Select</option>
                                        {corporations.map((corp) => (
    <option key={corp.corporation_id} value={corp.corporation_id}>
        {corp.name}
    </option>
))}


                                    </Form.Control>
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

export default AddStudentModalZone;