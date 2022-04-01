import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/login";
import Private from "../pages/private";

const RequireAuth = ({ children }) => {
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
        <RequireAuth>
          <Private />
        </RequireAuth>
      }
    />
  </Routes>
);

export default AppRoutes;
