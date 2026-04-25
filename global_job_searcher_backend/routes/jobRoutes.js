const express = require("express");
const router = express.Router();
const { getJobs } = require("../services/jobService");

// 🔹 SAFE JOB NORMALIZER
const formatJobs = (jobs) => {
  return jobs.map((job, index) => ({
    id: index,
    title: job.title || job.position || "No title",
    company: job.company_name || "Unknown company",
    location: job.candidate_required_location || "Remote",
    type: job.job_type || "Not specified",
    url: job.url || "#",
  }));
};

// 🔹 GET ALL JOBS (optional filter by country)
router.get("/", async (req, res) => {
  try {
    const jobs = await getJobs();

    const country = (req.query.country || "").toLowerCase().trim();

    let filteredJobs = jobs;

    if (country) {
      filteredJobs = jobs.filter((job) =>
        (job.candidate_required_location || "")
          .toLowerCase()
          .includes(country)
      );
    }

    const cleanJobs = formatJobs(filteredJobs);

    return res.json({
      success: true,
      count: cleanJobs.length,
      data: cleanJobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
});

// 🔹 SEARCH ROUTE (KEYWORD + COUNTRY + FALLBACK)
router.get("/search", async (req, res) => {
  try {
    const keyword = (req.query.keyword || "").toLowerCase().trim();
    const country = (req.query.country || "").toLowerCase().trim();

    const jobs = await getJobs();

    const keywords = keyword.split(" ").filter(Boolean);

    let filtered = jobs.filter((job) => {
      const title = (job.title || job.position || "").toLowerCase();
      const company = (job.company_name || "").toLowerCase();
      const location = (job.candidate_required_location || "").toLowerCase();

      const keywordMatch =
        keywords.length === 0 ||
        keywords.some(
          (word) =>
            title.includes(word) ||
            company.includes(word) ||
            location.includes(word)
        );

      const countryMatch =
        !country || location.includes(country);

      return keywordMatch && countryMatch;
    });

    // 🔥 FALLBACK SYSTEM
    let message = "";

    if (filtered.length === 0) {
      message = "No exact matches found. Showing other available jobs.";

      // show first 10 jobs instead
      filtered = jobs.slice(0, 10);
    }

    const cleanJobs = formatJobs(filtered);

    return res.json({
      success: true,
      count: cleanJobs.length,
      message,
      data: cleanJobs,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
});

module.exports = router;