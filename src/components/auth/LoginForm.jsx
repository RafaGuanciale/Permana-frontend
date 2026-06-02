import { Link } from "react-router-dom";
import { useState } from "react";
import googleIcon from "../../images/icons/social-media/google-logo.jpg";

function LoginForm({ handleRegistration }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <div className="registerPage__container__right">
      <p className="registerPage__right__title">Bem-vindo de volta</p>
      <p className="registerPage__right__subtitle">
        Entre na sua conta para continuar
      </p>
      <span className="registerPage__google__label">Acesso rápido</span>
      <button className="registerPage__google__btn">
        <img
          src={googleIcon}
          alt=""
          aria-hidden="true"
          className="registerPage__google__icon"
        />{" "}
        Continuar com Google
      </button>
      <div className="registerPage__right__separator">
        <div className="registerPage__separator__line"></div>
        <span className="registerPage__separator__text">
          ou entre com e-mail
        </span>
        <div className="registerPage__separator__line"></div>
      </div>
      <form className="registerPage__right__form" onSubmit={handleSubmit}>
        <div className="registerPage__input__field">
          <label htmlFor="email" className="registerPage__input__label">
            E-mail
          </label>
          <input
            id="email"
            className="registerPage__input__input"
            type="email"
            placeholder="voce@email.com"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="registerPage__input__field">
          <div>
            <label htmlFor="password" className="registerPage__input__label">
              Senha
            </label>
            <input
              id="password"
              className="registerPage__input__input"
              type="password"
              placeholder="••••••••"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link to={"/forget"} className="registerPage__input__hint">Esqueci minha senha</Link>
        <button type="submit" className="registerPage__input__btn">
          Entrar
        </button>
      </form>
      <p className="registerPage__right__login">
        Não tem uma conta?{" "}
        <Link to={"/register"} className="registerPage__login__link">
          Criar conta
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
