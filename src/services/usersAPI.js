import axios from 'axios';

axios.defaults.baseURL = 'https://63c02b6d0cc56e5fb0e849b0.mockapi.io';

export const getUsers = async (page = 1) => {
  const { data } = await axios.get(`/users?page=${page}&limit=3`);
  return data;
};
