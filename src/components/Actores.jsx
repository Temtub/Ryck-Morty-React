import { useEffect, useState } from "react"

import Card from "./Card"

export default function Actores(){

    const [ actores, setActores] = useState(null)

    useEffect(()=>{
        const getActores = async ()=>{
            fetch("https://rickandmortyapi.com/api/character")
            .then((data) => data.json() )
            .then((json) => setActores(json.results) )
        }
        getActores()
        
    },[])

    return(
        <main >
            <h1>Estas en actores.</h1>
            {console.log(actores)}

            <article className="d-flex flex-row flex-wrap">

                {actores ? actores.map((actor) => <Card key={actor.id} src={actor.image} nombre={actor.name} especie={actor.species}></Card>) : <p>Cargando...</p>}
            </article>
        </main>
    )
}