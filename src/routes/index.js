import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/login";
import Private from "../pages/private";

const RequireApp = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/private"
      element={
        <RequireApp>
          <Private />
        </RequireApp>
      }
    />
  </Routes>
);

export default AppRoutes;
