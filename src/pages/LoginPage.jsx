import { useEffect } from "react";
import BrandPanel from "../components/auth/BrandPanel";
import LoginForm from "../components/auth/LoginForm";

function LoginPage({ handleLogin, errorMessage }) {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-bistre)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <section className="registerPage" id="registerPage">
      <div className="registerPage__container">
        <BrandPanel />
        <LoginForm handleLogin={handleLogin} errorMessage={errorMessage} />
      </div>
    </section>
  );
}
export default LoginPage;
