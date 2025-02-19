import React from "react";

import { User } from "../lib/types";
type UserCardProps = {
  user: User;
};
function UserCard({ user }: UserCardProps) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "inline-block",
        fontSize: "13px",
      }}
    >
      <p>
        <strong>user name: </strong>
        {user.name}
      </p>
      <p>
        <strong>user id: </strong>
        {user.id}
      </p>
      <p>
        <strong>user email: </strong>
        {user.email ? user.email : "Email is not available"}
      </p>
    </div>
  );
}

export default UserCard;
