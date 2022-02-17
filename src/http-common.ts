import axios from "axios";
import axiosRetry from "axios-retry";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}api`,
  headers: {
    "Content-type": "application/json",
  },
});

axiosRetry(client, { retries: 3 });

export default client;
