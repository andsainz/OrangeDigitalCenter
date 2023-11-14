import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, user_password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login status:", data);

        if (data.message === "Welcome back!") {
          window.location.href = "/";
        } else {
          console.error('Email or password does not match');
          setShowErrorAlert(true);

          setTimeout(() => {
            setShowErrorAlert(false);
          }, 10000);
        }
      } else if (response.status === 401) {
        // Manejar el caso específico de contraseña incorrecta
        setShowPasswordError(true);

        setTimeout(() => {
          setShowPasswordError(false);
        }, 10000);
      }
    } catch (error) {
      console.error("Failed request:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Inicia sesión</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {showErrorAlert && (
        <div className="error-alert">Email or password does not match</div>
      )}
      {showPasswordError && (
        <div className="error-alert">Incorrect password</div>
      )}
      <p>¿Aún no tienes cuenta?</p>
      <button className="button-register">Regístrate</button>
    </div>
  );
};

export default LoginForm;
