import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/tariff/')
    .then(response => response.data)

}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/tariff/', {
    tariff_ID: null,
    tariff_name:student.tariff_name.value,
    min_charge:student.min_charge.value,
    above_charge:student.above_charge.value,
    rate: student.rate.value,
    min_KL: student.min_KL.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/tariff/' + stuid + '/', {
     tariff_ID: null,
    tariff_name:student.tariff_name.value,
    min_charge:student.min_charge.value,
    above_charge:student.above_charge.value,
    rate: student.rate.value,
    min_KL: student.min_KL.value
  })
   .then(response => response.data)
}

export function deleteStudent(tariff_ID) {
  return axios.delete('http://127.0.0.1:8000/tariff/' + tariff_ID + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}
export const getCorporations = async () => {
  const response = await axios.get('http://127.0.0.1:8000/tariff/')
  return response.data;
};

