import React from "react";

export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h3>Private Profile Component. Name is {name}.</h3>
    </div>
  );
};

export default Profile;
