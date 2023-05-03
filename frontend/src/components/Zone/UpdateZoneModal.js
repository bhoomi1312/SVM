import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { updateStudent } from '../../services/ZoneService';
import {  getStudents } from '../../services/CorporationService';
const UpdateStudentModal = (props) => {
const [corporations, setCorporations] = useState([]);

useEffect(() => {
getStudents().then((data) => setCorporations(data));
}, []);

const handleSubmit = (e) => {
e.preventDefault();
updateStudent(props.student.zone_id, e.target).then(
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
Update Zone
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
<Form.Group controlId='code'>
<Form.Label>Code</Form.Label>
<Form.Control
type='text'
name='code'
required
defaultValue={props.student.code}
placeholder=''
/>
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
 <Form.Group controlId='email_id'>
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type='email'
                    name='email_id'
                    required
                    defaultValue={props.student.email_id}
                    placeholder=''
                  />
                </Form.Group>
<Form.Group controlId='office_number'>
<Form.Label>Office Number</Form.Label>
<Form.Control
type='text'
name='office_number'
required
defaultValue={props.student.office_number}
placeholder=''
/>
</Form.Group>
<Form.Group controlId='corporation'>
<Form.Label>Corporation</Form.Label>
<Form.Control
as='select'
name='corporation'
defaultValue={props.student.corporation}
required
>
<option value=''>--Select Corporation--</option>
{corporations.map((corporation) => (
<option key={corporation.id} value={corporation.corporation_id}>
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