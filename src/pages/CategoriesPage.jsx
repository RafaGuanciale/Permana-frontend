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
import { useLocation } from "react-router-dom";
import { categories } from "../utils/consts";
import CategoryPanel from "../components/Pages/CategoriesPage/CategoryPanel";
import CardCount from "../components/Pages/CategoriesPage/CardCount";

function todaySuggestion() {
  const today = new Date();
  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const hour = today.getHours();
  let category;
  let condition;
  let temp;
  if (hour >= 5 && hour < 11) {
    category = "Academia";
    condition = "céu limpo";
    temp = 21;
  } else if (hour >= 11 && hour < 14) {
    category = "Trabalho";
    condition = "ensolarado";
    temp = 26;
  } else if (hour >= 14 && hour < 18) {
    category = "Casual";
    condition = "parcialmente nublado";
    temp = 24;
  } else if (hour >= 18 && hour < 22) {
    category = "Encontros";
    condition = "anoitecer ameno";
    temp = 20;
  } else {
    category = "Noite";
    condition = "noite clara";
    temp = 17;
  }
  return {
    category,
    text: `${days[today.getDay()]}, ${hour}h · ${temp}° ${condition}`,
  };
}

function categoriesPage() {
  const [openCategory, setOpenCategory] = useState("");
  const [openContainer, setOpenContainer] = useState("");
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const location = useLocation();
  const { category, container } = location.state || {};
  const today = todaySuggestion();
  const expandContainer = (e) => {
    const container = e.currentTarget.dataset.container;
    const category = e.currentTarget.dataset.name;
    if (openCategory === category) {
      setOpenCategory("");
      setOpenContainer("");
      setActiveSubcategory("");
    } else {
      setOpenCategory(category);
      setOpenContainer(container);
      setActiveSubcategory("");
    }
  };
  const getContainer = (category) => {
    const topCategories = ["Trabalho", "Casual", "Academia", "Calor", "Frio"];
    const bottomCategories = [
      "Encontros",
      "Noite",
      "Festas",
      "Eventos",
      "Viagens",
    ];

    if (topCategories.includes(category)) {
      return "top";
    }
    if (bottomCategories.includes(category)) {
      return "bottom";
    }
  };
  useEffect(() => {
    if (category && container) {
      setOpenCategory(category);
      setOpenContainer(container);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, container]);

  return (
    <section className="categoriesPage" id="categoriesPage">
      <div className="categoriesPage__header">
        <div className="categoriesPage__header__circle-1"></div>
        <div className="categoriesPage__header__circle-2"></div>

        <p className="categoriesPage__eyebrow">EXPLORE POR MOMENTO</p>
        <h2 className="section__tittle categoriesPage__title">
          Categorias &amp; Ocasiões
        </h2>
        <p className="section__subtittle categoriesPage__subtitle">
          Descubra fragrâncias ideais para cada momento do seu dia e deixe o
          perfume traduzir quem você é.
        </p>
      </div>
      <div
        className={`categoriesPage__container ${openCategory ? "categoriesPage__container--focused" : ""}`}
      >
        <div className="categoriesPage__smart">
          <div className="categoriesPage__smart-left">
            <div className="categoriesPage__smart-eyebrow">
              <span className="categoriesPage__smart-cloud">☁</span> Sugestão de
              hoje
            </div>
            <div className="categoriesPage__smart-meta">{today.text}</div>
          </div>
          <div className="categoriesPage__smart-main">
            Hoje combina com <em>{today.category}</em>
          </div>
          <button
            className="categoriesPage__smart-cta"
            onClick={() => {
              setOpenCategory(today.category);
              setOpenContainer(getContainer(today.category));
            }}
          >
            Ver fragrâncias →
          </button>
        </div>
        <div className="categoriesPage__container-top">
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Trabalho" ? "categoriesPage__card--active" : ""}`}
              data-name="Trabalho"
              data-container="top"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={work}
                alt="trabalho"
              />
              <CardCount name="Trabalho" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Casual" ? "categoriesPage__card--active" : ""}`}
              data-name="Casual"
              data-container="top"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={casual}
                alt="casual"
              />
              <CardCount name="Casual" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Academia" ? "categoriesPage__card--active" : ""}`}
              data-name="Academia"
              data-container="top"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={gym}
                alt="academia"
              />
              <CardCount name="Academia" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Calor" ? "categoriesPage__card--active" : ""}`}
              data-name="Calor"
              data-container="top"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={hot}
                alt="calor"
              />
              <CardCount name="Calor" />
              <div className="categoriesPage__card-overlay categoriesPage__card-overlay--heat">
                <div className="categoriesPage__overlay-main">
                  <p className="categoriesPage__card-overlay-eyebrow">
                    Refrescante · Leve
                  </p>
                  <p className="categoriesPage__card-overlay-title">Calor</p>
                </div>
                <div className="categoriesPage__overlay-extra">
                  <p className="categoriesPage__card-overlay-description">
                    Perfumes ideais para dias quentes e clima tropical.
                  </p>
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Frio" ? "categoriesPage__card--active" : ""}`}
              data-name="Frio"
              data-container="top"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={cold}
                alt="frio"
              />
              <CardCount name="Frio" />
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
                    baixas.
                  </p>
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
        </div>
        <CategoryPanel
          container="top"
          openContainer={openContainer}
          openCategory={openCategory}
          activeSubcategory={activeSubcategory}
          setActiveSubcategory={setActiveSubcategory}
        />
        <div className="categoriesPage__container-bottom">
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Encontros" ? "categoriesPage__card--active" : ""}`}
              data-name="Encontros"
              data-container="bottom"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={date}
                alt="Encontros"
              />
              <CardCount name="Encontros" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Noite" ? "categoriesPage__card--active" : ""}`}
              data-name="Noite"
              data-container="bottom"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={night}
                alt="noite"
              />
              <CardCount name="Noite" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Festas" ? "categoriesPage__card--active" : ""}`}
              data-name="Festas"
              data-container="bottom"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={party}
                alt="festa"
              />
              <CardCount name="Festas" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Eventos" ? "categoriesPage__card--active" : ""}`}
              data-name="Eventos"
              data-container="bottom"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={events}
                alt="Eventos"
              />
              <CardCount name="Eventos" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`categoriesPage__card ${openCategory === "Viagens" ? "categoriesPage__card--active" : ""}`}
              data-name="Viagens"
              data-container="bottom"
              onClick={expandContainer}
            >
              <img
                className="categoriesPage__card-image"
                src={travel}
                alt="Viagens"
              />
              <CardCount name="Viagens" />
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
                  <span className="categoriesPage__card-overlay-button">
                    Ver fragrâncias
                  </span>
                </div>
              </div>
            </div>
          </li>
        </div>
        <CategoryPanel
          container="bottom"
          openContainer={openContainer}
          openCategory={openCategory}
          activeSubcategory={activeSubcategory}
          setActiveSubcategory={setActiveSubcategory}
        />
      </div>
    </section>
  );
}

export default categoriesPage;
