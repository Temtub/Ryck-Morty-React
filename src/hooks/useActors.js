import { useEffect, useState } from "react"
import { getActores } from "../services/getNewActores"

export const useActors = ()=>{

    const [ actores, setActores] = useState([])

    const loadActors = async ()=>{
        let actors = await getActores()
        setActores(actors)
    }
    
    useEffect(()=>{
        loadActors()
    },[])

    return actores
}