import axios from "axios";
const url = "http://localhost:8000/ ";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log("error while using api", err.message);
  }
};
