const axios = require("axios");

const getJobs = async () => {
  try {
    const response = await axios.get(process.env.API_URL);
    return response.data.jobs;
  } catch (error) {
    console.error("API Error:", error.message);
    throw new Error("Failed to fetch jobs from external API");
  }
};

module.exports = { getJobs };