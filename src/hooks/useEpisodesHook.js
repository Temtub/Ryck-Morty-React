
import { useEffect } from "react"

export const useEpisodesHook =async (setEpisodes)=>{

    let episodes = ""

    useEffect()={
        fetch("https://rickandmortyapi.com/api/episode")
        .then( (data) => JSON.parse(data) )
        .then( (json) => episodes = json)

    }

    return episodes
}