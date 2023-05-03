import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/account/')
    .then(response => response.data)

}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/account/', {
    account_id: null,
    account_name:student.account_name.value,
    account_number:student.account_number.value,
    branch_name:student.branch_name.value,
    bank_name:student.bank_name.value,
    pin:student.pin.value,
    bank_city:student.bank_city.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/account/' + stuid + '/', {
   account_id: null,
    account_name:student.account_name.value,
    account_number:student.account_number.value,
    branch_name:student.branch_name.value,
    bank_name:student.bank_name.value,
    pin:student.pin.value,
    bank_city:student.bank_city.value
  })
   .then(response => response.data)
}

export function deleteStudent(account_id) {
  return axios.delete('http://127.0.0.1:8000/account/' + account_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}
