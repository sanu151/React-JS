// import React from 'react'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Employee Data useing Query Paramenter</h1>
      <p>
        Query parameters are used to pass additional information to a route in
        React Router. They are appended to the URL after a `?` and separated by
        `&`. The `useSearchParams` hook allows you to access and manipulate
        these query parameters. By using query parameters, you can create
        dynamic and flexible routes to filter, sort, or paginate data based on
        user input. For example, a search page might use query parameters to
        specify search terms or filters.
      </p>
      <button>
        <Link to="/users">Employee Data</Link>
      </button>
    </div>
  );
};

export default Home;
