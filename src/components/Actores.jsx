import { useEffect, useState } from "react"

import Card from "./Card"
import { useActors } from "../hooks/useActors"

export default function Actores(){

    let actores = useActors()

    return(
        <main >
            <h1>Estas en actores.</h1>
            {/* {console.log(actores)} */}

            <article className="d-flex flex-row flex-wrap"> 
                {actores ? actores.map((actor) => <Card key={actor.id} src={actor.image} nombre={actor.name} especie={actor.species}></Card>) : <p>Cargando...</p>}
            </article>
        </main>
    )
}