import React from "react";
import { Link } from "react-router-dom";
import fakeData from "./getUserData"

function UserList({ match }) {
  return (
    <div>
      <h2>UserList</h2>
      <ol >
        {fakeData.map((value, index) => (
          <li key={index}>
            <Link to={`${match.url}/${value.id}`}>{value.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;