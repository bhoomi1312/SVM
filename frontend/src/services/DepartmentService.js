import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/department/')
    .then(response => response.data)

}
export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/department/', {
    dept_id: null,
    name:student.name.value,
    code:student.code.value,
    email:student.email.value,
    description:student.description.value,
    phone_number:student.phone_number.value,
    corporation:student.corporation.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/department/' + stuid + '/', {
    dept_id: null,
    name:student.name.value,
    code:student.code.value,
    email:student.email.value,
    description:student.description.value,
    phone_number:student.phone_number.value,
    corporation:student.corporation.value
  })
   .then(response => response.data)
}

export function deleteStudent(dept_id) {
  return axios.delete('http://127.0.0.1:8000/department/' + dept_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}