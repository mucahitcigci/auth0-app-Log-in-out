import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONpretty from "react-json-pretty";
import { Divider } from "antd";
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <Divider orientation="center">{user.name}</Divider>
        <p>{user.email}</p>
        <img src={user.picture} alt={user.name} />
        <JSONpretty data={user} />
      </div>
    )
  );
};

export default Profile;
