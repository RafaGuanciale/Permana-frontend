import { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/token";
import {
  getCollection,
  addPerfumeToCollection,
  removePerfumeFromCollection,
} from "../utils/api";

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

  const removePerfume = (perfumeId) => {
    removePerfumeFromCollection(getToken(), perfumeId)
      .then(() => getCollection(getToken()))
      .then((data) => setCollection(data))
      .catch(console.error);
  };

  const collectionCategories = () => {
    const categories = {
      trabalho: [],
      casual: [],
      academia: [],
      calor: [],
      frio: [],
      encontro: [],
      noite: [],
      festas: [],
      eventos: [],
      viagem: [],
    };
    collection.forEach((item) => {
      item.perfumeId.occasions.forEach((occasion) => {
        const occasionKey = occasion.toLowerCase();
        if (categories[occasionKey]) {
          categories[occasionKey].push(item);
          console.log(item)
        }
      });
    });
    return categories;
  };
  const perfumeByCategory = collectionCategories();

  return (
    <CollectionContext.Provider
      value={{ collection, addPerfume, removePerfume, isLoading, perfumeByCategory }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
