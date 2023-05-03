import React, { useEffect, useState } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { addStudent } from '../services/DepartmentService';
import { getStudents } from '../services/CorporationService';

const AddDepartmentModal = (props) => {
  const [corporations, setCorporations] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setCorporations(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert('Failed to Add');
      }
    );
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Department
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="code">
                  <Form.Label>Code</Form.Label>
                  <Form.Control type="text" name="code" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" name="description" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="phone_number">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone_number" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="corporation">
                  <Form.Label>Corporation</Form.Label>
                  <Form.Control as="select" name="corporation" required>
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

export default AddDepartmentModal;
