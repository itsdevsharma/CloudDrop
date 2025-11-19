import { useState } from "react";
import API from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import '../styles/Register.css';

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/api/user", form);
    localStorage.setItem("token", res.data.token);
    navigate("/upload");
  };

  return (
    <div className="registerpage">
      <h1>CloudDrop</h1>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

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

        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate("/login")}>Login instead</button>
    </div>
  );
}

export default Register;
