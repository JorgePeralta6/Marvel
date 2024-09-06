import CryptoJS from "crypto-js"
import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import { GridCharacters } from "./GridCharacters";
import { BuscarCharacters } from "./BuscarCharacters";

import { useState } from "react";

 
export const MarvelApp = () => {
    const [pagina, setPagina] = useState()
    const [buscarPer, setBuscarPer] = useState("");
    const {characters} = useCharacters(pagina, buscarPer)

    const handleBuscar = (character) => {
        setBuscarPer(character)
      }
  
    return (
        <>
        <BuscarCharacters handleBuscar={handleBuscar}/>
        <GridCharacters characters={characters}/>
        <Pagination count={10} color="primary" className="d-flex justify-content-center mt-5"  onChange={(e,value)=>{setPagina(value)}} />
        </>
    )
}
 