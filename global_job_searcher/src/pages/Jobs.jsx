import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchJobs } from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword") || "";

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);

        const res = await fetchJobs(keyword, country);

        setJobs(res.data.data || []);
        setMessage(res.data.message || "");

      } catch (error) {
        console.log(error);
        setJobs([]);
        setMessage("");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [keyword, country]);

  return (
    <div className="jobs-container">

      <h1>Job Results</h1>

      {/* 🔥 FILTER UI */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Filter by country (e.g. USA, Pakistan)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      {/* 🔥 FALLBACK MESSAGE */}
      {message && (
        <p style={{ color: "orange" }}>
          {message}
        </p>
      )}

      {/* LOADING */}
      {loading && <p>Loading jobs...</p>}

      {/* EMPTY */}
      {!loading && jobs.length === 0 && (
        <p>No jobs found</p>
      )}

      {/* JOB LIST */}
      {!loading && jobs.length > 0 && (
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>

              <a href={job.url} target="_blank" rel="noreferrer">
                <button>Apply</button>
              </a>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}