import defaultBottle from "../../images/perfumes/default.jpg";

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

function getLede(weather) {
  if (!weather) {
    return "Analisando as condições do dia —";
  }
  const isNight = weather.detail.includes("Noite");
  const period = isNight ? "A noite" : "O dia";
  return `${period} está ${weather.detail
    .replace("Noite ", "")
    .replace("Dia ", "")
    .toLowerCase()} e ${weather.condition.toLowerCase()}!`;
}

function ScentOfTheDay({ weather, perfume, onDetails }) {
  const { temp, condition, detail, icon } = weather;
  return (
    <div className="scent-of-the-day" >
      <p className="scent-of-the-day__label">Perfume do dia</p>
      <div className="scent-of-the-day__weather">
        <img
          className="scent-of-the-day__weather-icon"
          src={icon}
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
        <img
          className="scent-of-the-day__bottle"
          src={
            perfume.link
              ? { backgroundImage: `url(${perfume.link})` }
              : defaultBottle
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
          disabled
        >
          Ver detalhes (Em breve) <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

function DashboardHero({
  name = "Rafael",
  greeting = getGreeting(),
  date = getDate(),
  weather,
  lede = getLede(weather),
  ledeAccent = "Pede algo fresco.",
  // reanalysis = {
  //   available: true,
  //   title: "Nova análise disponível",
  //   detail: "2 fragrâncias novas desde a última leitura",
  // },
  perfume = {
    name: "Acqua Di Gio EDT",
    brand: "Giorgio Armani",
    notes: ["Fresco", "Aquático", "Versátil"],
    image: undefined,
  },
  // onReanalyze,
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
          <span className="dashboard-hero__lede-accent"><br />{ledeAccent}</span>
        </p>
        {/* {reanalysis?.available && (
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
        )} */}
      </div>

      <ScentOfTheDay
        weather={weather}
        perfume={perfume}
        onDetails={onDetails}
      />
    </div>
  );
}

export default DashboardHero;
