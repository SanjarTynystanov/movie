import React, { useState } from "react";
import "./Register.css"

const Register = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert(`Welcome, ${formData.name}! Registration Successful.`);
    setFormData({ name: '', email: '', password: '' });
    setCurrentPage("home"); // Переключение на главную страницу
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;

