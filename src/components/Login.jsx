import React, { useContext, useState } from "react";
import "./Login.css";
import { AppContext } from "./Context";
const Login = () => {
    const { setIsLoggedIn } = useContext(AppContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
    const UserAuthentication = () => {
        if (user.name === "admin" && user.password === "admin@123") {
            setIsLoggedIn(true)
        } else {
            alert("Enter proper Credentials")
        }
    }
  return (
    <div className="login">
      <h2>Login Form</h2>
      <div>
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <button onClick={UserAuthentication}>Login</button>
    </div>
  );
};

export default Login;
