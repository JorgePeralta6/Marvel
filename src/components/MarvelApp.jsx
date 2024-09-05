import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import { GridCharacters } from "./GridCharacters";
import { useState } from "react";

 
export const MarvelApp = () => {
    const [pagina, setPagina] = useState()
    const {characters,} = useCharacters(pagina)
  
    return (
        <>
        <GridCharacters characters={characters}/>
        <Pagination count={10} color="primary" className="d-flex justify-content-center mt-5"  onChange={(e,value)=>{setPagina(value)}} />
        </>
    )
}
 