import axios from "axios";
import axiosRetry from "axios-retry";

const client = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

axiosRetry(client, { retries: 3 });

export default client;
