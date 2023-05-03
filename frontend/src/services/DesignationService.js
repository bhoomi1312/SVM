import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/designation/')
    .then(response => response.data)

}
export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/designation/', {
    desi_id: null,
    name:student.name.value,
    code:student.code.value,
    description:student.description.value,
    staff:student.staff.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/designation/' + stuid + '/', {
    name:student.name.value,
    code:student.code.value,
    description:student.description.value,
    staff:student.staff.value
  })
   .then(response => response.data)
}

export function deleteStudent(desi_id) {
  return axios.delete('http://127.0.0.1:8000/designation/' + desi_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}
