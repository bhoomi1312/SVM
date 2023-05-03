import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents, deleteStudent } from '../../services/DesignationService';
import AddDesignationModal from "./AddDesignationModal";
import UpdateDesignationModal from "./UpdateDesignationModal";

const DesignationManage = () => {
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



const handleDelete = (e, desi_id) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteStudent(desi_id)
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
            Add Designation
            </Button>
            <AddDesignationModal show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddDesignationModal>
        </ButtonToolbar>
        <p></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Description </th>
            <th>Staff </th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
             <td>{stu.desi_id}</td>
                <td>{stu.name}</td>
                <td>{stu.code}</td>
                <td>{stu.description}</td>
                <td>{stu.staff_name}</td>
                <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.desi_id)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,stu)}>
                    <FaEdit />
              </Button>
              <UpdateDesignationModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateDesignationModal>
            </td>

            </tr>)}
        </tbody>
    </Table>


    </div>
  </div>
  );
};

export default DesignationManage;