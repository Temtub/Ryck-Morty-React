export const getActores = async ()=>{
    return fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json() )
    .then((json) => json.results )
}