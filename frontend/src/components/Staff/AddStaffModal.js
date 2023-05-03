import React, { useEffect, useState } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { addStudent } from '../../services/StaffService';
import { getStudents } from '../../services/DepartmentService';
import { getWards } from '../../services/WardService';

const AddStaffModal = (props) => {
  const [departments, setDepartments] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setDepartments(data));
    getWards().then((data) => setWards(data));
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

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Staff</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup controlId="name">
                <FormLabel>Name</FormLabel>
                <FormControl type="text" name="name" required placeholder="" />
              </FormGroup>
              <FormGroup controlId="city">
                <FormLabel>City</FormLabel>
                <FormControl type="text" name="city" required placeholder="" />
              </FormGroup>
              <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl type="email" name="email" required placeholder="" />
              </FormGroup>
              <FormGroup controlId="phone_number">
                <FormLabel>Phone number</FormLabel>
                <FormControl type="text" name="phone_number" required placeholder="" />
              </FormGroup>
              <FormGroup controlId="address">
                <FormLabel>Address</FormLabel>
                <FormControl type="text" name="address" required placeholder="" />
              </FormGroup>
              <FormGroup controlId="ward">
                <FormLabel>Ward</FormLabel>
                <FormControl as="select" name="ward" required>
                  <option value="">Select</option>
                  {wards.map((ward) => (
                    <option key={ward.ward_id} value={ward.ward_id}>
                      {ward.name}
                    </option>
                  ))}
                </FormControl>
              </FormGroup>
              <FormGroup controlId="dept">
                <FormLabel>Department</FormLabel>
                <FormControl as="select" name="dept" required>
                  <option value="">Select</option>
                  {departments.map((dept) => (
                    <option key={dept.dept_id} value={dept.dept_id}>
                      {dept.name}
                    </option>
                  ))}
                </FormControl>
              </FormGroup>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddStaffModal;
