import toggleBtn from "../../images/icons/password__toggle.png";
import { useContext, useState } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPopup() {
  const { handleClosePopup } = useContext(PopupContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleChangeUser = (e) => {
    setLoginUser(e.target.value);
  };
  const handleChangePassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginUser);
    handleClosePopup();
    navigate("/dashboard");
  };

  return (
    <div className="login__content">
      <button
        aria-label="Fechar pop-up"
        className="popup__close"
        type="button"
        onClick={handleClosePopup}
      ></button>
      <div className="login__welcome">
        <h3 className="login__message">Welcome Back!</h3>
        <p className="login__subtitle">We missed you</p>
      </div>
      <form
        className="login__form form"
        id="login-form"
        name="login-form"
        onSubmit={handleSubmit}
      >
        <label className="login__form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input login__form__input login__form__input--username"
          name="loginUser"
          placeholder="Username"
          type="text"
          id="username"
          minLength="8"
          maxLength="20"
          value={loginUser}
          onChange={handleChangeUser}
          required
        />
        <span className="username__input__error form__input__error"></span>
        <div className="login__form__password">
          <label className="login__form__label" htmlFor="password">
            Password
          </label>
          <div className="login__input__wrap">
            <input
              className="form__input login__form__input login__form__input--passwordkey"
              name="loginPassword"
              placeholder="Password"
              type="password"
              id="password"
              minLength="8"
              maxLength="12"
              value={loginPassword}
              onChange={handleChangePassword}
              required
            />
            <button type="button" className="login__password__toggle">
              <img
                className="login__password__img"
                src={toggleBtn}
                alt="mostrar senha"
              />
            </button>
          </div>
          <span className="password__input__error form__input__error"></span>
        </div>
        <a href="" className="login__forgot-password">
          Forgot Password?
        </a>
        <button
          className="form__button login__form__button"
          type="submit"
          id="login-button"
          disabled={
            loginUser.length < 2 ||
            loginUser.length > 15 ||
            loginPassword.length < 8 ||
            loginPassword.length > 15
          }
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginPopup;
