import React, { useState } from "react";

function LoginForm({ handleLogin, loginError, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, phone);
  };

  return (
    <div className="container">
      <div className="col-lg-12 col-sm-12 login-width">
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-2 mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className=" mb-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="submit" className="mt-2 mb-2">
              Login
            </button>
          </form>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <span
            className="mt-2 mb-2"
            onClick={() => setShowLogin(false)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Don't have an account? Register here
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
