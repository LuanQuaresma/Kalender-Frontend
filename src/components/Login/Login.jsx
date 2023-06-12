import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);

    try {
      const response = await fetch('http://localhost:3003/kalender/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        console.log('Autenticação bem-sucedida');
        window.location.href = '/produto'; // Redirect to /produto
      } else if (response.status === 401) {
        console.log('Credenciais inválidas');
      } else {
        console.log('Ocorreu um erro durante a autenticação');
      }
    } catch (error) {
      console.log('Ocorreu um erro ao fazer a solicitação');
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);

  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLoginSubmit}>
        <label className="login__label" htmlFor="email">E-mail:</label>
        <input
          className="login__input"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="login__label" htmlFor="password">Senha:</label>
        <input
          className="login__input"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login__button" type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
