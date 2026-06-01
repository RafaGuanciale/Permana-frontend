import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import googleIcon from "../images/icons/social-media/google-logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function RegisterPage({ handleRegistration }) {
  const { isLogged } = useContext(AuthContext);
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

  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-bistre)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <section className="registerPage" id="registerPage">
      <div className="registerPage__container">
        <div className="registerPage__container__left">
          <div className="registerPage__left__logo">
            Aromati<span className="registerPage__logo__span">k</span>
          </div>
          <div className="registerPage__left__content">
            <p className="registerPage__left__title">
              Sua coleção,
              <br />
              sua identidade.
            </p>
            <p className="registerPage__left__description">
              Descubra o que os seus perfumes dizem sobre você. Analise sua
              coleção e encontre o que está faltando.
            </p>
            <div className="registerPage__left__tags">
              <span className="registerPage__left__tag">Amadeirado</span>
              <span className="registerPage__left__tag">Cítrico</span>
              <span className="registerPage__left__tag">Oriental</span>
              <span className="registerPage__left__tag">Floral</span>
              <span className="registerPage__left__tag">Aquático</span>
            </div>
          </div>
          <div className="registerPage__left__footer">
            Aromatik · Identidade olfativa
          </div>
        </div>
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
                <label
                  htmlFor="username"
                  className="registerPage__input__label"
                >
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
                <label
                  htmlFor="password"
                  className="registerPage__input__label"
                >
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
              Próximo passo (opcional):
            </b>
            após o cadastro, um onboarding rápido para montar seu perfil
            olfativo inicial.
          </div>
          <p className="registerPage__right__login">
            Já tem uma conta?{" "}
            <Link to={isLogged ? "dashboard" : "login"} className="registerPage__login__link">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
export default RegisterPage;
