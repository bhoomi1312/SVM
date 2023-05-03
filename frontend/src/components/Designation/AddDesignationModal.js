import React, { useEffect, useState } from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addStudent } from '../../services/DesignationService';
import { getStudents } from '../../services/StaffService';

const AddDesignationModal = (props) => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    getStudents().then((data) => setStaffs(data));

  }, []);
     const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addStudent(e.target);
      alert(result);
      props.setUpdated(true);
      props.onHide();
    } catch (error) {
      alert('Failed to Add');
    }
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
                       Add Designation
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
                                    <Form.Label> Code</Form.Label>
                                    <Form.Control type="text" name="code" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="description" required placeholder="" />
                            </Form.Group>
                            <FormGroup controlId="staff">
                <FormLabel>Department</FormLabel>
                <FormControl as="select" name="staff" required>
                  <option value="">Select</option>
                  {staffs.map((dept) => (
                    <option key={dept.staff_id} value={dept.staff_id}>
                      {dept.name}
                    </option>
                  ))}
                </FormControl>
              </FormGroup>
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

export default AddDesignationModal;