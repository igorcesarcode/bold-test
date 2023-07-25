import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const fetcher = (url) => api.get(url).then((res) => res.data);
