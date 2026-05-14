import arrowDown from "../images/icons/arrow-down.png";
import kayakOceano from "../images/perfumes/kaiak-oceano.png";
import versacePourHomme from "../images/perfumes/Versace_pour_homme.jpg";
import aquaDiGioEdt from "../images/perfumes/acqua_di_gio.jpg";
import malbecGold from "../images/perfumes/malbec-gold.jpg";
import leauDissey from "../images/perfumes/isseyMiyake-leauDissey.png";
import coloniaAdp from "../images/perfumes/acquaDiParma-colonia.jpg";
import essencialNatura from "../images/perfumes/natura-essencial.jpg";
import bottleHb from "../images/perfumes/hugoBoss-bottled.jpg";
import diorHommeIntense from "../images/perfumes/dior-hommeIntense.jpg";
import { useState } from "react";

function recomendationPage() {
  const [openCategory, setOpenCategory] = useState("");

  const expandCategory = (e) => {
    const category = e.currentTarget.dataset.name;
    setOpenCategory((prev) => (prev === category ? "" : category));
  };

  return (
    <section className="recomendationPage" id="recomendationPage">
      <div className="recomendationPage__header">
        <p className="recomendationPage__eyebrow">INTELIGÊNCIA DA COLEÇÃO</p>
        <h2 className="section__tittle recomendationPage__title">
          Recomendações para sua coleção
        </h2>
        <p className="section__subtittle recomendationPage__subtitle">
          Baseado na análise da sua coleção, identificamos os perfis olfativos
          que precisam de atenção.
        </p>
        <div className="recomendationPage__gap__container">
          <div className="recomendationPage__gap__container-wraper">
            <p className="recomendationPage__gap__title">cobertura olfativa</p>
            <div className="recomendationPage__gap__bars">
              <div className="recomendationPage__gap__wrap-bar"></div>
              <div className="recomendationPage__gap__fill-bar"></div>
            </div>
            <p className="recomendationPage__gap__description">
              3 de 6 famílias cobertas - 3 lacunas identificadas
            </p>
          </div>
          <h3 className="recomendationPage__gap__indicator">
            3<span className="recomendationPage__gap__indicator-span">/6</span>
          </h3>
        </div>
      </div>
      <div className="recomendationPage__container">
        <div className="recomendationPage__content">
          <div
            data-name="fresh"
            className="recomendationPage__olfactory_categories recomendationPage__olfactory_categories-fresh"
            onClick={expandCategory}
          >
            <div className="recomendationPage__categories_header-top">
              <div className="recomendationPage__fresh-bar"></div>
              <div className="recomendationPage__categories_header">
                <p className="recomendationPage__categories_header-eyebrow">
                  perfil olfativo
                </p>
                <h2 className="recomendationPage__categories_header-title">
                  Frescos
                </h2>
              </div>
              <img
                className={`recomendationPage__categories__header-button ${
                  openCategory === "fresh"
                    ? "recomendationPage__categories__header-button__active"
                    : ""
                }`}
                src={arrowDown}
                alt="Seta para baixo"
              />
            </div>
            <div className="recomendationPage__categories_header-under">
              <p className="recomendationPage__categories-subtitle">
                Sua coleção tem poucas representações de notas frescas e
                marinhas
              </p>
            </div>
            <div
              className={`recomendationPage__olfactory_categories-cards recomendationPage__fresh-container ${openCategory === "fresh" ? "recomendationPage__category-active" : ""}`}
            >
              <div className="recomendationPage__diagnostic__container">
                <div className="recomendationPage__diagnostic__label">
                  <p className="recomendationPage__diagnostic__title">
                    Representação na coleção
                  </p>
                  <p className="recomendationPage__diagnostic__percent">0%</p>
                </div>
                <div className="recomendationPage__diagnostic__bars">
                  <div className="recomendationPage__diagnostic__wrap-bar"></div>
                  <div className="recomendationPage__diagnostic__fill-bar"></div>
                </div>
                <p className="recomendationPage__diagnostic__subtitle">
                  Completamente ausente. Frescos equilibram coleções amadeiradas
                  e são essenciais para o calor do verão brasileiro.
                </p>
              </div>
              <div className="recomendationPage__active__container">
                <div className="recomendationPage__fresh-low">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-light"></div>
                    <div className="recomendationPage__image_overlay-light"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={kayakOceano}
                      alt="Kaiak Oceano"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__low-eyebrow">LIGHT</p>
                    <h2 className="recomendationPage__low-title">
                      Kaiak Oceano
                    </h2>
                    <p className="recomendationPage__low-brand">Natura</p>
                    <p className="recomendationPage__low-description">
                      Aquático fresco com notas marinhas e amadeiradas. O
                      clássico brasileiro do gênero.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__low-price">Até R$300</p>
                      <button
                        class="recomendationPage__footer__button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendationPage__fresh-mid">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-premium"></div>
                    <div className="recomendationPage__image_overlay-premium"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={versacePourHomme}
                      alt="Kaiak Oceano"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__light-eyebrow">PREMIUM</p>
                    <h2 className="recomendationPage__light-title">
                      Versace Pour Homme
                    </h2>
                    <p className="recomendationPage__light-brand">Versace</p>
                    <p className="recomendationPage__light-description">
                      Aquático fresco com notas marinhas e amadeiradas. O
                      clássico brasileiro do gênero.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__light-price">
                        R$300-800
                      </p>
                      <button
                        class="recomendationPage__footer__light-button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendationPage__fresh-high">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-high"></div>
                    <div className="recomendationPage__image_overlay-high"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={aquaDiGioEdt}
                      alt="Kaiak Oceano"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__light-eyebrow">HIGH</p>
                    <h2 className="recomendationPage__light-title">
                      Acqua di Gio EDT
                    </h2>
                    <p className="recomendationPage__light-brand">
                      Giorgio Armani
                    </p>
                    <p className="recomendationPage__light-description">
                      O aquático mais icônico do mundo. Bergamota, jasmin e
                      notas marinhas mediterrâneas.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__light-price">R$800+</p>
                      <button
                        class="recomendationPage__footer__light-button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomendationPage__categories-eyebrow"></div>
          </div>

          <div
            data-name="citrus"
            className="recomendationPage__olfactory_categories recomendationPage__olfactory_categories-citrus"
            onClick={expandCategory}
          >
            <div className="recomendationPage__categories_header-top">
              <div className="recomendationPage__citric-bar"></div>
              <div className="recomendationPage__categories_header">
                <p className="recomendationPage__categories_header-eyebrow">
                  perfil olfativo
                </p>
                <h2 className="recomendationPage__categories_header-title">
                  Cítricos
                </h2>
              </div>
              <img
                className={`recomendationPage__categories__header-button ${
                  openCategory === "citrus"
                    ? "recomendationPage__categories__header-button__active"
                    : ""
                }`}
                src={arrowDown}
                alt="Seta para baixo"
              />
            </div>
            <div className="recomendationPage__categories_header-under">
              <p className="recomendationPage__categories-subtitle">
                Adicione leveza e frescor para os dias de calor
              </p>
            </div>
            <div
              className={`recomendationPage__olfactory_categories-cards recomendationPage__citrus-container ${openCategory === "citrus" ? "recomendationPage__category-active" : ""}`}
            >
              <div className="recomendationPage__diagnostic__container">
                <div className="recomendationPage__diagnostic__label">
                  <p className="recomendationPage__diagnostic__title">
                    Representação na coleção
                  </p>
                  <p className="recomendationPage__diagnostic__percent">20%</p>
                </div>
                <div className="recomendationPage__diagnostic__bars">
                  <div className="recomendationPage__diagnostic__wrap-bar"></div>
                  <div className="recomendationPage__diagnostic__citric-bar"></div>
                </div>
                <p className="recomendationPage__diagnostic__subtitle">
                  Quase inexistente. Cítricos trazem leveza e frescor,
                  fundamental para dias quentes e ambientes de trabalho.
                </p>
              </div>
              <div className="recomendationPage__active__container">
                <div className="recomendationPage__fresh-low">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-light"></div>
                    <div className="recomendationPage__image_overlay-light"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={malbecGold}
                      alt="Malbec Gold"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__low-eyebrow">LIGHT</p>
                    <h2 className="recomendationPage__low-title">
                      Malbec Gold
                    </h2>
                    <p className="recomendationPage__low-brand">O Boticário</p>
                    <p className="recomendationPage__low-description">
                      Cítrico amadeirado com bergamota e sândalo. Acessível com
                      excelente desempenho.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__low-price">Até R$300</p>
                      <button
                        class="recomendationPage__footer__button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendationPage__fresh-mid">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-premium"></div>
                    <div className="recomendationPage__image_overlay-premium"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={leauDissey}
                      alt="leau Dissey"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__light-eyebrow">PREMIUM</p>
                    <h2 className="recomendationPage__light-title">
                      L'eau D'issey Pour Homme
                    </h2>
                    <p className="recomendationPage__light-brand">
                      Issey Miyake
                    </p>
                    <p className="recomendationPage__light-description">
                      Perfume icônico com um frescor cítrico-aquático, com notas
                      vibrantes de yuzu combinadas com especiarias e madeiras.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__light-price">
                        R$300-800
                      </p>
                      <button
                        class="recomendationPage__footer__light-button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendationPage__fresh-high">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-high"></div>
                    <div className="recomendationPage__image_overlay-high"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={coloniaAdp}
                      alt="Acqua di Parma"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__light-eyebrow">HIGH</p>
                    <h2 className="recomendationPage__light-title">Colonia</h2>
                    <p className="recomendationPage__light-brand">
                      Acqua di Parma
                    </p>
                    <p className="recomendationPage__light-description">
                      Cítrico clássico italiano com bergamota e vetiver.
                      Elegância atemporal e sofisticada.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__light-price">R$800+</p>
                      <button
                        class="recomendationPage__footer__light-button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomendationPage__categories-eyebrow"></div>
          </div>

          <div
            data-name="floral"
            className="recomendationPage__olfactory_categories recomendationPage__olfactory_categories-floral"
            onClick={expandCategory}
          >
            <div className="recomendationPage__categories_header-top">
              <div className="recomendationPage__floral-bar"></div>
              <div className="recomendationPage__categories_header">
                <p className="recomendationPage__categories_header-eyebrow">
                  perfil olfativo
                </p>
                <h2 className="recomendationPage__categories_header-title">
                  Florais
                </h2>
              </div>
              <img
                className={`recomendationPage__categories__header-button ${
                  openCategory === "floral"
                    ? "recomendationPage__categories__header-button__active"
                    : ""
                }`}
                src={arrowDown}
                alt="Seta para baixo"
              />
            </div>
            <div className="recomendationPage__categories_header-under">
              <p className="recomendationPage__categories-subtitle">
                Explore notas delicadas que contrastam com seu perfil amadeirado
              </p>
            </div>
            <div
              className={`recomendationPage__olfactory_categories-cards recomendationPage__floral-container ${openCategory === "floral" ? "recomendationPage__category-active" : ""}`}
            >
              <div className="recomendationPage__diagnostic__container">
                <div className="recomendationPage__diagnostic__label">
                  <p className="recomendationPage__diagnostic__title">
                    Representação na coleção
                  </p>
                  <p className="recomendationPage__diagnostic__percent">8%</p>
                </div>
                <div className="recomendationPage__diagnostic__bars">
                  <div className="recomendationPage__diagnostic__wrap-bar"></div>
                  <div className="recomendationPage__diagnostic__floral-bar"></div>
                </div>
                <p className="recomendationPage__diagnostic__subtitle">
                  Explore notas delicadas que contrastam com seu perfil
                  amadeirado dominante e ampliam sua versatilidade.
                </p>
              </div>
              <div className="recomendationPage__active__container">
                <div className="recomendationPage__fresh-low">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-light"></div>
                    <div className="recomendationPage__image_overlay-light"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={essencialNatura}
                      alt="natura essencial"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__low-eyebrow">LIGHT</p>
                    <h2 className="recomendationPage__low-title">Essencial</h2>
                    <p className="recomendationPage__low-brand">Natura</p>
                    <p className="recomendationPage__low-description">
                      Floral amadeirado com identidade brasileira. Sofisticado,
                      acessível e com ótima longevidade.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__low-price">Até R$300</p>
                      <button
                        class="recomendationPage__footer__button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendationPage__fresh-mid">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-premium"></div>
                    <div className="recomendationPage__image_overlay-premium"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={bottleHb}
                      alt="Hugo Boss Bottled"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__light-eyebrow">PREMIUM</p>
                    <h2 className="recomendationPage__light-title">Bottled</h2>
                    <p className="recomendationPage__light-brand">Hugo Boss</p>
                    <p className="recomendationPage__light-description">
                      Maçã, canela e sândalo com baunilha. Aromático clássico,
                      confiável e extremamente versátil.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__light-price">
                        R$300-800
                      </p>
                      <button
                        class="recomendationPage__footer__light-button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="recomendationPage__fresh-high">
                  <div className="recomendationPage__image-container">
                    <div className="recomendationPage__image_background-high"></div>
                    <div className="recomendationPage__image_overlay-high"></div>
                    <img
                      className="recomendationPage__olfactory-image"
                      src={diorHommeIntense}
                      alt="dior homme intense"
                    />
                  </div>
                  <div className="recomendationPage__olfactory-texts">
                    <p className="recomendationPage__light-eyebrow">HIGH</p>
                    <h2 className="recomendationPage__light-title">
                      Dior Homme Intense
                    </h2>
                    <p className="recomendationPage__light-brand">Dior</p>
                    <p className="recomendationPage__light-description">
                      Íris empoado com lavanda e cedro. Sofisticado e sensual
                      para ocasiões especiais.
                    </p>
                    <div className="recomendationPage__footer">
                      <p className="recomendationPage__light-price">R$800+</p>
                      <button
                        class="recomendationPage__footer__light-button"
                        onclick="toggleWish(this)"
                      >
                        ♡ Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomendationPage__categories-eyebrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default recomendationPage;
