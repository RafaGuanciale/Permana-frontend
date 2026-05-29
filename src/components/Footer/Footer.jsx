import instagram from "../../images/icons/social-media/instagram-circle-green.png";
import github from "../../images/icons/social-media/github-green.png";
import linkedin from "../../images/icons/social-media/linkedin-circle-green.png";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__columns">
        <div className="footer__column--main">
          <div className="footer__column__logo">
            <h2>Aromatik</h2>
          </div>
          <div className="footer__column__copyright">
            <p className="footer__text">© 2025 Aromatik.</p>
            <p className="footer__text footer__text--developer">
              Desenvolvido com dedicação por Rafael Guanciale Nacarato.
            </p>
          </div>
        </div>
        <div className="footer__column_content--social" id="footer-social">
          <ul className="footer__list">
            <li>
              <a
                className="footer__social-link"
                href="https://www.instagram.com/rafagn"
                target="_blank"
              >
                <img
                  className="footer__social-icon"
                  src={instagram}
                  alt="Logo Instagram"
                />
                Instagram
              </a>
            </li>
            <li>
              <a
                className="footer__social-link"
                href="https://github.com/RafaGuanciale"
                target="_blank"
              >
                <img
                  className="footer__social-icon"
                  src={github}
                  alt="Logo Facebook"
                />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="footer__social-link"
                href="https://www.linkedin.com/in/rafaelguanciale/"
                target="_blank"
              >
                <img
                  className="footer__social-icon"
                  src={linkedin}
                  alt="Logo email"
                />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
