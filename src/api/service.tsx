import axios from "axios";

const API_URL = process.env.API_URL;

export const getDashboardData = async () => {
  return axios.get(`https://demotrainiq.com/case/dashboard`);
};
