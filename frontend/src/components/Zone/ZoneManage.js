import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents, deleteStudent } from '../../services/ZoneService';
import AddStudentModalZone from "./AddZoneModal";
import UpdateStudentModalZone from "./UpdateZoneModal";

const ZoneManage = () => {
  const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
   let mounted = true;
   if(students.length && !isUpdated) {
    return;
    }
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data);
       }
     })
   return () => {
      mounted = false;
      setIsUpdated(false);
   }
 }, [isUpdated, students])
 const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
};
const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(stu);
};



const handleDelete = (e, zone_id) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteStudent(zone_id)
        .then((result)=>{
            alert(result);
            setIsUpdated(true);
        },
        (error)=>{
            alert("Failed to Delete ");
        })
    }
};
let AddModelClose=()=>setAddModalShow(false);
let EditModelClose=()=>setEditModalShow(false);

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
    <ButtonToolbar>
            <Button variant="primary" onClick={handleAdd}>
            Add Zone
            </Button>
            <AddStudentModalZone show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddStudentModalZone>
        </ButtonToolbar>
        <p></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>

            <th>Name</th>
            <th>Code</th>
            <th>Address </th>
            <th>Office Number </th>
            <th>Email ID </th>
            <th>Corporation</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>

                <td>{stu.name}</td>
                <td>{stu.code}</td>
                <td>{stu.address}</td>
                <td>{stu.office_number}</td>
                <td>{stu.email_id}</td>
                <td>{stu.corporation_name}</td>
                <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.zone_id)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,stu)}>
                    <FaEdit />
              </Button>
              <UpdateStudentModalZone show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateStudentModalZone>
            </td>

            </tr>)}
        </tbody>
    </Table>

    </div>
  </div>
  );
};

export default ZoneManage;