import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/board/')
    .then(response => response.data)

}
export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/board/', {
    board_id: null,
    name:student.name.value,
    address:student.address.value,
    office_number:student.office_number.value,
    corporation: student.corporation.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/board/' + stuid + '/', {
    board_id: null,
    name:student.name.value,
    address:student.address.value,
    office_number:student.office_number.value,
    corporation: student.corporation.value
  })
   .then(response => response.data)
}

export function deleteStudent(board_id) {
  return axios.delete('http://127.0.0.1:8000/board/' + board_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}
export const getCorporations = async () => {
  const response = await axios.get('http://127.0.0.1:8000/board/')
  return response.data;
};

