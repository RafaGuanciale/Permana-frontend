import lupa from "../images/icons/lupa.png";
import setaDireita from "../images/icons/right_arrow.png";
import { initialCards } from "../utils/consts";
import CollectionPageCard from "../components/Cards/CollectionPageCards";

function CollectionPage() {
  const isEmpty = initialCards.length === 0;

  return (
    <section className="collectionPage" id="collectionPage">
      <div className="collectionPage__header">
        <div className="collectionPage__header__circle-1"></div>
        <div className="collectionPage__header__circle-2"></div>
        <p className="collectionPage__eyebrow">Sua coleção</p>
        <h2 className="section__tittle collectionPage__title">Minha Coleção</h2>
        <p className="section__subtittle collectionPage__subtitle">
          {isEmpty
            ? "Sua jornada olfativa começa aqui!"
            : `${initialCards.length} fragrâncias que compõem sua identidade.`}
          {initialCards.length} fragrâncias que compõem sua identidade.
        </p>
        <div className="collectionPage__stats__row">
          <div className="collectionPage__stat__card">
            <div className="collectionPage__stat__val">
              {initialCards.length}
            </div>
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
      <div className="collectionPage__content">
        {isEmpty ? (
          <div className="collectionPage__empty">
            <div className="collectionPage__empty__icon">✦</div>
            <h3 className="collectionPage__empty__title">
              Nenhuma fragrância ainda
            </h3>
            <p className="collectionPage__empty__text">
              Adicione seu primeiro perfume e comece a descobrir sua identidade
              olfativa.
            </p>
            <button
              type="button"
              className="collectionPage__add__btn collectionPage__empty__cta"
            >
              + Adicionar primeiro perfume
            </button>
            <div className="collectionPage__empty__hints">
              <span className="collectionPage__empty__hint">
                🌿 Sua família predominante
              </span>
              <span className="collectionPage__empty__hint">
                📊 Análise da coleção
              </span>
              <span className="collectionPage__empty__hint">
                💡 Recomendações personalizadas
              </span>
            </div>
          </div>
        ) : (
          <>
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
              {initialCards.map((card) => (
                <CollectionPageCard
                  key={card.id}
                  name={card.name}
                  brand={card.brand}
                  image={card.link}
                  card={card}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CollectionPage;
