

export default function Card({src, nombre, especie}){

    return (

        <div className="m-3">
            <img src={src} alt="" />
            <h2 className="text-wrap">{nombre}</h2>
            <p>{especie}</p>
        </div>
    )
}