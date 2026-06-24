import { useState } from "react";
import collection from "../../images/mockups/mockup-collection-new.jpg";
import analisys from "../../images/mockups/mockup-analisys-new.jpg";
import recomendation from "../../images/mockups/mockup-recomendation.jpg";

function JourneyGrid() {
  const [active, setActive] = useState(0);

  return (
    <section className="journey" id="journey">
      <div className="journey__inner">
        <p className="journey__eyebrow">A jornada</p>
        <h2 className="journey__title">
          Três passos entre a prateleira e a sua <em>identidade</em>.
        </h2>
        <div className="journey__grid">
          <div className="journey__steps">
            <button
              type="button"
              className={"journey__step" + (active === 0 ? " journey__step--active" : "")}
              onClick={() => setActive(0)}
            >
              <span className="journey__step__num">1</span>
              <span className="journey__step__body">
                <span className="journey__step__kicker">Reúna</span>
                <span className="journey__step__title">Tudo num lugar só.</span>
                <span className="journey__step__text">
                  Busca pelo nome e o perfume entra completo: imagem, marca e
                  notas, direto do catálogo. Você só confirma e ele entra na sua
                  coleção.
                </span>
              </span>
            </button>
            <button
              type="button"
              className={"journey__step" + (active === 1 ? " journey__step--active" : "")}
              onClick={() => setActive(1)}
            >
              <span className="journey__step__num">2</span>
              <span className="journey__step__body">
                <span className="journey__step__kicker">Entenda</span>
                <span className="journey__step__title">Um diagnóstico da coleção.</span>
                <span className="journey__step__text">
                  O Permana lê as notas de cada perfume, define seu perfil
                  predominante e mostra em quais ocasiões a coleção está pronta
                  e onde ainda faltam peças.
                </span>
              </span>
            </button>
            <button
              type="button"
              className={"journey__step" + (active === 2 ? " journey__step--active" : "")}
              onClick={() => setActive(2)}
            >
              <span className="journey__step__num">3</span>
              <span className="journey__step__body">
                <span className="journey__step__kicker">Descubra</span>
                <span className="journey__step__title">O próximo da lista.</span>
                <span className="journey__step__text">
                  A partir do que falta, três caminhos por faixa de preço. A
                  escolha do próximo continua sendo sua.
                </span>
              </span>
            </button>
          </div>

          <div className="journey__visual">
            <img
              src={collection}
              className={"journey__panel" + (active === 0 ? " journey__panel--active" : "")}
              alt=""
            />
            <img
              src={analisys}
              className={"journey__panel" + (active === 1 ? " journey__panel--active" : "")}
              alt=""
            />
            <img
              src={recomendation}
              className={"journey__panel" + (active === 2 ? " journey__panel--active" : "")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyGrid;
