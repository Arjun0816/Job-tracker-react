import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const totalJobs = jobs.length;

  const appliedJobs = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interviewJobs = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const selectedJobs = jobs.filter(
    (job) => job.status === "Selected"
  ).length;

  const rejectedJobs = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  return (
    <div>
      <h1>Job Tracker App</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Jobs</h3>
          <p>{totalJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <p>{appliedJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Interview</h3>
          <p>{interviewJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Selected</h3>
          <p>{selectedJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>{rejectedJobs}</p>
        </div>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <JobForm
        jobs={jobs}
        setJobs={setJobs}
      />

      <JobList
        jobs={jobs}
        setJobs={setJobs}
        search={search}
        filterStatus={filterStatus}
      />
    </div>
  );
}

export default App;