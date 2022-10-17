import axios from "axios";

// A function to set count value on the server
export function setCount(amount = 1) {
  return axios.post('/count/add', { amount })
}

// A function to get count value on the server
export function fetchCount() {
  return axios.get('/count')
}
