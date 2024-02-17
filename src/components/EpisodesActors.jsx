import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EpisodesActors(){

    //Get the param id from the url
    const {idParam} = useParams()
    // console.log(idParam)

    const [episode, setEpisode] = useState(null)

    if(episode !== idParam){
        setEpisode(idParam)   
    }

    const useGetOneEpisode =async (id)=>{
        return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((data) => data.json() )
        .then((json) => { console.log(json) })
    }

    useEffect(()=>{
        console.log(useGetOneEpisode(episode))

    }, [episode])
    

    return(
        <div className="">
            
        </div>
    )
}