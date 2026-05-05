function recomendationPagePage() {
  return (
    <section className="recomendationPage" id="recomendationPage">
      <div className="recomendationPage__container">
        <div className="recomendationPage__header">
          <p className="recomendationPage__eyebrow">INTELIGÊNCIA DA COLEÇÃO</p>
          <h2 className="section__tittle recomendationPage__title">
            Recomendações para sua coleção
          </h2>
          <p className="section__subtittle recomendationPage__subtitle">
            Baseado na análise da sua coleção, identificamos os perfis olfativos
            que precisam de atenção.
          </p>
        </div>
        <div className="recomendationPage__content">
          <div
            data-name="fresh"
            className="recomendationPage__olfactory_categories recomendationPage__olfactory_categories-fresh"
          >
            <div className="recomendationPage__categories_header-top">
              <div className="recomendationPage__fresh-bar"></div>
              <div className="recomendationPage__categories_header">
                <p className="recomendationPage__categories_header-eyebrow">
                  perfil olfativo
                </p>
                <h2 className="recomendationPage__categories_header-title">Frescos</h2>
              </div>
              <img
                className="recomendationPage__categories_header-button"
                src="./images/icons/arrow-down.png"
                alt="Seta para baixo"
              />
            </div>
            <div className="recomendationPage__categories_header-under">
              <p className="recomendationPage__categories-subtitle">
                Sua coleção tem poucas representações de notas frescas e
                marinhas
              </p>
              <div className="recomendationPage__categories-eyebrow"></div>
            </div>
            <div className="recomendationPage__olfactory_categories-cards recomendationPage__fresh-container">
              <div className="recomendationPage__fresh-low">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-light"></div>
                  <div className="recomendationPage__image_overlay-light"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/kaiak-oceano.png"
                    alt="Kaiak Oceano"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__low-eyebrow">LIGHT</p>
                  <h2 className="recomendationPage__low-title">Kaiak Oceano</h2>
                  <p className="recomendationPage__low-brand">Natura</p>
                  <p className="recomendationPage__low-description">
                    Aquático fresco com notas marinhas e amadeiradas. O clássico
                    brasileiro do gênero.
                  </p>
                  <p className="recomendationPage__low-price">Até R$300</p>
                </div>
              </div>
              <div className="recomendationPage__fresh-mid">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-premium"></div>
                  <div className="recomendationPage__image_overlay-premium"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/Versace_pour_homme.JPG"
                    alt="Kaiak Oceano"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__light-eyebrow">PREMIUM</p>
                  <h2 className="recomendationPage__light-title">Versace Pour Homme</h2>
                  <p className="recomendationPage__light-brand">Versace</p>
                  <p className="recomendationPage__light-description">
                    Aquático fresco com notas marinhas e amadeiradas. O clássico
                    brasileiro do gênero.
                  </p>
                  <p className="recomendationPage__light-price">R$300-800</p>
                </div>
              </div>
              <div className="recomendationPage__fresh-high">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-high"></div>
                  <div className="recomendationPage__image_overlay-high"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/acqua di gio.jpg"
                    alt="Kaiak Oceano"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__light-eyebrow">HIGH</p>
                  <h2 className="recomendationPage__light-title">Acqua di Gio EDT</h2>
                  <p className="recomendationPage__light-brand">Giorgio Armani</p>
                  <p className="recomendationPage__light-description">
                    O aquático mais icônico do mundo. Bergamota, jasmin e notas
                    marinhas mediterrâneas.
                  </p>
                  <p className="recomendationPage__light-price">R$800+</p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-name="citrus"
            className="recomendationPage__olfactory_categories recomendationPage__olfactory_categories-citrus"
          >
            <div className="recomendationPage__categories_header-top">
              <div className="recomendationPage__citric-bar"></div>
              <div className="recomendationPage__categories_header">
                <p className="recomendationPage__categories_header-eyebrow">
                  perfil olfativo
                </p>
                <h2 className="recomendationPage__categories_header-title">Cítricos</h2>
              </div>
              <img
                className="recomendationPage__categories_header-button"
                src="./images/icons/arrow-down.png"
                alt="Seta para baixo"
              />
            </div>
            <div className="recomendationPage__categories_header-under">
              <p className="recomendationPage__categories-subtitle">
                Adicione leveza e frescor para os dias de calor
              </p>
              <div className="recomendationPage__categories-eyebrow"></div>
            </div>
            <div className="recomendationPage__olfactory_categories-cards recomendationPage__citrus-container">
              <div className="recomendationPage__fresh-low">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-light"></div>
                  <div className="recomendationPage__image_overlay-light"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/malbec-gold.jpg"
                    alt="Kaiak Oceano"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__low-eyebrow">LIGHT</p>
                  <h2 className="recomendationPage__low-title">Malbec Gold</h2>
                  <p className="recomendationPage__low-brand">O Boticário</p>
                  <p className="recomendationPage__low-description">
                    Cítrico amadeirado com bergamota e sândalo. Acessível com
                    excelente desempenho.
                  </p>
                  <p className="recomendationPage__low-price">Até R$300</p>
                </div>
              </div>
              <div className="recomendationPage__fresh-mid">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-premium"></div>
                  <div className="recomendationPage__image_overlay-premium"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/isseyMiyake-LeauDissey.png"
                    alt="Kaiak Oceano"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__light-eyebrow">PREMIUM</p>
                  <h2 className="recomendationPage__light-title">
                    L'eau D'issey Pour Homme
                  </h2>
                  <p className="recomendationPage__light-brand">Issey Miyake</p>
                  <p className="recomendationPage__light-description">
                    Perfume icônico com um frescor cítrico-aquático, com notas
                    vibrantes de yuzu combinadas com especiarias e madeiras.
                  </p>
                  <p className="recomendationPage__light-price">R$300-800</p>
                </div>
              </div>
              <div className="recomendationPage__fresh-high">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-high"></div>
                  <div className="recomendationPage__image_overlay-high"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/acquaDiParma-colonia.jpg"
                    alt="Kaiak Oceano"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__light-eyebrow">HIGH</p>
                  <h2 className="recomendationPage__light-title">Colonia</h2>
                  <p className="recomendationPage__light-brand">Acqua di Parma</p>
                  <p className="recomendationPage__light-description">
                    Cítrico clássico italiano com bergamota e vetiver. Elegância
                    atemporal e sofisticada.
                  </p>
                  <p className="recomendationPage__light-price">R$800+</p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-name="floral"
            className="recomendationPage__olfactory_categories recomendationPage__olfactory_categories-floral"
          >
            <div className="recomendationPage__categories_header-top">
              <div className="recomendationPage__floral-bar"></div>
              <div className="recomendationPage__categories_header">
                <p className="recomendationPage__categories_header-eyebrow">
                  perfil olfativo
                </p>
                <h2 className="recomendationPage__categories_header-title">Florais</h2>
              </div>
              <img
                className="recomendationPage__categories_header-button"
                src="./images/icons/arrow-down.png"
                alt="Seta para baixo"
              />
            </div>
            <div className="recomendationPage__categories_header-under">
              <p className="recomendationPage__categories-subtitle">
                Explore notas delicadas que contrastam com seu perfil amadeirado
              </p>
              <div className="recomendationPage__categories-eyebrow"></div>
            </div>
            <div className="recomendationPage__olfactory_categories-cards recomendationPage__floral-container">
              <div className="recomendationPage__fresh-low">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-light"></div>
                  <div className="recomendationPage__image_overlay-light"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/natura-essencial.jpg"
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
                  <p className="recomendationPage__low-price">Até R$300</p>
                </div>
              </div>
              <div className="recomendationPage__fresh-mid">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-premium"></div>
                  <div className="recomendationPage__image_overlay-premium"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/hugoBoss-bottled.jpg"
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
                  <p className="recomendationPage__light-price">R$300-800</p>
                </div>
              </div>
              <div className="recomendationPage__fresh-high">
                <div className="recomendationPage__image-container">
                  <div className="recomendationPage__image_background-high"></div>
                  <div className="recomendationPage__image_overlay-high"></div>
                  <img
                    className="recomendationPage__olfactory-image"
                    src="./images/perfumes/dior-diorHommeIntense.jpg"
                    alt="dior homme intense"
                  />
                </div>
                <div className="recomendationPage__olfactory-texts">
                  <p className="recomendationPage__light-eyebrow">HIGH</p>
                  <h2 className="recomendationPage__light-title">Dior Homme Intense</h2>
                  <p className="recomendationPage__light-brand">Dior</p>
                  <p className="recomendationPage__light-description">
                    Íris empoado com lavanda e cedro. Sofisticado e sensual para
                    ocasiões especiais.
                  </p>
                  <p className="recomendationPage__light-price">R$800+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default recomendationPagePage;
