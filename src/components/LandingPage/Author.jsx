import author from "../../images/Developper/foto_aromatik_3x4.jpg";

function Author() {
  return (
    <section className="project" id="author">
      <div className="project__inner">
        <figure className="project__portrait">
          <img
            className="project__image"
            src={author}
            alt="Foto do desenvolvedor Rafael"
          />
          <figcaption className="project__caption">
            <span className="project__name">Rafael Guanciale</span>
            <span className="project__job">Web developer</span>
          </figcaption>
        </figure>

        <div className="project__body">
          <p className="eyebrow eyebrow--light">O projeto</p>
          <h3 className="project__title">
            Paixão por perfumaria, <em>aprendizado em código.</em>
          </h3>
          <p className="project__text">
            O Permana nasceu da união de duas paixões — fragrâncias e
            desenvolvimento web. Um laboratório onde cada funcionalidade é um
            novo conceito aprendido.
          </p>
        </div>

        <div className="project__buttons">
          <a
            className="btn btn--paper"
            href="https://github.com/RafaGuanciale"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn--ghost-light"
            href="https://www.linkedin.com/in/rafaelguanciale/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Author;
