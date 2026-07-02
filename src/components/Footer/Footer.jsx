import Logo from "../brand/Logo";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import instagram from "../../images/icons/social-media/instagram-champagne.png";
import github from "../../images/icons/social-media/github-champagne.png";
import linkedin from "../../images/icons/social-media/linkedin-champagne.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <div className="footer__column-main">
            <Logo color={"dark"} />
            <p className="footer__tagline">
              Sua identidade olfativa, decifrada.
            </p>
            <p className="footer__text">
              Gestão, análise e descoberta para colecionadores brasileiros.
            </p>
          </div>

          <nav className="footer__column-nav">
            <h3 className="footer__heading">
              {isLogged ? "Sua coleção" : "Explorar"}
            </h3>
            <div>
              {isLogged ? (
                <ul className="footer__list">
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/dashboard")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Dashboard</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/collection")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Minha coleção</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/categories")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Categorias</span>
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="footer__list">
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Início</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() =>
                        document.getElementById("journey")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">
                        Conheça o Permana
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() =>
                        document.getElementById("author")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">O desenvolvedor</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          <nav className="footer__column-nav">
            <h3 className="footer__heading">
              {isLogged ? "Descobrir" : "Comece agora"}
            </h3>
            <div>
              {isLogged ? (
                <ul className="footer__list">
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/dashboard")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Análise - breve</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/dashboard")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Recomendações - breve</span>
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="footer__list">
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/login")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">Entrar</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer__nav-link"
                      onClick={() => navigate("/register")}
                    >
                      <span className="footer__nav-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="footer__nav-label">
                        Criar conta gratuita
                      </span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          <div className="footer__column_content-social" id="footer-social">
            <h3 className="footer__heading">Acompanhe</h3>
            <ul className="footer__list">
              <li className="footer__list">
                <a
                  className="footer__social-link"
                  href="https://www.instagram.com/rafagn"
                  target="_blank"
                >
                  <div className="footer__social-image">
                    <div className="footer__social-background"></div>
                    <img
                      className="footer__social-icon"
                      src={instagram}
                      alt="Logo instagram"
                    />
                  </div>
                  <span className="footer__social-meta">
                    <span className="footer__social-name">Instagram</span>
                    <span className="footer__social-handle">@permana.app</span>
                  </span>
                </a>
                <a
                  className="footer__social-link"
                  href="https://github.com/RafaGuanciale"
                  target="_blank"
                >
                  <div className="footer__social-image">
                    <div className="footer__social-background"></div>
                    <img
                      className="footer__social-icon"
                      src={github}
                      alt="Logo github"
                    />
                  </div>
                  <span className="footer__social-meta">
                    <span className="footer__social-name">GitHub</span>
                    <span className="footer__social-handle">/permana</span>
                  </span>
                </a>
                <a
                  className="footer__social-link"
                  href="https://www.linkedin.com/in/rafaelguanciale/"
                  target="_blank"
                >
                  <div className="footer__social-image">
                    <div className="footer__social-background"></div>
                    <img
                      className="footer__social-icon"
                      src={linkedin}
                      alt="Logo linkedin"
                    />
                  </div>
                  <span className="footer__social-meta">
                    <span className="footer__social-name">Linkedin</span>
                    <span className="footer__social-handle">
                      Rafael Guanciale
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 Permana · Desenvolvido com dedicação por Rafael Guanciale
            Nacarato.
          </p>
          <button type="button" className="footer__totop" onClick={toTop}>
            Voltar ao topo <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
