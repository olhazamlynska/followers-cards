import axios from 'axios';

axios.defaults.baseURL = 'https://63c02b6d0cc56e5fb0e849b0.mockapi.io';

export const getUsers = async (page = 1) => {
  const { data } = await axios.get(`/users?page=${page}&limit=6`);
  return data;
};

export const getUsersCount = async () => {
  const { data } = await axios.get(`/users`);
  return data.length;
};

export const updateUser = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
};
