import { useContext, useRef, useState, useEffect, useCallback } from "react";
import { CollectionContext } from "../../contexts/CollectionContext";
import { PopupContext } from "../../contexts/PopupContext";
import { Link } from "react-router-dom";
import CollectionCards from "../Cards/CollectionCards";
import DashboardCollectionSkeleton from "../Loading/DashboardCollectionSkeleton";

function DashboardNewCollection() {
  const { handleOpenPopup } = useContext(PopupContext);
  const { collection, isLoading } = useContext(CollectionContext);
  
  // ---- estado do carrossel ----
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const isEmpty = collection.length === 0;
  const isScrollable = pages > 1;
  
  const measure = useCallback(() => {
      const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const per = el.clientWidth || 1;
    const cols =
      parseInt(getComputedStyle(el).getPropertyValue("--dc-cols"), 10) || 5;
    const totalPages =
      max <= 4 ? 1 : Math.max(1, Math.ceil(collection.length / cols));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setPages(totalPages);
    setPage(Math.min(totalPages - 1, Math.round(el.scrollLeft / per)));
  }, [collection.length]);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [measure]);

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

   if (isLoading) return <DashboardCollectionSkeleton />;

  return (
    <div className="dashCollection__content">
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
          <div className="dashCollection__carousel">
            <div className="dashCollection__row">

              <div className="dashCollection__viewport">
                {isScrollable && (
                  <button
                    type="button"
                    className="dashCollection__carousel__arrow dashCollection__carousel__arrow--left"
                    onClick={() => scrollByPage(-1)}
                    disabled={atStart}
                    aria-label="Ver fragrâncias anteriores"
                  >
                    ‹
                  </button>
                )}

                <div className="dashCollection__grid" ref={trackRef}>
                  {collection.map((card) => (
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
                    onClick={() => scrollByPage(1)}
                    disabled={atEnd}
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

            {isScrollable && (
              <div className="dashCollection__dots">
                {Array.from({ length: pages }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      "dashCollection__dot" +
                      (i === page ? " dashCollection__dot--active" : "")
                    }
                  />
                ))}
              </div>
            )}
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
