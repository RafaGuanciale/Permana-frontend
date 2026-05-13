import lupa from "../images/icons/lupa.png";
import bleuChanel from "../images/perfumes/bleu.jpg";
import terreHermes from "../images/perfumes/terre_hermes.jpg";
import bleuNoirNarciso from "../images/perfumes/narcisorodriguez_bleu_noir_parfum.jpg";
import ligthBlueDB from "../images/perfumes/dolcegabbana_lightblue.jpg";
import hommeIntenseDior from "../images/perfumes/dior-hommeintense.jpg";
import setaDireita from "../images/icons/right_arrow.png";

function CollectionPage() {
  return (
    <section className="collectionPage" id="collectionPage">
      <div className="collectionPage__wrapper">
        <div className="collectionPage__header">
          <p className="collectionPage__eyebrow">Sua coleção</p>
          <h2 className="section__tittle collectionPage__title">
            Minha Coleção
          </h2>
          <p className="section__subtittle collectionPage__subtitle">
            5 fragrâncias que compõem sua identidade.
          </p>
          <div className="collectionPage__stats__row">
            <div className="collectionPage__stat__card">
              <div className="collectionPage__stat__val">5</div>
              <div className="collectionPage__stat__label">Perfumes</div>
            </div>
            <div className="collectionPage__stat__card">
              <div className="collectionPage__stat__val">4</div>
              <div className="collectionPage__stat__label">Famílias</div>
            </div>
            <div className="collectionPage__stat__card">
              <div className="collectionPage__stat__val">3</div>
              <div className="collectionPage__stat__label">Ocasiões</div>
            </div>
            <div className="collectionPage__stat__card">
              <div className="collectionPage__stat__val">2</div>
              <div className="collectionPage__stat__label">Climas</div>
            </div>
          </div>
        </div>
        <div className="collectionPage__container">
          <div className="collectionPage__content">
            <div className="collectionPage__toolbar">
              <img
                src={lupa}
                alt="lupa de busca"
                className="collectionPage__lupa"
              />
              <div className="collectionPage__search__wrap">
                <div className="collectionPage__form">
                  <input
                    name="searchInput"
                    type="text"
                    className="collectionPage__search__input"
                    placeholder="Buscar por nome ou marca..."
                  />
                </div>
              </div>
              <button type="button" className="collectionPage__add__btn">
                + Adicionar
              </button>
            </div>
            <div className="collectionPage__pills">
              <button className="collectionPage__pill active">Todos</button>
              <button className="collectionPage__pill">Cítrico</button>
              <button className="collectionPage__pill">Amadeirado</button>
              <button className="collectionPage__pill">Almiscarado</button>
              <button className="collectionPage__pill">Aromático</button>
              <button className="collectionPage__pill">Floral</button>
            </div>
            <div className="collectionPage__list">
              <div className="collectionPage__list__item">
                <img
                  className="collectionPage__item__img"
                  src={bleuChanel}
                  alt=""
                />
                <div className="collectionPage__item__info">
                  <p className="collectionPage__item__brand">Chanel</p>
                  <p className="collectionPage__item__name">Bleu de Chanel</p>
                  <div className="collectionPage__item__tags">
                    <span className="collectionPage__item__tag">Aromático</span>
                    <span className="collectionPage__item__tag">Versátil</span>
                    <span className="collectionPage__item__tag">Ameno</span>
                  </div>
                </div>
                <img
                  className="collectionPage__item__arrow"
                  src={setaDireita}
                  alt=""
                />
              </div>
              <div className="collectionPage__list__item">
                <img
                  className="collectionPage__item__img"
                  src={terreHermes}
                  alt=""
                />
                <div className="collectionPage__item__info">
                  <p className="collectionPage__item__brand">Hermés</p>
                  <p className="collectionPage__item__name">Terre d`Hermès</p>
                  <div className="collectionPage__item__tags">
                    <span className="collectionPage__item__tag">
                      Amadeirado
                    </span>
                    <span className="collectionPage__item__tag">Dia</span>
                    <span className="collectionPage__item__tag">Ameno</span>
                  </div>
                </div>
                <img
                  className="collectionPage__item__arrow"
                  src={setaDireita}
                  alt=""
                />
              </div>
              <div className="collectionPage__list__item">
                <img
                  className="collectionPage__item__img"
                  src={bleuNoirNarciso}
                  alt=""
                />
                <div className="collectionPage__item__info">
                  <p className="collectionPage__item__brand">Narciso Rodriguez</p>
                  <p className="collectionPage__item__name">
                    Bleu Noir
                  </p>
                  <div className="collectionPage__item__tags">
                    <span className="collectionPage__item__tag">
                      Almiscarado
                    </span>
                    <span className="collectionPage__item__tag">Noite</span>
                    <span className="collectionPage__item__tag">Frio</span>
                  </div>
                </div>
                <img
                  className="collectionPage__item__arrow"
                  src={setaDireita}
                  alt=""
                />
              </div>
              <div className="collectionPage__list__item">
                <img
                  className="collectionPage__item__img"
                  src={ligthBlueDB}
                  alt=""
                />
                <div className="collectionPage__item__info">
                  <p className="collectionPage__item__brand">
                    Dolce & Gabbana
                  </p>
                  <p className="collectionPage__item__name">Light Blue</p>
                  <div className="collectionPage__item__tags">
                    <span className="collectionPage__item__tag">Cítrico</span>
                    <span className="collectionPage__item__tag">Casual</span>
                    <span className="collectionPage__item__tag">Calor</span>
                  </div>
                </div>
                <img
                  className="collectionPage__item__arrow"
                  src={setaDireita}
                  alt=""
                />
              </div>
              <div className="collectionPage__list__item">
                <img
                  className="collectionPage__item__img"
                  src={hommeIntenseDior}
                  alt=""
                />
                <div className="collectionPage__item__info">
                  <p className="collectionPage__item__brand">Dior</p>
                  <p className="collectionPage__item__name">
                    Dior Homme Intense
                  </p>
                  <div className="collectionPage__item__tags">
                    <span className="collectionPage__item__tag">Floral</span>
                    <span className="collectionPage__item__tag">Evento</span>
                    <span className="collectionPage__item__tag">Frio</span>
                  </div>
                </div>
                <img
                  className="collectionPage__item__arrow"
                  src={setaDireita}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionPage;
