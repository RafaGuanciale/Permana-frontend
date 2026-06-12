import { React } from "react";
import cloudIcon from "../../images/icons/cloud_brown.png";

function getDate() {
  const now = new Date();

  const weekDay = now.toLocaleDateString("pt-BR", { weekday: "long" });
  const day = now.getDate();
  const month = now.toLocaleDateString("pt-BR", { month: "long" });

  const weekDayCapitalized = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);

  return `${weekDayCapitalized} · ${day} de ${monthCapitalized}`;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Bom dia";
  if (hour >= 12 && hour < 18) return "Boa tarde";
  return "Boa noite";
}

export function ScentOfTheDay({ weather, perfume, onDetails, style }) {
  const { temp, condition, detail } = weather;

  return (
    <div className="scent-of-the-day" style={style}>
      <p className="scent-of-the-day__label">Perfume do dia</p>

      <div className="scent-of-the-day__weather">
        <img
          className="scent-of-the-day__weather-icon"
          src={cloudIcon}
          alt=""
          aria-hidden="true"
        />
        <span className="scent-of-the-day__temp">{temp}</span>
        <span className="scent-of-the-day__condition">
          <span className="scent-of-the-day__condition-main">{condition}</span>
          <span className="scent-of-the-day__condition-sub">{detail}</span>
        </span>
      </div>

      <div className="scent-of-the-day__perfume">
        <div
          className="scent-of-the-day__bottle"
          style={
            perfume.image
              ? { backgroundImage: `url(${perfume.image})` }
              : undefined
          }
        />
        <div className="scent-of-the-day__info">
          <div>
            <h3 className="scent-of-the-day__name">{perfume.name}</h3>
            <p className="scent-of-the-day__brand">{perfume.brand}</p>
          </div>
          <div className="scent-of-the-day__notes">
            {(perfume.notes || []).map((n) => (
              <span key={n} className="tag tag--on-dark">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="scent-of-the-day__footer">
        <button
          type="button"
          className="scent-of-the-day__link"
          onClick={onDetails}
        >
          Ver detalhes <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

export function DashboardHero({
  name = "Rafael",
  greeting = getGreeting(),
  date = getDate(),
  lede = "A noite está amena e nublada —",
  ledeAccent = "pede algo fresco.",
  reanalysis = {
    available: true,
    title: "Nova análise disponível",
    detail: "2 fragrâncias novas desde a última leitura",
  },
  weather = {
    temp: "22°",
    condition: "Nublado",
    detail: "Noite amena · 18°–23°",
  },
  perfume = {
    name: "Acqua Di Gio EDT",
    brand: "Giorgio Armani",
    notes: ["Fresco", "Aquático", "Versátil"],
    image: undefined,
  },
  onReanalyze,
  onDetails,
  style,
}) {
  return (
    <div className="dashboard-hero" style={style}>
      <div className="dashboard-hero__welcome">
        <p className="dashboard-hero__date">{date}</p>
        <h1 className="dashboard-hero__greeting">
          {greeting}, {name}.
        </h1>
        <p className="dashboard-hero__lede">
          {lede}{" "}
          <span className="dashboard-hero__lede-accent">{ledeAccent}</span>
        </p>

        {reanalysis?.available && (
          <div className="dashboard-hero__reanalyze">
            <button
              type="button"
              className="dashboard-hero__reanalyze-btn"
              onClick={onReanalyze}
            >
              <span className="dashboard-hero__reanalyze-dot" />
              Reanalisar coleção
              <span aria-hidden="true">↻</span>
            </button>
            <div className="dashboard-hero__reanalyze-meta">
              <span className="dashboard-hero__reanalyze-title">
                {reanalysis.title}
              </span>
              <span className="dashboard-hero__reanalyze-sub">
                {reanalysis.detail}
              </span>
            </div>
          </div>
        )}
      </div>

      <ScentOfTheDay
        weather={weather}
        perfume={perfume}
        onDetails={onDetails}
      />
    </div>
  );
}
