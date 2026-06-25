import { useContext, useState, useEffect, useRef } from "react";
import { CollectionContext } from "../../contexts/CollectionContext";
import { PopupContext } from "../../contexts/PopupContext";
import { Link } from "react-router-dom";
import CollectionCards from "../Cards/CollectionCards";
import DashboardCollectionSkeleton from "../Loading/DashboardCollectionSkeleton";

function DashboardNewCollection() {
  const containerRef = useRef(null);

  const { handleOpenPopup } = useContext(PopupContext);
  const { collection, isLoading } = useContext(CollectionContext);
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(5);

  const isEmpty = collection.length === 0;
  const visibleItems = collection.slice(start, start + visible);
  const maxStart = collection.length - visible;
  const isScrollable = collection.length > visible;
  const canGoBack = start > 0;
  const canGoNext = start < maxStart;

  const scrollCard = (direction) => {
    setStart((current) => {
      const next = current + direction;
      return Math.max(Math.min(next, maxStart), 0);
    });
  };

  function getVisible(width) {
    if (width < 540) return 2;
    if (width < 760) return 3;
    if (width < 1040) return 4;
    return 5;
  }

  useEffect(() => {
    const elements = containerRef.current;
    if (!elements) return;

    function updateVisible() {
      const width = elements.clientWidth;
      setVisible(getVisible(width));
    }

    updateVisible();
    const observer = new ResizeObserver(updateVisible);
    observer.observe(elements);
    return () => observer.disconnect();
  }, [isLoading]);

  useEffect(() => {
    setStart((current) => Math.max(Math.min(current, maxStart), 0));
  }, [visible, collection.length]);

  if (isLoading) return <DashboardCollectionSkeleton />;

  return (
    <div className="dashCollection__content" ref={containerRef}>
      <div className="dashCollection__header">
        <div className="dashCollection__header__text">
          <p className="dashCollection__header__section-name">Minha Coleção</p>
          <p className="dashCollection__header__resume">
            {isEmpty
              ? "Nenhuma fragrância ainda"
              : `${collection.length} fragrâncias na sua coleção`}
          </p>
        </div>
      </div>

      {isEmpty ? (
        <div className="dashCollection__empty">
          <p className="dashCollection__empty__icon">✦</p>
          <p className="dashCollection__empty__title">
            Adicione sua primeira fragrância
          </p>
          <p className="dashCollection__empty__text">
            Com pelo menos 3 perfumes, o Aromatik consegue identificar sua
            identidade olfativa e gerar recomendações.
          </p>
          <button
            className="dashCollection__header__add dashCollection__empty__cta"
            onClick={() => handleOpenPopup("drawer")}
          >
            + Adicionar fragrância
          </button>
        </div>
      ) : (
        <>
          <div
            className="dashCollection__carousel"
            style={{ "--dc-cols": visible }}
          >
            <div className="dashCollection__row">
              <div className="dashCollection__viewport">
                {isScrollable && (
                  <button
                    type="button"
                    className="dashCollection__carousel__arrow dashCollection__carousel__arrow--left"
                    onClick={() => scrollCard(-1)}
                    disabled={!canGoBack}
                    aria-label="Ver fragrâncias anteriores"
                  >
                    ‹
                  </button>
                )}

                <div className="dashCollection__grid">
                  {visibleItems.map((card) => (
                    <CollectionCards
                      key={card._id}
                      name={card.perfumeId.name}
                      brand={card.perfumeId.brand}
                      image={card.perfumeId.link}
                      card={card}
                    />
                  ))}
                </div>

                {isScrollable && (
                  <button
                    type="button"
                    className="dashCollection__carousel__arrow dashCollection__carousel__arrow--right"
                    onClick={() => scrollCard(1)}
                    disabled={!canGoNext}
                    aria-label="Ver mais fragrâncias"
                  >
                    ›
                  </button>
                )}
              </div>

              <div
                className="dashCollection__card__new"
                onClick={() => handleOpenPopup("drawer")}
              >
                <div className="dashCollection__new__info">
                  <p className="dashCollection__new__icon">+</p>
                  <p className="dashCollection__new__label">Adicionar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dashCollection__footer">
            <Link className="dashCollection__footer__view" to="/collection">
              Ver coleção completa →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardNewCollection;
