function SearchCollection({value, onChange}) {

  return (
    <div className="collectionPage__search__wrap">
      <div className="collectionPage__form">
        <input
          name="searchInput"
          type="text"
          className="collectionPage__search__input"
          placeholder="Buscar por nome ou marca..."
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default SearchCollection;
