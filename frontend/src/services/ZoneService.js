import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/zone/')
    .then(response => response.data)

}
export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/zone/', {
    zone_id: null,
    name:student.name.value,
    address:student.address.value,
    code:student.code.value,
    office_number:student.office_number.value,
    email_id:student.email_id.value,
    corporation:student.corporation.value,

  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/zone/' + stuid + '/', {
    zone_id: null,
    name:student.name.value,
    address:student.address.value,
    code:student.code.value,
    office_number:student.office_number.value,
    email_id:student.email_id.value,
    corporation:student.corporation.value,
  })
   .then(response => response.data)
}

export function deleteStudent(zone_id) {
  return axios.delete('http://127.0.0.1:8000/zone/' + zone_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}