import React, { useState } from "react";

function RegisterForm({ handleRegister, setShowLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-4"></div>
        <div className="col-lg-4 col-sm-4">
          <div className="card">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                className="mt-2 mb-2"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                className=" mb-2"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className=" mb-2"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className=" mb-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <select
                name="role"
                className=" mb-2"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              <button type="submit">Register</button>
            </form>
            <span
              className=" mb-2 mt-2"
              onClick={() => setShowLogin(true)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Already have an account? Login here
            </span>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4"></div>
      </div>
    </div>
  );
}

export default RegisterForm;
