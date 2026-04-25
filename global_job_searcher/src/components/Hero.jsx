import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;

    navigate(`/jobs?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <div className="hero">
      <div className="wave-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">

          <h1>
            <span className="blue">Discover.</span><br />
            <span className="cyan">Connect.</span><br />
            <span className="purple">Grow.</span>
          </h1>

          <p>
            Find your dream job from top companies around the world.
          </p>

          <div className="search-bar">
            <input
              placeholder="Search jobs..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <button className="search-button" onClick={handleSearch}>
              Search Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}