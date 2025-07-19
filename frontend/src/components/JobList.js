import React, { useEffect, useState } from "react";
import axios from "axios";

function JobList({ token, setSelectedJob }) {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs", {
        headers: { "x-auth-token": token },
      })
      .then((res) => setJobs(res.data));
  }, [token]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
      headers: { "x-auth-token": token },
    });
    setJobs(jobs.filter((job) => job._id !== id));
  };

  const filteredJobs = filter
    ? jobs.filter((job) => job.status === filter)
    : jobs;

  return (
    <div className="job-list">
      <h2>Jobs</h2>
      <label>
        Filter by status:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      <ul>
        {filteredJobs.map((job) => (
          <li key={job._id}>
            <b>{job.company}</b> - {job.role} ({job.status})
            <button onClick={() => setSelectedJob(job)}>Edit</button>
            <button onClick={() => handleDelete(job._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList; 