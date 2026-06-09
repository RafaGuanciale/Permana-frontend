import { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/token";
import { getCollection } from "../utils/api";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    getCollection(jwt)
      .then((data) => {
        setCards(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CollectionContext.Provider value={{ cards }}>
      {children}
    </CollectionContext.Provider>
  );
}
