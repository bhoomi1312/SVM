import axios from 'axios';

export function getWards() {
  return axios.get('http://127.0.0.1:8000/ward/')
    .then(response => response.data)

}
export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/ward/', {
    ward_id: null,
    name:student.name.value,
    city:student.city.value,
    zone:student.zone.value,

  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/ward/' + stuid + '/', {
    ward_id: null,
    name:student.name.value,
    city:student.city.value,
    zone:student.zone.value,
  })
   .then(response => response.data)
}

export function deleteStudent(ward_id) {
  return axios.delete('http://127.0.0.1:8000/ward/' + ward_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}