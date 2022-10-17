import axios from "axios";

// A function to set count value on the server
export function getList() {
  return axios.get("/cake/list");
}

// A function to get count value on the server
export function fetchCount() {
  return axios.get("/count");
}
