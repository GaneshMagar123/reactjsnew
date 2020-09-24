import React from "react";

export default function HelloUser(props) {
  return (
    <div>
      <h1>
        Hello {props.name} {props.surname}{" "}
      </h1>
    </div>
  );
}
