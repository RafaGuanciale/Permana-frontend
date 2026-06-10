import { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/token";
import { getCollection, addPerfumeToCollection } from "../utils/api";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    getCollection(jwt)
      .then((data) => {
        setCollection(data);
      })
      .catch(console.error);
  }, []);

  const addPerfume = (perfumeId) => {
    addPerfumeToCollection(getToken(), perfumeId)
      .then((newItem) => setCollection([...collection, newItem]))
      .catch(console.error);
  };

  return (
    <CollectionContext.Provider value={{ collection, addPerfume }}>
      {children}
    </CollectionContext.Provider>
  );
}
