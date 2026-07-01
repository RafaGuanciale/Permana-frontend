import { useEffect } from "react";
import BrandPanel from "../components/auth/BrandPanel";
import RegisterForm from "../components/auth/RegisterForm";

function RegisterPage({ handleRegistration, errorMessage }) {

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
        <RegisterForm handleRegistration={handleRegistration} errorMessage={errorMessage}/>
      </div>
    </section>
  );
}
export default RegisterPage;
