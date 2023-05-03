import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/staff/')
    .then(response => response.data)

}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/staff/', {
  staff_id: null,
    name:student.name.value,
    city:student.city.value,
    email:student.email.value,
    phone_number: student.phone_number.value,
    address:student.address.value,
    ward:student.ward.value,
    dept: student.dept.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/staff/' + stuid + '/', {
   staff_id: null,
    name:student.name.value,
    city:student.city.value,
    email:student.email.value,
    phone_number: student.phone_number.value,
    address:student.address.value,
    ward:student.ward.value,
    dept: student.dept.value
  })
   .then(response => response.data)
}

export function deleteStudent(staff_id) {
  return axios.delete('http://127.0.0.1:8000/staff/' + staff_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}
export const getCorporations = async () => {
  const response = await axios.get('http://127.0.0.1:8000/staff/')
  return response.data;
};

