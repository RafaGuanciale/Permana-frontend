import { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/token";
import { getCollection, addPerfumeToCollection } from "../utils/api";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      setIsLoading(false);
      return;
    }
    getCollection(jwt)
      .then((data) => {
        setCollection(data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const addPerfume = (perfumeId) => {
    addPerfumeToCollection(getToken(), perfumeId)
      .then(() => getCollection(getToken()))
      .then((data) => setCollection(data))
      .catch(console.error);
  };

  return (
    <CollectionContext.Provider value={{ collection, addPerfume, isLoading }}>
      {children}
    </CollectionContext.Provider>
  );
}
