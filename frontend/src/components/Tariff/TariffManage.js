import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents, deleteStudent } from '../../services/TariffService';
import AddStudentModal from "./AddTariffModal";
import UpdateStudentModal from "./UpdateTariffModal";

const TariffManage = () => {
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



const handleDelete = (e, Tariff_ID) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteStudent(Tariff_ID)
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
            Add Tariff
            </Button>
            <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddStudentModal>
        </ButtonToolbar>
        <p></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>

            <th>Name</th>
            <th>Min_charge </th>
            <th>Above_charge</th>
            <th>Rate</th>
             <th>Min_KL</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>

                <td>{stu.tariff_name}</td>
                <td>{stu.min_charge }</td>
                <td>{stu.above_charge }</td>
                <td>{stu.rate }</td>
                <td>{stu.min_KL }</td>
                <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.board_id)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,stu)}>
                    <FaEdit />
              </Button>
              <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateStudentModal>
            </td>

            </tr>)}
        </tbody>
    </Table>

    </div>
  </div>
  );
};

export default TariffManage;