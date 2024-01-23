import React from "react";
import { useState } from "react";
import "./Login.css";
import { useRef } from "react";

import axios from "axios";

const Login = (props) => {
  const formRef = useRef(null);

  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email");

    axios
      .post("/api/subscribe", {
        email,
      })
      .then((res) => {
        console.log(res.data.message);
        formRef.current.reset();
      })
      .catch((err) => {
      
        console.error(err.response?.data);
      });

    props.toggle();
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label className="username" id="email" name="email">
            Email:
            <input
              id="email"
              name="email"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <button type="submit">Get Enrolled</button>
        </form>
        <button className="close" onClick={props.toggle}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;