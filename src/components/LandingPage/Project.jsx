import author from "../../images/Developper/foto_aromatik_3x4.jpg";

function Author() {
  return (
    <section className="project" id="author">
      <div className="project__inner">
        <figure className="project__portrait">
          <div className="project__image-overlay"></div>
          <img
            className="project__image"
            src={author}
            alt="Foto do desenvolvedor Rafael"
          />
          <figcaption className="project__caption">
            <span className="project__name">Rafael Guanciale Nacarato</span>
            <span className="project__job">Web developer</span>
          </figcaption>
        </figure>

        <div className="project__body">
          <p className="project__eyebrow">O projeto</p>
          <h3 className="project__title">
            Paixão por perfumaria, <em>aprendizado em código.</em>
          </h3>
          <p className="project__text">
            "A ideia veio de uma necessidade pessoal com perfumaria. <br /> Mas o
            Permana acabou virando outra coisa: onde aprendi a programar de
            verdade, construindo uma tela de cada vez."
          </p>
        </div>

        <div className="project__buttons">
          <a
            className="project__btn project__btn--paper"
            href="https://github.com/RafaGuanciale"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="project__btn project__btn--ghost-light"
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
