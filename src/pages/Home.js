import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/signin">
        <h1>Sign In</h1>
      </Link>
      <Link to="/signup">
        <h1>SignUp</h1>
      </Link>
    </div>
  )
}
