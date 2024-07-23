import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <ul>
        <li>
          <Link to="homea">Home1</Link>
        </li>
        <li>
          <Link to="homeb">Home2</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Home;
