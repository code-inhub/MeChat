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
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log("error while calling getConversation api", err);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("error while calling newMessage api", error);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while calling getMessage api", error);
  }
};

export const uploadFile = async (data) => {
  try {
    await axios.post(`${url}/file/upload`, data);

    // let response = await axios.post(`${url}/file/upload`, data);
    // return response.data;
  } catch (error) {
    console.log("Error while calling uploadFile api..", error);
  }
};
