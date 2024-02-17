
import { Link } from "react-router-dom"

export default function Episode({name, id}){

    return(
        <Link to={"/episodios/"+id}>
        <div className="episode" id={id}>
            <p>{name}</p>
        </div>
        </Link>
    )
}