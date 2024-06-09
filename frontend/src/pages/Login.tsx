import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default LoginPage;
