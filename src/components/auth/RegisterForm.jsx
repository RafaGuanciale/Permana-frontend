import { Link } from "react-router-dom";
import { useState } from "react";
import googleIcon from "../../images/icons/social-media/google-logo.jpg";

function RegisterForm({ handleRegistration }) {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      <p className="registerPage__right__title">Criar conta</p>
      <p className="registerPage__right__subtitle">
        Comece a mapear sua identidade olfativa
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
          ou cadastre com e-mail
        </span>
        <div className="registerPage__separator__line"></div>
      </div>
      <form className="registerPage__right__form" onSubmit={handleSubmit}>
        <div className="registerPage__input__divided">
          <div>
            <label htmlFor="name" className="registerPage__input__label">
              Nome completo
            </label>
            <input
              id="name"
              className="registerPage__input__input"
              type="text"
              placeholder="Seu nome"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username" className="registerPage__input__label">
              Usuário
            </label>
            <input
              id="username"
              className="registerPage__input__input"
              type="text"
              placeholder="@usuario"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
        </div>
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
        <div className="registerPage__input__divided">
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="registerPage__input__label"
            >
              Confirmar senha
            </label>
            <input
              id="confirmPassword"
              className="registerPage__input__input"
              type="password"
              placeholder="••••••••"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="registerPage__input__hint">Mínimo 8 caracteres</p>
        <button type="submit" className="registerPage__input__btn">
          Criar minha conta
        </button>
      </form>
      <div className="registerPage__onboarding__hint">
        <b className="registerPage__onboardin__hint-span">
          Próximo passo (opcional):{" "}
        </b>
        Após o cadastro, um onboarding rápido para montar seu perfil olfativo
        inicial.
      </div>
      <p className="registerPage__right__login">
        Já tem uma conta?{" "}
        <Link to={"/login"} className="registerPage__login__link">
          Entrar
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
