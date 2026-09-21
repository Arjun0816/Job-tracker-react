import { useState } from "react";
import JobCard from "./JobCard";

function JobList({
  jobs,
  setJobs,
  search,
  filterStatus
}) {

  const [editIndex, setEditIndex] =
    useState(null);

  const [editCompany, setEditCompany] =
    useState("");

  const deleteJob = (
    indexToDelete
  ) => {

    const updatedJobs =
      jobs.filter(
        (_, index) =>
          index !== indexToDelete
      );

    setJobs(updatedJobs);

  };

  const startEdit = (
    index,
    company
  ) => {

    setEditIndex(index);
    setEditCompany(company);

  };

  const updateJob = () => {

    const updatedJobs = [...jobs];

    updatedJobs[
      editIndex
    ].company = editCompany;

    setJobs(updatedJobs);

    setEditIndex(null);
    setEditCompany("");

  };

  const filteredJobs =
    jobs.filter((job) => {

      const matchesSearch =
        job.company
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        filterStatus === "All"
          ? true
          : job.status ===
            filterStatus;

      return (
        matchesSearch &&
        matchesStatus
      );

    });

  return (
    <div>

      <h2>Job List</h2>

{
  filteredJobs.length === 0 ? (

    <h3>No Jobs Found</h3>

  ) : (

    filteredJobs.map((job, index) => (

      <JobCard
        key={index}
        job={job}
        index={index}
        deleteJob={deleteJob}
        startEdit={startEdit}
        editIndex={editIndex}
        editCompany={editCompany}
        setEditCompany={setEditCompany}
        updateJob={updateJob}
      />

    ))

  )
}

    </div>
  );
}

export default JobList;