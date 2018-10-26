import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4">
        {" "}
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry, this page doesn't exist</p>
      <p className="text-secondary">Version 1.0.0</p>
      <Link className="nav-link" to="/">
        Go Back Home
      </Link>
    </div>
  );
}
