import React from "react";

function PropertyCard({
  property,
  deleteProperty,
  setCurrentProperty,
  buyerMode,
  markInterested,
  loggedInUser,
}) {
  const isSeller = loggedInUser && loggedInUser.role === "seller";

  const handleDelete = () => {
    deleteProperty(property.id);
  };

  const handleEdit = () => {
    setCurrentProperty(property);
  };

  return (
    <div className="property-card">
      <table>
        <tbody>
          <tr>
            <td>Place:</td>
            <td>{property.place}</td>
          </tr>
          <tr>
            <td>Area:</td>
            <td>{property.area} sq ft</td>
          </tr>
          <tr>
            <td>Bedrooms:</td>
            <td>{property.bedrooms}</td>
          </tr>
          <tr>
            <td>Bathrooms:</td>
            <td>{property.bathrooms}</td>
          </tr>
          <tr>
            <td>Nearby Hospital:</td>
            <td>{property.hospital}</td>
          </tr>
          <tr>
            <td>Nearby Colleges:</td>
            <td>{property.colleges}</td>
          </tr>
        </tbody>
      </table>
      {isSeller && (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      {buyerMode && (
        <button
          className="btn btn-primary"
          onClick={() => markInterested(property.id)}
        >
          I am Interested
        </button>
      )}
    </div>
  );
}

export default PropertyCard;
