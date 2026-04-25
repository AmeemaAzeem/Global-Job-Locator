app.get("/api/jobs", async (req, res) => {
  try {
    // example: external API or database result
    const data = await fetchJobsFromAPI(); // your existing logic

    const formattedJobs = data.map((job, index) => ({
      id: index,
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      url: job.url
    }));

    res.json({
      success: true,
      count: formattedJobs.length,
      jobs: formattedJobs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});