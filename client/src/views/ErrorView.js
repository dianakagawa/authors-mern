import React from "react";
import {Link} from "react-router-dom";

const ErrorView = () => {
  return (
    <div>
      <h1>
        We're sorry, but we could not find the author you are looking for :'(
      </h1>
      <h2>Would you like to add this author to our database?</h2>
      <Link to="/new">Yes!</Link>
      <br />
      <Link to="/">Return to main page</Link>
    </div>
  );
};

export default ErrorView;
