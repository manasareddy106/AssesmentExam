import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function PropertyList({
  properties,
  buyerMode,
  markInterested,
  deleteProperty,
  setCurrentProperty,
  loggedInUser,
}) {
  const isSeller = loggedInUser && loggedInUser.role === "seller";

  return (
    <div className="container mt-5">
      <h2>Properties</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Place</th>
            <th>Area</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Hospital Nearby</th>
            <th>Colleges Nearby</th>
            {isSeller && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.place}</td>
              <td>{property.area}</td>
              <td>{property.bedrooms}</td>
              <td>{property.bathrooms}</td>
              <td>{property.hospital}</td>
              <td>{property.colleges}</td>
              {isSeller && (
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => setCurrentProperty(property)}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteProperty(property.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </td>
              )}
              {buyerMode && (
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => markInterested(property.id)}
                  >
                    Interested
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;
