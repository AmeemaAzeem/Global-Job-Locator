import axios from "axios";

const BASE_URL = "https://confident-contentment-production-52ca.up.railway.app";

export const fetchJobs = (keyword, country) => {
  return axios.get(
    `${BASE_URL}/api/jobs/search?keyword=${keyword}&country=${country}`
  );
};