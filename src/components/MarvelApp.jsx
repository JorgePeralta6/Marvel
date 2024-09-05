import { useCharacters } from "../hooks/useCharacters"
import { BuscarCharacters } from "./BuscarCharacters"
import Pagination from '@mui/material/Pagination';
import { GridCharacters } from "./GridCharacters";

 
export const MarvelApp = () => {
 
    const {characters, handleGetMarvel} = useCharacters()
  
    return (
        <>
        <BuscarCharacters handleGetMarvel={handleGetMarvel}/>
        <GridCharacters characters={characters}/>
        <Pagination count={100} color="primary" onChange={(e, value) => console.log(value) } />
        </>
    )
}
 
 
