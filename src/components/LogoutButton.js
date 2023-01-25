import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Col, Row } from "antd";
import Profile from "./Profile";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <Row>
          <Col span={18} push={6}>
            <Button onClick={() => logout()}>Logout</Button>
          </Col>
          <Col span={6} pull={18}>
            <p>
              <Profile />
            </p>
          </Col>
        </Row>
      </div>
    )
  );
};

export default LogoutButton;
