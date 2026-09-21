import { useState } from "react";

function JobForm({ jobs, setJobs }) {

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const addJob = () => {

    const newJob = {
      company,
      role,
      status,
    };

    setJobs([...jobs, newJob]);

    setCompany("");
    setRole("");
    setStatus("Applied");

  };

  return (
    <div>

      <h2>Add Job</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>

      <button
        className="add-btn" 
        onClick={addJob}>
        Add Job
      </button>

    </div>
  );
}

export default JobForm;