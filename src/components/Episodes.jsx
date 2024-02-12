
import { useState, useEffect } from "react"

import { useEpisodesHook } from "../hooks/useEpisodesHook"

export default function Episodes(){

    const [ episodes, setEpisodes ] = useState(null)

    setEpisodes()
    return(

        <main className="main">

           <h1>All episodes.</h1>


        </main>
    )
}