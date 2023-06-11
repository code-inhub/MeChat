import axios from "axios";
const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log("error while using addUser api", err.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("error while calling getusers api", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (err) {
    console.log("error while setting conversation", err.message);
  }
};
