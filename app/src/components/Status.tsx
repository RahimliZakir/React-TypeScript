import React from "react";

//* Advanced Props - Props with Limited Values.
type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status: React.FC<StatusProps> = ({ status }) => {
  let message;

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "error") {
    message = "Error fetching data.";
  } else {
    message = "Data fetched successfully.";
  }

  return <div>Status - {status}</div>;
};

export default Status;
