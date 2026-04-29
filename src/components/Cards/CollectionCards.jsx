function CollectionCards(props) {
    const { name, brand, image } = props;
  return (
    <div className="collection__card">
      <img src={image} alt={name} className="collection__card__image" />
      <div className="collection__card__info">
        <p className="collection__card__name">{name}</p>
        <p className="collection__card__brand">{brand}</p>
      </div>
    </div>
  );
}
export default CollectionCards;
