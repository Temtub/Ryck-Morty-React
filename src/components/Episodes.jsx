import React from "react";
import { useFetchEpisodes } from "../hooks/useEpisodes"; // Asegúrate de ajustar la ruta correcta

export default function Episodes() {
  const { episodes, loading, error } = useFetchEpisodes();

  return (
    <main className="main">
      <h1>All episodes.</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {episodes && (
        <div>
          {/* Renderiza el contenido de los episodios aquí */}
        </div>
      )}
    </main>
  );
}
