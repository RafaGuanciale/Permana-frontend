import { useContext, useState, useEffect } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import { CollectionContext } from "../../contexts/CollectionContext";
import { searchPerfumes } from "../../utils/api";
import { getToken } from "../../utils/token";

function PerfumesDrawer() {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchPerfumes(getToken(), searchValue).then((data) => {
        setResults(data);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const { handleClosePopup } = useContext(PopupContext);
  const { collection, addPerfume } = useContext(CollectionContext);
  const search = searchValue.trim().toLowerCase();
  const ownedIds = collection.map((perfume) => perfume._id);
  const selectedPerfume =
    results.find((perfume) => perfume._id === selectedId) || null;
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    setSelectedId(null);
  };
  const handleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };
  const handleAdd = () => {
    if (!selectedPerfume) return;
    addPerfume(selectedPerfume._id);
    setSelectedId(null);
  };

  return (
    <div className="PerfumesDrawer__overlay" onClick={handleClosePopup}>
      <div
        className="PerfumesDrawer__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="PerfumesDrawer__header">
          <div>
            <p className="PerfumesDrawer__eyebrow">Adicionar à coleção</p>
            <h3 className="PerfumesDrawer__title">Buscar fragrância</h3>
          </div>
          <button
            aria-label="Fechar drawer"
            className="PerfumesDrawer__close"
            type="button"
            onClick={handleClosePopup}
          ></button>
        </div>

        <div className="PerfumesDrawer__search">
          <span className="PerfumesDrawer__searchIcon">⌕</span>
          <input
            className="PerfumesDrawer__input"
            name="perfumeSearch"
            type="text"
            placeholder="Buscar por nome ou marca…"
            value={searchValue}
            onChange={handleChangeSearch}
          />
        </div>

        <p className="PerfumesDrawer__listLabel">
          {search === ""
            ? "Sugestões para começar"
            : `${results.length} resultado(s)`}
        </p>

        <div className="PerfumesDrawer__list">
          {results.length === 0 && (
            <div className="PerfumesDrawer__empty">
              <p className="PerfumesDrawer__emptyTitle">Nada por aqui.</p>
              <p className="PerfumesDrawer__emptyText">
                Nenhum perfume corresponde à sua busca. Revise a grafia ou tente
                só a marca.
              </p>
            </div>
          )}

          {results.map((perfume) => {
            const isOwned = ownedIds.includes(perfume._id);
            const isSelected = selectedId === perfume._id;
            let itemClassName = "PerfumesDrawer__item";
            if (isSelected) itemClassName += " PerfumesDrawer__item--selected";
            if (isOwned) itemClassName += " PerfumesDrawer__item--owned";

            return (
              <button
                key={perfume._id}
                className={itemClassName}
                type="button"
                disabled={isOwned}
                onClick={() => handleSelect(perfume._id)}
              >
                <img
                  className="PerfumesDrawer__thumb"
                  src={perfume.link}
                  alt={perfume.name}
                />
                <span className="PerfumesDrawer__info">
                  <span className="PerfumesDrawer__brand">{perfume.brand}</span>
                  <span className="PerfumesDrawer__name">{perfume.name}</span>
                </span>

                {isOwned ? (
                  <span className="PerfumesDrawer__ownedTag">Na coleção</span>
                ) : (
                  <span
                    className={
                      isSelected
                        ? "PerfumesDrawer__radio PerfumesDrawer__radio--checked"
                        : "PerfumesDrawer__radio"
                    }
                  >
                    {isSelected ? "✓" : ""}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="PerfumesDrawer__footer">
          {selectedPerfume ? (
            <>
              <img
                className="PerfumesDrawer__footerThumb"
                src={selectedPerfume.link}
                alt={selectedPerfume.name}
              />
              <span className="PerfumesDrawer__footerInfo">
                <span className="PerfumesDrawer__footerName">
                  {selectedPerfume.name}
                </span>
                <span className="PerfumesDrawer__footerBrand">
                  {selectedPerfume.brand}
                </span>
              </span>
              <button
                className="PerfumesDrawer__button"
                type="button"
                onClick={handleAdd}
              >
                Adicionar à coleção
              </button>
            </>
          ) : (
            <span className="PerfumesDrawer__hint">
              Selecione um perfume para adicionar
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PerfumesDrawer;
