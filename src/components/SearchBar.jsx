function SearchBar({
  search,
  setSearch,
  filterStatus,
  setFilterStatus
}) {
  return (
    <div>

      <input
        type="text"
        placeholder="Search Company..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        value={filterStatus}
        onChange={(e) =>
          setFilterStatus(e.target.value)
        }
      >
        <option>All</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Selected</option>
        <option>Rejected</option>
      </select>

    </div>
  );
}

export default SearchBar;