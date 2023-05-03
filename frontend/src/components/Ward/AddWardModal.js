import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { addStudent } from '../../services/WardService';
import { getStudents } from '../../services/ZoneService';

const AddStudentModal = (props) => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setZones(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(e.target)
      .then(
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
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Ward</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name="city" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="zone">
                  <Form.Label>Zone</Form.Label>
                  <Form.Control as="select" name="zone" required>
                    <option value="">Select</option>
                    {zones.map((zone) => (
                      <option key={zone.zone_id} value={zone.zone_id}>
                        {zone.name}
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

export default AddStudentModal;
