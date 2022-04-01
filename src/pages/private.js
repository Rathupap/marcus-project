import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="private">
      <h1>Hello, {auth.user?.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Private;
