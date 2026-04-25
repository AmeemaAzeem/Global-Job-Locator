import axios from "axios";

export const fetchJobs = (keyword, country) => {
  let url = `http://localhost:5000/api/jobs/search?keyword=${keyword}`;

  if (country && country.trim() !== "") {
    url += `&country=${country}`;
  }

  return axios.get(url);
};