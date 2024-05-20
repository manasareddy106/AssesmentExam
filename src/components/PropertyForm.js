import React, { useState, useEffect } from "react";

function PropertyForm({
  addProperty,
  updateProperty,
  currentProperty,
  setCurrentProperty,
}) {
  const [formData, setFormData] = useState({
    id: "",
    place: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    hospital: "",
    colleges: "",
  });

  useEffect(() => {
    if (currentProperty) {
      setFormData(currentProperty);
    }
  }, [currentProperty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProperty) {
      updateProperty(formData); // Call the updateProperty function with updated data
    } else {
      addProperty(formData); // Call the addProperty function with new property data
    }
    // Reset form data and currentProperty state after submission
    setFormData({
      id: "",
      place: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      hospital: "",
      colleges: "",
    });
    setCurrentProperty(null);
  };

  return (
    <div>
      <h2>{currentProperty ? "Update Property" : "Add Property"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Place:</label>
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
        />

        <label>Area:</label>
        <input
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
        />

        <label>Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />

        <label>Bathrooms:</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />

        <label>Hospital Nearby:</label>
        <input
          type="text"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          required
        />

        <label>Colleges Nearby:</label>
        <input
          type="text"
          name="colleges"
          value={formData.colleges}
          onChange={handleChange}
          required
        />

        <button type="submit">{currentProperty ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default PropertyForm;
