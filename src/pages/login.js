import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth.login(email);
    navigate("/private");
  };

  return (
    <div className="login">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!email || !password} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
