# Global Job Locator

## Project Overview

Global Job Locator is a full-stack web application that allows users to search for jobs globally. Users can search jobs by keyword, view job listings, and access detailed job information. The project is designed to simulate real-world job platforms like Indeed or LinkedIn in a simplified form.

Live Project Link:
https://global-job-locator.netlify.app/

Backend project deployed by railway Link:
https://confident-contentment-production-52ca.up.railway.app/

---

## Features

- Job search by keyword
- Display of job listings from API
- Job detail view
- Backend API integration
- Error handling for failed requests and empty results
- Responsive frontend design

---

## Tech Stack

Frontend:
- React.js
- Axios
- React Router DOM
- CSS

Backend:
- Node.js
- Express.js
- REST API

Other Tools:
- Postman (for API testing)
- Git and GitHub (version control)
- Netlify (frontend deployment)

---

## Project Structure

Frontend:
- src/
  - components/
  - pages/
  - App.js
  - index.js

Backend:
- server.js
- routes/
- controllers/
- models/

---

## API Endpoints

### Get All Jobs
GET /api/jobs

### Search Jobs
GET /api/jobs/search?keyword=react

Response Example:
{
  "success": true,
  "data": [jobs]
}

Error Response:
{
  "success": false,
  "message": "No jobs found"
}

---

## Testing

API testing was done using Postman:

- /api/jobs
- /api/jobs/search?keyword=react

All endpoints were tested for:
- Valid response
- Empty results
- Error handling

---
