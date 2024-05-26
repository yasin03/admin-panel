import axios from "axios";

export const getDashboardData = async () => {
  return axios.get(`https://demotrainiq.com/case/dashboard`);
};
