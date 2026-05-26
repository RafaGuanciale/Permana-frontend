function AnalysisPage() {
  return (
    <section className="analysisPage" id="analysisPage">
      <div className="analysisPage__header">
        <div className="analysisPage__header__circle-1"></div>
        <div className="analysisPage__header__circle-2"></div>
        <div className="analysisPage__header__left">
          <p className="analysisPage__eyebrow">identidade olfativa</p>
          <h2 className="section__tittle analysisPage__title">
            Uma coleção <br /> de profundidade
          </h2>
          <p className="section__subtittle analysisPage__subtitle">
            14 perfumes analisados
          </p>
        </div>
        <div className="analysisPage__header__right">
          <div className="analysisPage__score__container">
            <p className="analysisPage__score__label">Balance score</p>
            <p className="analysisPage__score__value">48</p>
            <span className="analysisPage__score__tag">Desequilibrada</span>
          </div>
        </div>
      </div>
      <div className="analysisPage__wrapper">
        <div className="analysisPage__content-top">
          <div className="analysisPage__content__profile">
            <div className="analysisPage__profile__header">
              <div className="analysisPage__profile__header__left">
                <p className="analysisPage__profile__header__label">
                  Perfil predominante
                </p>
                <h2 className="analysisPage__profile__header__title">
                  Amadeirado
                </h2>
              </div>
              <div className="analysisPage__profile__header__right">
                <p className="analysisPage__profile__header__score">
                  62
                  <span className="analysisPage__profile__header__span">%</span>
                </p>
                <p className="analysisPage__profile__header__qtd">
                  9 de 14 perfumes
                </p>
              </div>
            </div>
            <div className="analysisPage__profile__content">
              <div className="analysisPage__profile__content-left">
                <p className="analysisPage__profile__content__label">
                  Assinatura aromática
                </p>
                <p className="analysisPage__profile__content__text">
                  Esta coleção é especializada em{" "}
                  <span>aromas quentes e profundos</span> — madeiras nobres,
                  especiarias e almíscar. Fragrâncias que ocupam espaço no ar e
                  se desenvolvem ao longo do dia.
                </p>
                <div className="analysisPage__profile__content__stats">
                  <div className="analysisPage__profile__stats__rarity">
                    <p className="analysisPage__profile__stats__label">
                      Raridade
                    </p>
                    <p className="analysisPage__profile__stats__value">
                      Top 15%
                    </p>
                    <p className="analysisPage__profile__stats__footer">
                      das coleções
                    </p>
                  </div>
                  <div className="analysisPage__profile__stats__breakdown">
                    <p className="analysisPage__profile__stats__label">
                      Breakdown
                    </p>
                    <p className="analysisPage__profile__stats__value">
                      4 Premium
                    </p>
                    <p className="analysisPage__profile__stats__footer">
                      3 Popular · 2 Nicho
                    </p>
                  </div>
                </div>
              </div>

              <div className="analysisPage__profile__content-right">
                <div className="analysisPage__profile__right-good">
                  <p className="analysisPage__profile__right__title">
                    O que faz bem
                  </p>
                  <p className="analysisPage__profile__right__text">
                    Sofisticação, intimidade e presença. Transições de estação,
                    noites e ambientes internos onde a projeção é bem-vinda.
                  </p>
                </div>
                <div className="analysisPage__profile__right-bad">
                  <p className="analysisPage__profile__right__title">
                    O que não faz
                  </p>
                  <p className="analysisPage__profile__right__text">
                    Leveza. Dias quentes, ambientes comerciais e interações
                    casuais — aqui ela não brilha.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="analysisPage__olfactive__distribution">
            <div className="analysisPage__olfactive__distribution__header">
              <p className="analysisPage__olfactive__header__label">
                Distribuição olfativa
              </p>
              <h3 className="analysisPage__olfactive__header__title">
                Como a coleção se divide
              </h3>
            </div>

            <div className="analysisPage__olfactive__distribution__content">
              <div className="analysisPage__olfactive__content__item">
                <div className="analysisPage__olfactive__content__item-label">
                  <span className="analysisPage__olfactive__content__item-name">
                    Amadeirado
                  </span>
                  <span className="analysisPage__olfactive__content__item-percent">
                    62%
                  </span>
                </div>
                <div className="analysisPage__olfactive__content__item-bar">
                  <div className="analysisPage__olfactive__content__item-bar__fill-woody"></div>
                </div>
                <p className="analysisPage__olfactive__content__item-description">
                  Dominante. O DNA da coleção.
                </p>
              </div>
              <div className="analysisPage__olfactive__content__item">
                <div className="analysisPage__olfactive__content__item-label">
                  <span className="analysisPage__olfactive__content__item-name">
                    Floral
                  </span>
                  <span className="analysisPage__olfactive__content__item-percent">
                    22%
                  </span>
                </div>
                <div className="analysisPage__olfactive__content__item-bar">
                  <div className="analysisPage__olfactive__content__item-bar__fill-floral"></div>
                </div>
                <p className="analysisPage__olfactive__content__item-description">
                  Suporte ocasional.
                </p>
              </div>
              <div className="analysisPage__olfactive__content__item">
                <div className="analysisPage__olfactive__content__item-label">
                  <span className="analysisPage__olfactive__content__item-name">
                    Cítrico
                  </span>
                  <span className="analysisPage__olfactive__content__item-percent">
                    6%
                  </span>
                </div>
                <div className="analysisPage__olfactive__content__item-bar">
                  <div className="analysisPage__olfactive__content__item-bar__fill-citric"></div>
                </div>
                <p className="analysisPage__olfactive__content__item-description">
                  Mínimo vital.
                </p>
              </div>
              <div className="analysisPage__olfactive__content__item">
                <div className="analysisPage__olfactive__content__item-label">
                  <span className="analysisPage__olfactive__content__item-name">
                    Aromático
                  </span>
                  <span className="analysisPage__olfactive__content__item-percent">
                    0%
                  </span>
                </div>
                <div className="analysisPage__olfactive__content__item-bar">
                  <div className="analysisPage__olfactive__content__item-bar__fill-aromatic"></div>
                </div>
                <p className="analysisPage__olfactive__content__item-description">
                  Ausência crítica.
                </p>
              </div>
              <div className="analysisPage__olfactive__content__item">
                <div className="analysisPage__olfactive__content__item-label">
                  <span className="analysisPage__olfactive__content__item-name">
                    Gourmand
                  </span>
                  <span className="analysisPage__olfactive__content__item-percent">
                    3%
                  </span>
                </div>
                <div className="analysisPage__olfactive__content__item-bar">
                  <div className="analysisPage__olfactive__content__item-bar__fill-gourmand"></div>
                </div>
                <p className="analysisPage__olfactive__content__item-description">
                  Raro. 1 perfume.
                </p>
              </div>
            </div>

            <div className="analysisPage__olfactive__distribution__footer">
              <p className="analysisPage__olfactive__distribution__footer-text">
                <span className="analysisPage__olfactive__distribuction__footer-text-span">
                  66%
                </span>{" "}
                em 1 família — especialização alta, versatilidade baixa.
              </p>
            </div>
          </div>
        </div>
        <div className="analysisPage__content-middle">
          <div className="analysisPage__content__diagnostic">
            <div className="analysisPage__diagnostic__header">
              <p className="analysisPage__diagnostic__header__label">
                Diagnóstico
              </p>
              <h3 className="analysisPage__diagnostic__header__title">
                O que os números revelam
              </h3>
            </div>
            <div className="analysisPage__diagnostic__content">
              <div className="analysisPage__diagnostic__problem">
                <p className="analysisPage__diagnostic__problem__label">
                  Raiz do problema
                </p>
                <p className="analysisPage__diagnostic__problem__text">
                  Esta coleção está muito centrada. Quase 2 em cada 3 perfumes
                  vêm da mesma família aromática — o que é uma{" "}
                  <span>escolha clara, mas também um ponto fraco.</span>
                </p>
              </div>
              <div className="analysisPage__diagnostic__context">
                <p className="analysisPage__diagnostic__context__label">
                  Contexto estratégico
                </p>
                <p className="analysisPage__diagnostic__context__text">
                  Uma coleção especializada pode ser forte. A questão é: essa
                  concentração nasceu de uma <span>escolha consciente</span> ou
                  de <span>falta de exploração?</span> Se é proposital, ótimo —
                  se é acaso, há oportunidade real.
                </p>
              </div>
            </div>
          </div>
          <div className="analysisPage__content__practical-impact">
            <div className="analysisPage__practical-impact__header">
              <p className="analysisPage__practical-impact__header__label">
                Impacto prático
              </p>
              <h3 className="analysisPage__practical-impact__header__title">
                Onde a coleção performa
              </h3>
            </div>
            <div className="analysisPage__practical-impact__content">
              <div className="analysisPage__practical-impact__good">
                <p className="analysisPage__practical-impact__good__label">
                  ✓ Bem-sucedida em
                </p>
                <div className="analysisPage__practical-impact__good__list">
                  <div className="analysisPage__practical-impact__good__item">
                    <div className="analysisPage__practical-impact__good__item-label">
                      <p className="analysisPage__good__span-title">
                        🌙 Noites
                      </p>
                      <p className="analysisPage__good__span-percentage">95%</p>
                    </div>
                    <div>
                      <div className="analysisPage__practical-impact__good__item-bar">
                        <div className="analysisPage__practical-impact__good__item-bar-fill-night"></div>
                      </div>
                    </div>
                  </div>
                  <div className="analysisPage__practical-impact__good__item">
                    <div className="analysisPage__practical-impact__good__item-label">
                      <p className="analysisPage__good__span-title">
                        ❄️ Clima frio
                      </p>
                      <p className="analysisPage__good__span-percentage">92%</p>
                    </div>
                    <div>
                      <div className="analysisPage__practical-impact__good__item-bar">
                        <div className="analysisPage__practical-impact__good__item-bar-fill-cold"></div>
                      </div>
                    </div>
                  </div>
                  <div className="analysisPage__practical-impact__good__item">
                    <div className="analysisPage__practical-impact__good__item-label">
                      <p className="analysisPage__good__span-title">
                        💼 Formal
                      </p>
                      <p className="analysisPage__good__span-percentage">88%</p>
                    </div>
                    <div>
                      <div className="analysisPage__practical-impact__good__item-bar">
                        <div className="analysisPage__practical-impact__good__item-bar-fill-formal"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="analysisPage__practical-impact__bad">
                <p className="analysisPage__practical-impact__bad__label">
                  ✗ Crítica em
                </p>
                <div className="analysisPage__practical-impact__bad__list">
                  <div className="analysisPage__practical-impact__bad__item">
                    <div className="analysisPage__practical-impact__bad__item-label">
                      <p className="analysisPage__bad__span-title">
                        ☀️ Dia quente
                      </p>
                      <p className="analysisPage__bad__span-percentage">12%</p>
                    </div>
                    <div>
                      <div className="analysisPage__practical-impact__bad__item-bar">
                        <div className="analysisPage__practical-impact__bad__item-bar-fill-hotday"></div>
                      </div>
                    </div>
                  </div>
                  <div className="analysisPage__practical-impact__bad__item">
                    <div className="analysisPage__practical-impact__bad__item-label">
                      <p className="analysisPage__bad__span-title">
                        🏖️ Praia e verão
                      </p>
                      <p className="analysisPage__bad__span-percentage">8%</p>
                    </div>
                    <div>
                      <div className="analysisPage__practical-impact__bad__item-bar">
                        <div className="analysisPage__practical-impact__bad__item-bar-fill-beach"></div>
                      </div>
                    </div>
                  </div>
                  <div className="analysisPage__practical-impact__bad__item">
                    <div className="analysisPage__practical-impact__bad__item-label">
                      <p className="analysisPage__bad__span-title">
                        🏃 Exercício
                      </p>
                      <p className="analysisPage__bad__span-percentage">5%</p>
                    </div>
                    <div>
                      <div className="analysisPage__practical-impact__bad__item-bar">
                        <div className="analysisPage__practical-impact__bad__item-bar-fill-sports"></div>
                      </div>
                    </div>
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

export default AnalysisPage;
