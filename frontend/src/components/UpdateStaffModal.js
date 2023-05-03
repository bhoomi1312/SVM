import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { updateStudent } from '../services/StaffService';
import {  getStudents } from '../services/DepartmentService';
import {  getWards } from '../services/WardService';
const UpdateStudentModal = (props) => {

  const [departments, setDepartments] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setDepartments(data));
    getWards().then((data) => setWards(data));
  }, []);

const handleSubmit = (e) => {
e.preventDefault();
updateStudent(props.student.staff_id, e.target).then(
(result) => {
alert(result);
props.setUpdated(true);
},
(error) => {
alert('Failed to Update');
}
);
};

return (
<div className='container'>
<Modal
{...props}
size='lg'
aria-labelledby='contained-modal-title-vcenter'
centered
>
<Modal.Header closeButton>
<Modal.Title id='contained-modal-title-vcenter'>
Update Staff
</Modal.Title>
</Modal.Header>
<Modal.Body>
<Row>
<Col sm={6}>
<Form onSubmit={handleSubmit}>
<Form.Group controlId='name'>
<Form.Label>Name</Form.Label>
<Form.Control
type='text'
name='name'
required
defaultValue={props.student.name}
placeholder=''
/>
</Form.Group>
<Form.Group controlId='city'>
<Form.Label>City</Form.Label>
<Form.Control
type='text'
name='city'
required
defaultValue={props.student.city}
placeholder=''
/>
<Form.Group controlId='email'>
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    required
                    defaultValue={props.student.email}
                    placeholder=''
                  />
                </Form.Group>
</Form.Group>
<Form.Group controlId='address'>
<Form.Label>Address</Form.Label>
<Form.Control
type='text'
name='address'
required
defaultValue={props.student.address}
placeholder=''
/>
</Form.Group>

<Form.Group controlId='phone_number'>
<Form.Label>Phone Number</Form.Label>
<Form.Control
type='text'
name='phone_number'
required
defaultValue={props.student.phone_number}
placeholder=''
/>
</Form.Group>


<Form.Group controlId='ward'>
<Form.Label>Ward</Form.Label>
<Form.Control
as='select'
name='ward'
defaultValue={props.student.ward}
required
>
<option value=''>--Select Ward--</option>
{wards.map((corporation) => (
<option key={corporation.id} value={corporation.ward_id}>
{corporation.name}
</option>
))}
</Form.Control>
</Form.Group>

<Form.Group controlId='dept'>
<Form.Label>Department</Form.Label>
<Form.Control
as='select'
name='dept'
defaultValue={props.student.dept}
required
>
<option value=''>--Select Department--</option>
{departments.map((corporation) => (
<option key={corporation.id} value={corporation.dept_id}>
{corporation.name}
</option>
))}
</Form.Control>
</Form.Group>

<Form.Group>
<p></p>
<Button variant='primary' type='submit'>
Submit
</Button>
</Form.Group>
</Form>
</Col>
</Row>
</Modal.Body>
<Modal.Footer>
<Button variant='danger' onClick={props.onHide}>
Close
</Button>
</Modal.Footer>
</Modal>
</div>
);
};

export default UpdateStudentModal;