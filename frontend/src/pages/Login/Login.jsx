
import './Login.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <h1>Inicia sesión</h1>
      <div>
        <input type="text" id="email" placeholder="Email" />
      </div>
      <div>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button type="submit">Iniciar sesión</button>
      <p>¿Aún no tienes cuenta?</p>
      <button className="button-register">Regístrate</button>
    </div>
  );
};

export default LoginForm;
