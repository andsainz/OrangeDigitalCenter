import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { LoginService } from '../../services/LoginService';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [admin_password, setPassword] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const getToken = () => {
        return localStorage.getItem("token");
    };

    useEffect(() => {
        const token = getToken();
        if (token) {
          setTimeout(() => {
            window.location.href = 'http://localhost:5173/admin/home';
        }, 2000); 
        } else {
          console.log("El usuario no está autenticado")
        }
    }, []);

    const handleAuthenticatedRequest = async () => {
        try {
            const response = await fetch('http://localhost:3000/your-authenticated-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`,
                },
            });

        } catch (error) {
            console.error('Error en la solicitud autenticada:', error);
        }
    };

    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      if (email.trim() === '' || admin_password.trim() === '') {
          console.error('Por favor, completa todos los campos.');
          return;
      }
  
      try {
          const response = await LoginService.postLogin({ email, admin_password });
  
          if (!response) {
              console.error('La respuesta del servidor es indefinida.');
              return;
          }
  
          if (response.status === 200) {
              const data = await response.json();
              localStorage.setItem('token', data.token);
              console.log('Token almacenado:', data.token); 
            
          } else if (response.status === 401) {
              
              localStorage.removeItem('token');
          }
      } catch (error) {
          console.error('Error en la solicitud:', error);
      }
  };

    return (
        <div className="general-container" aria-label="Login">
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
                            value={admin_password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn-start" type="submit">
                        Iniciar sesión
                    </button>
                </form>
                <button onClick={handleAuthenticatedRequest}>
                    Realizar solicitud autenticada
                </button>
                {showErrorAlert && (
                    <Alert variant="dark">
                        El correo electrónico o la contraseña no coinciden.
                    </Alert>
                )}
                {showPasswordError && (
                    <Alert variant="dark">
                        Ha habido un error de inicio de sesión.
                    </Alert>
                )}
                <p>¿Aún no tienes cuenta?</p>
                <Link to="/register" className="register-button">
                    Regístrate
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
