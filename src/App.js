import React, { useState, useEffect } from "react";
import PropertyForm from "./components/PropertyForm";
import PropertyList from "./components/PropertyList";
import FilterForm from "./components/FilterForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [filters, setFilters] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Static data for buyer's property list
  const buyerProperties = [
    {
      id: "1",
      place: "City A",
      area: 1200,
      bedrooms: 3,
      bathrooms: 2,
      hospital: "Hospital A",
      colleges: "College A, College B",
    },
    {
      id: "2",
      place: "City B",
      area: 1500,
      bedrooms: 4,
      bathrooms: 2,
      hospital: "Hospital B",
      colleges: "College C, College D",
    },
    // Add more properties as needed
  ];

  const addProperty = (property) => {
    property.id = Date.now().toString();
    property.owner = loggedInUser.email;
    setProperties([...properties, property]);
  };

  const updateProperty = (updatedProperty) => {
    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
    setCurrentProperty(null);
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  const markInterested = (id) => {
    const property = properties.find((property) => property.id === id);
    // const owner = users.find((user) => user.email === property.owner);
    alert("successfully clicked in i'm intrested");
  };

  const filterProperties = () => {
    // Combine static buyerProperties with dynamic properties
    const combinedProperties = [...buyerProperties, ...properties];

    const filteredProperties = combinedProperties.filter((property) => {
      return (
        (!filters.place || property.place.includes(filters.place)) &&
        (!filters.area || property.area.toString().includes(filters.area)) &&
        (!filters.bedrooms || property.bedrooms >= filters.bedrooms) &&
        (!filters.bathrooms || property.bathrooms >= filters.bathrooms) &&
        (!filters.hospital || property.hospital.includes(filters.hospital)) &&
        (!filters.colleges || property.colleges.includes(filters.colleges))
      );
    });

    if (filteredProperties.length === 0) {
      return [{ id: "0", message: "No properties match the applied filters." }];
    }

    return filteredProperties;
  };

  const handleLogin = (email, phone) => {
    const user = users.find(
      (user) => user.email === email && user.phone === phone
    );
    if (user) {
      setLoggedInUser(user);
      setLoginError("");
    } else {
      setLoginError("Invalid email or phone number");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleRegister = (newUser) => {
    const userExists = users.some((user) => user.email === newUser.email);
    if (userExists) {
      setLoginError("User with this email already exists");
      return;
    }
    setUsers([...users, newUser]);
    setShowLogin(true);
    setLoginError("");
  };

  return (
    <div className="App mt-3">
      <h1 className="mt-5">Property Management</h1>
      {!loggedInUser ? (
        showLogin ? (
          <>
            <LoginForm
              handleLogin={handleLogin}
              loginError={loginError}
              setShowLogin={setShowLogin}
            />
          </>
        ) : (
          <>
            <RegisterForm
              handleRegister={handleRegister}
              setShowLogin={setShowLogin}
            />
          </>
        )
      ) : (
        <>
          <h2>Welcome, {loggedInUser.firstName}</h2>
          <button className="btn-width" onClick={handleLogout}>
            Logout
          </button>
          {loggedInUser.role === "buyer" ? (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mt-3">
                    <FilterForm setFilters={setFilters} />
                  </div>
                  <div className="col-lg-8 mt-3">
                    {/* Pass static buyerProperties data to PropertyList */}
                    <PropertyList
                      properties={buyerProperties}
                      buyerMode={true}
                      markInterested={markInterested}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Seller's view
            <>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 mt-3">
                    <div className="card">
                      <PropertyForm
                        addProperty={addProperty}
                        updateProperty={updateProperty}
                        currentProperty={currentProperty}
                        setCurrentProperty={setCurrentProperty}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 mt-3">
                    <PropertyList
                      properties={properties.filter(
                        (property) => property.owner === loggedInUser.email
                      )}
                      deleteProperty={deleteProperty}
                      setCurrentProperty={setCurrentProperty}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
