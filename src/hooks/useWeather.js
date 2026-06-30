import { useEffect, useState } from "react";
import { getToken } from "../utils/token";
import { getWeather } from "../utils/api";

export function useWeather() {
  const [weather, setWeather] = useState({
    temp: "--°",
    condition: "Carregando...",
    detail: "",
  });

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude, jwt)
          .then((data) => {
            setWeather(data);
          })
          .catch(() => {
            setWeather({
              temp: "--°",
              condition: "Clima indisponível",
              detail: "",
            });
          });
      },
      () => {
        setWeather({
          temp: "--°",
          condition: "Localização indisponível",
          detail: "",
        });
      },
    );
  }, []);

  return { weather, setWeather };
}