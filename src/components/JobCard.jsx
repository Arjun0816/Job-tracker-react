function JobCard({
  job,
  index,
  deleteJob,
  startEdit,
  editIndex,
  editCompany,
  setEditCompany,
  updateJob
}) {

  return (
    <div className="job-card">

      {
        editIndex === index ? (
          <div>

            <input
              type="text"
              value={editCompany}
              onChange={(e) =>
                setEditCompany(
                  e.target.value
                )
              }
            />

            <button
              className="update-btn"
              onClick={updateJob}
            >
              Update
            </button>

          </div>
        ) : (
          <div>

            <h3>{job.company}</h3>

            <p>Role: {job.role}</p>

            <p>
            Status:
            <span className=
            {
              job.status.toLowerCase()
              } 
            >
              {" "}
              {job.status}
            </span>

            </p>

            <button
              className="edit-btn"
              onClick={() =>
                startEdit(
                  index,
                  job.company
                )
              }
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                deleteJob(index)
              }
            >
              Delete
            </button>

          </div>
        )
      }

    </div>
  );
}

export default JobCard;