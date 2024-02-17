import { useEffect, useState } from "react";

import Episode from "./Episode";

import { Outlet } from "react-router-dom";

export default function Episodes() {

  const [episodes, setEpisodes] = useState(null)

  const getNewEpisodes = async () => {
      return fetch("https://rickandmortyapi.com/api/episode")
      .then((data) => data.json())
      .then((json) => setEpisodes(json.results) )
  }

  useEffect(() => {
    getNewEpisodes()
    // console.log(episodes)
    // setEpisodes(episodes)
  }, [])
  return (
    <main className="episodes__main">
      <h1>All episodes.</h1>
      {/* {console.log(episodes)} */}

      <div className="episodes__body">
        <article className="episodes__episodesCont">
          {episodes ? episodes.map((episode) => <Episode key={episode.id} name={episode.name} id={episode.id}></Episode>) : <p>Cargando...</p>}
        </article>

        <Outlet>
        </Outlet>
      </div>
    </main>
  );
}
