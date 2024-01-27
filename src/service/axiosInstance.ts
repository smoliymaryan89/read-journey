import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;

export const instance = axios.create({
  baseURL: VITE_BASE_URL,
});
