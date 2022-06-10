import React, { useState } from "react";
import EntryList from "./EntryList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <EntryList filtered={filtered} />;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h4>Search </h4>
            <input
              className="form-control"
              type="search"
              placeholder="Search ..."
              onChange={handleChange}
            />
          </div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
        </div>

        {searchList()}
      </div>
    </>
  );
}

export default Search;
