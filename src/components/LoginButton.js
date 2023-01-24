import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Col, Divider, Row } from "antd";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        <Row>
          <Col span={18} push={6}>
            <Button onClick={() => loginWithRedirect()}>Login</Button>
          </Col>
          <Col span={6} pull={18}>
            <Divider orientation="center">Welcome</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo.
            </p>
          </Col>
        </Row>
      </div>
    )
  );
};

export default LoginButton;
