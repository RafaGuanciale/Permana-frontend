import lupa from "../images/icons/lupa.png";
import CollectionPageCard from "../components/Cards/CollectionPageCards";
import { useContext, useState } from "react";
import { CollectionContext } from "../contexts/CollectionContext";
import { PopupContext } from "../contexts/PopupContext";
import SearchCollection from "../components/Pages/CollectionPage/SearchCollection";

function CollectionPage() {
  const { collection } = useContext(CollectionContext);
  const { handleOpenPopup } = useContext(PopupContext);
  const [searchValue, setSearchValue] = useState("");
  const [selectedPill, setSelectedPill] = useState("");
  const isEmpty = collection.length === 0;
  const families = collection.map((item) => item.perfumeId?.mainFamily);
  const totalFamilies = Array.from(new Set(families));
  const occasions = collection.map((item) => item.perfumeId?.mainOccasion);
  const totalOccasions = new Set(occasions).size;
  const climates = collection.map((item) => item.perfumeId?.mainClimate);
  const totalClimates = new Set(climates).size;

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCollection = collection.filter((card) => {
    const matchesSearch =
      card.perfumeId.name
        ?.toLowerCase()
        ?.includes(searchValue?.toLowerCase()) ||
      card.perfumeId.brand?.toLowerCase()?.includes(searchValue?.toLowerCase());
    const matchesFamily =
      !selectedPill || card.perfumeId.mainFamily === selectedPill;

    return matchesSearch && matchesFamily;
  });

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
            : `${collection.length} fragrâncias que compõem sua identidade.`}
        </p>
        <div className="collectionPage__stats__row">
          <div className="collectionPage__stat__card">
            <div className="collectionPage__stat__val">{collection.length}</div>
            <div className="collectionPage__stat__label">Perfumes</div>
          </div>
          <div className="collectionPage__stat__card">
            <div className="collectionPage__stat__val">
              {totalFamilies.length}
            </div>
            <div className="collectionPage__stat__label">Famílias</div>
          </div>
          <div className="collectionPage__stat__card">
            <div className="collectionPage__stat__val">{totalOccasions}</div>
            <div className="collectionPage__stat__label">Ocasiões</div>
          </div>
          <div className="collectionPage__stat__card">
            <div className="collectionPage__stat__val">{totalClimates}</div>
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
              onClick={() => handleOpenPopup("drawer")}
            >
              + Adicionar primeiro perfume
            </button>
            <div className="collectionPage__empty__hints">
              <span className="collectionPage__empty__hint">
                Sua família predominante
              </span>
              <span className="collectionPage__empty__hint">
                Análise da coleção
              </span>
              <span className="collectionPage__empty__hint">
                Recomendações personalizadas
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
              <SearchCollection
                value={searchValue}
                onChange={handleChangeSearch}
              />
              <button
                type="button"
                className="collectionPage__add__btn"
                onClick={() => handleOpenPopup("drawer")}
              >
                + Adicionar
              </button>
            </div>
            <div className="collectionPage__pills">
              <button
                onClick={() => setSelectedPill("")}
                className={`collectionPage__pill ${selectedPill === "" ? "collectionPage__pill-active" : ""}`}
              >
                Todos
              </button>
              {totalFamilies.map((pill) => (
                <button
                  onClick={() => setSelectedPill(pill)}
                  className={`collectionPage__pill ${selectedPill === pill ? "collectionPage__pill-active" : ""}`}
                  key={pill}
                >
                  {pill}
                </button>
              ))}
            </div>
            <div className="collectionPage__list">
              {filteredCollection.map((card) => (
                <CollectionPageCard
                  key={card._id}
                  name={card.perfumeId.name}
                  brand={card.perfumeId.brand}
                  image={card.perfumeId.link}
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
