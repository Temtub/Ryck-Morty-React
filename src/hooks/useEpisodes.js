

import { useEffect, useState } from "react";
import { useEpisodesHook } from "../hooks/useEpisodesHook";

export function useFetchEpisodes() {
  const [episodes, setEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await useEpisodesHook();
        setEpisodes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente.

  return { episodes, loading, error };
}
