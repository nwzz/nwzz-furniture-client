import axios from "axios";

const client = axios.create({ baseURL: process.env.REACT_APP_API_URL_MAIN });

export const request = async ({ ...options }) => {
  const res = await client(options);
  return res;
};
