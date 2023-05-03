import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/corporation/')
    .then(response => response.data)

}
export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/corporation/', {
    corporation_id: null,
    name:student.name.value,
    address:student.address.value,
    city:student.city.value,
    district:student.district.value,
    pincode:student.pincode.value,
    email:student.email.value,
    helpline:student.helpline.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/corporation/' + stuid + '/', {
    name:student.name.value,
    address:student.address.value,
    city:student.city.value,
    district:student.district.value,
    pincode:student.pincode.value,
    email:student.email.value,
    helpline:student.helpline.value
  })
   .then(response => response.data)
}

export function deleteStudent(corporation_id) {
  return axios.delete('http://127.0.0.1:8000/corporation/' + corporation_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}
