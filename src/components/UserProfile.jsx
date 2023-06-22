import React, { useState } from "react";
import { Link, Route, Routes, Router } from "react-router-dom";
import Debit from "./Debit";
import Credit from "./Credit";
import TransactionPage from "./TransactionPage";

const UserProfile = () => { //two consts for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => { //handles the username simply by setting it
    setUsername(event.target.value);
  };

  const handlePassword = (event) => { //handles the password simply by setting it
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2 id= "profile" >User Profile</h2>

      <h3 id = "credentials">Please enter your credentials: ANYTHING GOES</h3>
      <div>
        <input
          id = "usern"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsername}
        />
      </div>

      <div>
        <input
          id = "pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <div>
        <button>
          <Link to="/TransactionPage/">Login</Link>
        </button>
      </div>

    </div>
  );
};


<Routes>
        <Route path="/TransactionPage" element={<TransactionPage />} />
        <Route path="/Debit" element={<Debit />} />
        <Route path="/Credit" element={<Credit />} />
      </Routes>

export default UserProfile;
