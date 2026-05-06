import work from "../images/categorias/work.jpeg";
import gym from "../images/categorias/gym.jpeg";
import date from "../images/categorias/date2.jpeg";
import events from "../images/categorias/events.jpg";
import casual from "../images/categorias/casual.jpg";
import hot from "../images/categorias/hot.jpg";
import cold from "../images/categorias/cold.jpg";
import party from "../images/categorias/party.jpg";

function categoriesPagePage() {
  return (
    <section className="categoriesPage" id="categoriesPage">
      <div className="categoriesPage__header">
        <p className="categoriesPage__eyebrow">EXPLORE POR MOMENTO</p>
        <h2 className="section__tittle categoriesPage__title">
          Categorias & Ocasiões
        </h2>
        <p className="section__subtittle categoriesPage__subtitle">
          Descubra fragrâncias ideais para cada momento do seu dia e deixe o
          perfume traduzir quem você é.
        </p>
      </div>
      <div className="categoriesPage__container">
        <li>
          <div className="categoriesPage__card">
            <img className="categoriesPage__card-image" src={work} alt="work" />
            <div className="categoriesPage__card-overlay-job">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  Discreto - Profissional
                </p>
                <p className="categoriesPage__card-overlay-title">Trabalho</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias discretas e elegantes para o ambiente corporativo.
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__work-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img className="categoriesPage__card-image" src={gym} alt="gym" />
            <div className="categoriesPage__card-overlay-gym">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  fresco - energético
                </p>
                <p className="categoriesPage__card-overlay-title">Academia</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias leves e revigorantes para acompanhar seu treino
                  sem pesar.
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__gym-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img className="categoriesPage__card-image" src={date} alt="date" />
            <div className="categoriesPage__card-overlay-date">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  sedutor - marcante
                </p>
                <p className="categoriesPage__card-overlay-title">Encontros</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias sedutoras e marcantes para momentos especiais e
                  inesquecíveis.
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__date-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img className="categoriesPage__card-image" src={events} alt="" />
            <div className="categoriesPage__card-overlay-events">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  Elegante - Sofisticado
                </p>
                <p className="categoriesPage__card-overlay-title">Eventos</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias refinadas e envolventes para ocasiões especiais e
                  memoráveis.
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__work-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img
              className="categoriesPage__card-image"
              src={casual}
              alt="casual"
            />
            <div className="categoriesPage__card-overlay-casual">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  Leve - Confortável
                </p>
                <p className="categoriesPage__card-overlay-title">Casual</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias suaves e versáteis para o dia a dia com
                  naturalidade.
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__work-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img className="categoriesPage__card-image" src={hot} alt="hot" />
            <div className="categoriesPage__card-overlay-job">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  Refrescante - Leve
                </p>
                <p className="categoriesPage__card-overlay-title">Calor</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Perfumes ideais para dias quentes e clima tropical
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__work-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img className="categoriesPage__card-image" src={cold} alt="frio" />
            <div className="categoriesPage__card-overlay-job">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  Quente - Envolvente
                </p>
                <p className="categoriesPage__card-overlay-title">Frio</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias mais densas e confortáveis para temperaturas
                  baixas
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__work-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="categoriesPage__card">
            <img
              className="categoriesPage__card-image"
              src={party}
              alt="festa"
            />
            <div className="categoriesPage__card-overlay-job">
              <div className="categoriesPage__overlay-main">
                <p className="categoriesPage__card-overlay-eyebrow">
                  Intenso - Vibrante
                </p>
                <p className="categoriesPage__card-overlay-title">Festas</p>
              </div>

              <div className="categoriesPage__overlay-extra">
                <p className="categoriesPage__card-overlay-description">
                  Fragrâncias marcantes e ousadas para noites cheias de energia.
                </p>

                <button
                  className="categoriesPage__card-overlay-button"
                  id="categoriesPage__work-btn"
                >
                  Ver fragrâncias
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </section>
  );
}

export default categoriesPagePage;
