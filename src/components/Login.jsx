import { useState } from "react";
import API from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await API.post("/api/user/login", form);
    localStorage.setItem("token", res.data.token);

    navigate("/upload");
  };

  return (
    <div className="loginpage">
      <h1>CloudDrop</h1>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
