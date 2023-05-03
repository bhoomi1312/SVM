import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';

import { updateStudent } from '../../services/DesignationService';
import { getStudents } from '../../services/StaffService';

const UpdateStudentModal = (props) => {
const [corporations, setCorporations] = useState([]);

useEffect(() => {
getStudents().then((data) => setCorporations(data));
}, []);

const handleSubmit = (e) => {
e.preventDefault();
updateStudent(props.student.desi_id, e.target).then(
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
Update Designation
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


<Form.Group controlId='description'>
<Form.Label>Description</Form.Label>
<Form.Control
type='text'
name='description'
required
defaultValue={props.student.description}
placeholder=''
/>
</Form.Group>
<Form.Group controlId='staff'>
<Form.Label>Staff</Form.Label>
<Form.Control
as='select'
name='staff'
defaultValue={props.student.staff}
required
>
<option value=''>--Select Staff--</option>
{corporations.map((corporation) => (
<option key={corporation.id} value={corporation.staff_id}>
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