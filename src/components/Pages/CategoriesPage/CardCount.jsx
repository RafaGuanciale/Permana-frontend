import { CollectionContext } from "../../../contexts/CollectionContext";
import { useContext } from "react";

function CardCount({ name }) {
  const { perfumeByCategory } = useContext(CollectionContext);

  return (
    <span className="categoriesPage__card-count">
      <span className="categoriesPage__card-count-dot"></span>
      <span className="categoriesPage__card-count-num">
        {perfumeByCategory[name.toLowerCase()]?.length || 0}
      </span>
      <span className="categoriesPage__card-count-label">na coleção</span>
    </span>
  );
}

export default CardCount;
