import { categories } from "../../../utils/consts";

function CardCount({ name }) {
  const number = categories.find((cat) => cat.name === name)?.perfumes.length ?? 0;
  return (
    <span className="categoriesPage__card-count">
      <span className="categoriesPage__card-count-dot"></span>
      <span className="categoriesPage__card-count-num">{number}</span>
      <span className="categoriesPage__card-count-label">na coleção</span>
    </span>
  );
}

export default CardCount;