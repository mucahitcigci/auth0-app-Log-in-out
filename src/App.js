import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingOutlined } from "@ant-design/icons";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading)
    return (
      <div>
        {" "}
        <LoadingOutlined />
      </div>
    );
  return (
    <>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
