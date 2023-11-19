import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { LoginService } from '../../services/Loginservice';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginService.postLogin({ email, user_password });
  
      if (response.status === 200) { 
        const data = await response.json();
        console.log("Estado de inicio de sesión:", data);
  
        if (data.message === "Welcome back!") {
          window.location.href = "/";
        } else {
          console.error('El correo electrónico o la contraseña no coinciden');
          setShowErrorAlert(true);
  
          setTimeout(() => {
            setShowErrorAlert(false);
          }, 10000);
        }
      } else if (response.status === 401) {
  
        setShowPasswordError(true);
  
        setTimeout(() => {
          setShowPasswordError(false);
        }, 10000);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
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
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn-start' type="submit">Iniciar sesión</button>
      </form>
      {showErrorAlert && (
        <div className="error-alert">El correo electrónico o la contraseña no coinciden</div>
      )}
      {showPasswordError && (
        <div className="error-alert">Contraseña incorrecta</div>
      )}
      <p>¿Aún no tienes cuenta?</p>
      <Link to="/register" className="button-register">
        <button className="styled-button">Regístrate</button>
      </Link>
    </div>
  );
};

export default LoginForm;
