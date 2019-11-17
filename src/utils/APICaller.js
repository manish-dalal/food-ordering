import axios from "axios";

import { APIhandler } from "./method";

const BASE_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
// const BASE_URL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json"

const APICaller = options => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: options.timeout || 1000 * 50
  });
  return axiosInstance(options);
};

export default process.env.REACT_APP_ENV === "production"
  ? APICaller
  : APIhandler;
