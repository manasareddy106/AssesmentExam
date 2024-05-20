import React, { useState } from "react";

function FilterForm({ setFilters }) {
  const [filterData, setFilterData] = useState({
    place: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    hospital: "",
    colleges: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(filterData);
    // alert("submitted");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <h2>Filter Properties</h2>
            <form onSubmit={handleSubmit}>
              <label>Place:</label>
              <input
                type="text"
                name="place"
                value={filterData.place}
                onChange={handleChange}
              />

              <label>Area:</label>
              <input
                type="text"
                name="area"
                value={filterData.area}
                onChange={handleChange}
              />

              <label>Bedrooms:</label>
              <input
                type="number"
                name="bedrooms"
                value={filterData.bedrooms}
                onChange={handleChange}
              />

              <label>Bathrooms:</label>
              <input
                type="number"
                name="bathrooms"
                value={filterData.bathrooms}
                onChange={handleChange}
              />

              <label>Hospital Nearby:</label>
              <input
                type="text"
                name="hospital"
                value={filterData.hospital}
                onChange={handleChange}
              />

              <label>Colleges Nearby:</label>
              <input
                type="text"
                name="colleges"
                value={filterData.colleges}
                onChange={handleChange}
              />

              <button type="submit">Apply Filters</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterForm;
