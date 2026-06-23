import { useState } from "react";
import collection from "../../images/mockups/mockup-collection-new.jpg";
import analisys from "../../images/mockups/mockup-analisys-new.jpg";
import recomendation from "../../images/mockups/mockup-recomendation.jpg";

function JourneyGrid() {
  const [active, setActive] = useState(0);

  return (
    <section className="journey" id="journey">
      <div className="journey__inner">
        <p className="eyebrow">A jornada</p>
        <h2 className="journey__title">
          Três passos entre a prateleira e a sua <em>identidade</em>.
        </h2>
        <div className="journey__grid">
          <div className="journey__steps">
            <button
              type="button"
              className={"step" + (active === 0 ? " step--active" : "")}
              onClick={() => setActive(0)}
            >
              <span className="step__num">1</span>
              <span className="step__body">
                <span className="step__kicker">Reúna</span>
                <span className="step__title">Cada frasco, num só lugar.</span>
                <span className="step__text">
                  Busque pelo nome e o perfume entra completo — imagem, marca e
                  notas direto do catálogo. Da prateleira de casa à vitrine de
                  nicho.
                </span>
              </span>
            </button>
            <button
              type="button"
              className={"step" + (active === 1 ? " step--active" : "")}
              onClick={() => setActive(1)}
            >
              <span className="step__num">2</span>
              <span className="step__body">
                <span className="step__kicker">Entenda</span>
                <span className="step__title">Um diagnóstico da coleção.</span>
                <span className="step__text">
                  O coração do Permana lê as notas, calcula seu perfil
                  predominante e mostra — num balance score — onde a coleção
                  pede equilíbrio.
                </span>
              </span>
            </button>
            <button
              type="button"
              className={"step" + (active === 2 ? " step--active" : "")}
              onClick={() => setActive(2)}
            >
              <span className="step__num">3</span>
              <span className="step__body">
                <span className="step__kicker">Descubra</span>
                <span className="step__title">O próximo, na sua medida.</span>
                <span className="step__text">
                  A partir do que falta, três caminhos por faixa de preço. Você
                  escolhe o que faz sentido — em qualquer ponta do catálogo.
                </span>
              </span>
            </button>
          </div>

          <div className="journey__visual">
            <img
              src={collection}
              className={"panel" + (active === 0 ? " panel--active" : "")}
              alt=""
            />
            <img
              src={analisys}
              className={"panel" + (active === 1 ? " panel--active" : "")}
              alt=""
            />
            <img
              src={recomendation}
              className={"panel" + (active === 2 ? " panel--active" : "")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyGrid;
