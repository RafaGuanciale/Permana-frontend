import work from "../images/categorias/work.jpeg";
import gym from "../images/categorias/gym.jpeg";
import date from "../images/categorias/date2.jpeg";
import events from "../images/categorias/events.jpg";
import casual from "../images/categorias/casual.jpg";
import hot from "../images/categorias/hot.jpg";
import cold from "../images/categorias/cold.jpg";
import party from "../images/categorias/party.jpg";
import travel from "../images/categorias/travel.jpg";
import night from "../images/categorias/night.jpg";
import defaultImg from "../images/perfumes/default.jpg";
import { useEffect, useState } from "react";

function categoriesPage() {
  const [openCategory, setOpenCategory] = useState("");
  const [openContainer, setOpenContainer] = useState("");
  const [activeSubcategory, setActiveSubcategory] = useState("");

  const expandContainer = (e) => {
    const container = e.currentTarget.dataset.container;
    const category = e.currentTarget.dataset.name;
    if (openCategory === category) {
      setOpenCategory("");
      setOpenContainer("");
    } else {
      setOpenCategory(category);
      setOpenContainer(container);
    }
  };

  useEffect(() => {
    console.log(openCategory);
  }, [openCategory]);
  useEffect(() => {
    console.log(openContainer);
  }, [openContainer]);

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
        <div className="categoriesPage__container-top">
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Trabalho" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={work}
                alt="trabalho"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--job">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Discreto · Profissional
                  </p>
                  <p className="categoriesPage__card-overlay-title">Trabalho</p>
                </div>

                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Fragrâncias discretas e elegantes para o ambiente
                    corporativo.
                  </p>

                  <button
                    className="categoriesPage__card-overlay-button"
                    id="categoriesPage__work-btn"
                    data-name="Trabalho"
                    data-container="top"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Casual" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={casual}
                alt="casual"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--casual">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Leve · Confortável
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
                    data-name="Casual"
                    data-container="top"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Academia" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={gym}
                alt="academia"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--gym">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Fresco · Energético
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
                    data-name="Academia"
                    data-container="top"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Calor" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={hot}
                alt="calor"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--heat">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Refrescante · Leve
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
                    data-name="Calor"
                    data-container="top"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Frio" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={cold}
                alt="frio"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--cold">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Quente · Envolvente
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
                    data-name="Frio"
                    data-container="top"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
        </div>

        <div
          className={`categoriesPage__expand__container ${openContainer === "top" ? "categoriesPage__container-active" : ""}`}
        >
          <div className="categoriesPage__expand__content">
            <div className="categoriesPage__subcategories__column">
              <div className="categoriesPage__subcategories__label">
                Ambiente
              </div>
              <div className="categoriesPage__subcategories__list">
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Escritório" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Escritório")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>
                  Escritório
                </button>
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Ar livre" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Ar livre")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>Ar
                  livre
                </button>
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Hospital" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Hospital")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>
                  Área hospitalar
                </button>
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Home office" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Home office")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>
                  Home office
                </button>
              </div>
            </div>
            <div className="categoriesPage__results__column">
              <div className="categoriesPage__results__top">
                <div className="categoriesPage__results__context">
                  <div className="categoriesPage__results__eyebrow">
                    {openCategory} · {activeSubcategory}
                  </div>
                  <div className="categoriesPage__results__title">
                    Perfumes da sua coleção
                  </div>
                </div>
                <button className="categoriesPage__results__btn">
                  <i className="ti ti-sparkles"></i> Recomendações para:{" "}
                  {activeSubcategory}
                </button>
              </div>
              <div className="categoriesPage__results__match-list">
                <div className="categoriesPage__results__match-item">
                  <img
                    className="categoriesPage__results__match-img"
                    src={defaultImg}
                    alt="Terre d'Hermès"
                  />
                  <div className="categoriesPage__results__match-info">
                    <div className="categoriesPage__results__match-brand">
                      Hermès
                    </div>
                    <div className="categoriesPage__results__match-name">
                      Terre d'Hermès
                    </div>
                    <div className="categoriesPage__results__match-reason">
                      Amadeirado seco e discreto, com projeção controlada,
                      perfeito para ambientes fechados onde o perfume não deve
                      competir com o espaço.
                    </div>
                  </div>
                  <div className="categoriesPage__results__match-score">
                    <span className="categoriesPage__results__match-pct">
                      85%
                    </span>
                    <span className="categoriesPage__results__match-seal categoriesPage__results__seal-excelent">
                      Excelente
                    </span>
                  </div>
                </div>
                <div className="categoriesPage__results__match-item">
                  <img
                    className="categoriesPage__results__match-img"
                    src={defaultImg}
                    alt="Bleu de Chanel"
                  />
                  <div className="categoriesPage__results__match-info">
                    <div className="categoriesPage__results__match-brand">
                      Chanel
                    </div>
                    <div className="categoriesPage__results__match-name">
                      Bleu de Chanel
                    </div>
                    <div className="categoriesPage__results__match-reason">
                      Aromático versátil com intensidade moderada. Funciona em
                      reuniões e ambientes corporativos sem ser invasivo.
                    </div>
                  </div>
                  <div className="categoriesPage__results__match-score">
                    <span className="categoriesPage__results__match-pct">
                      70%
                    </span>
                    <span className="categoriesPage__results__match-seal categoriesPage__results__seal-good">
                      Bom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categoriesPage__container-bottom">
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Encontros" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={date}
                alt="Encontros"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--date">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Sedutor · Marcante
                  </p>
                  <p className="categoriesPage__card-overlay-title">
                    Encontros
                  </p>
                </div>

                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Fragrâncias sedutoras e marcantes para momentos especiais e
                    inesquecíveis.
                  </p>

                  <button
                    className="categoriesPage__card-overlay-button"
                    id="categoriesPage__date-btn"
                    data-name="Encontros"
                    data-container="bottom"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Noite" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={night}
                alt="noite"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--night">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Misterioso · Sensorial
                  </p>
                  <p className="categoriesPage__card-overlay-title">Noite</p>
                </div>

                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Fragrâncias que ganham vida após o pôr do sol.
                  </p>

                  <button
                    className="categoriesPage__card-overlay-button"
                    id="categoriesPage__work-btn"
                    data-name="Noite"
                    data-container="bottom"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Festas" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={party}
                alt="festa"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--party">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Intenso · Vibrante
                  </p>
                  <p className="categoriesPage__card-overlay-title">Festas</p>
                </div>

                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Fragrâncias marcantes e ousadas para noites cheias de
                    energia.
                  </p>

                  <button
                    className="categoriesPage__card-overlay-button"
                    id="categoriesPage__work-btn"
                    data-name="Festas"
                    data-container="bottom"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Eventos" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={events}
                alt="Eventos"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--events">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Elegante · Sofisticado
                  </p>
                  <p className="categoriesPage__card-overlay-title">Eventos</p>
                </div>

                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Fragrâncias refinadas e envolventes para ocasiões especiais
                    e memoráveis.
                  </p>

                  <button
                    className="categoriesPage__card-overlay-button"
                    id="categoriesPage__work-btn"
                    data-name="Eventos"
                    data-container="bottom"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Viagens" ? "categoriesPage__card--active" : ""}`}
            >
              <img
                className="categoriesPage__card-image"
                src={travel}
                alt="Viagens"
              />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--travel">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Livre · Aventureiro
                  </p>
                  <p className="categoriesPage__card-overlay-title">Viagem</p>
                </div>

                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Fragrâncias que traduzem a liberdade de estar em movimento.
                  </p>

                  <button
                    className="categoriesPage__card-overlay-button"
                    id="categoriesPage__work-btn"
                    data-name="Viagens"
                    data-container="bottom"
                    onClick={expandContainer}
                  >
                    Ver fragrâncias
                  </button>
                </div>
              </div>
            </div>
          </li>
        </div>

        <div
          className={`categoriesPage__expand__container ${openContainer === "bottom" ? "categoriesPage__container-active" : ""}`}
        >
          <div className="categoriesPage__expand__content">
            <div className="categoriesPage__subcategories__column">
              <div className="categoriesPage__subcategories__label">
                Ambiente
              </div>
              <div className="categoriesPage__subcategories__list">
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Escritório" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Escritório")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>
                  Escritório
                </button>
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Ar livre" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Ar livre")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>Ar
                  livre
                </button>
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Hospital" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Hospital")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>
                  Área hospitalar
                </button>
                <button
                  className={`categoriesPage__subcategories__btn ${activeSubcategory === "Home office" ? "categoriesPage__subcategories__btn-active" : ""}`}
                  onClick={() => setActiveSubcategory("Home office")}
                >
                  <span className="categoriesPage__subcategories__dot"></span>
                  Home office
                </button>
              </div>
            </div>
            <div className="categoriesPage__results__column">
              <div className="categoriesPage__results__top">
                <div className="categoriesPage__results__context">
                  <div className="categoriesPage__results__eyebrow">
                    {openCategory} · {activeSubcategory}
                  </div>
                  <div className="categoriesPage__results__title">
                    Perfumes da sua coleção
                  </div>
                </div>
                <button className="categoriesPage__results__btn">
                  <i className="ti ti-sparkles"></i> Recomendações para:{" "}
                  {activeSubcategory}
                </button>
              </div>
              <div className="categoriesPage__results__match-list">
                <div className="categoriesPage__results__match-item">
                  <img
                    className="categoriesPage__results__match-img"
                    src={defaultImg}
                    alt="Terre d'Hermès"
                  />
                  <div className="categoriesPage__results__match-info">
                    <div className="categoriesPage__results__match-brand">
                      Hermès
                    </div>
                    <div className="categoriesPage__results__match-name">
                      Terre d'Hermès
                    </div>
                    <div className="categoriesPage__results__match-reason">
                      Amadeirado seco e discreto, com projeção controlada,
                      perfeito para ambientes fechados onde o perfume não deve
                      competir com o espaço.
                    </div>
                  </div>
                  <div className="categoriesPage__results__match-score">
                    <span className="categoriesPage__results__match-pct">
                      85%
                    </span>
                    <span className="categoriesPage__results__match-seal categoriesPage__results__seal-excelent">
                      Excelente
                    </span>
                  </div>
                </div>
                <div className="categoriesPage__results__match-item">
                  <img
                    className="categoriesPage__results__match-img"
                    src={defaultImg}
                    alt="Bleu de Chanel"
                  />
                  <div className="categoriesPage__results__match-info">
                    <div className="categoriesPage__results__match-brand">
                      Chanel
                    </div>
                    <div className="categoriesPage__results__match-name">
                      Bleu de Chanel
                    </div>
                    <div className="categoriesPage__results__match-reason">
                      Aromático versátil com intensidade moderada. Funciona em
                      reuniões e ambientes corporativos sem ser invasivo.
                    </div>
                  </div>
                  <div className="categoriesPage__results__match-score">
                    <span className="categoriesPage__results__match-pct">
                      70%
                    </span>
                    <span className="categoriesPage__results__match-seal categoriesPage__results__seal-good">
                      Bom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default categoriesPage;
