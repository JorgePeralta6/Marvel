import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"


export const useCharacters = (pagina, buscarPer) => {
  
    const [characters, setCharacters] = useState()
    const [total, setTotal] = useState();
 
    useEffect  (() => {
        // si no tiene dependecias, solo se ejecuta la primera carga del componente
        // Si si tiene dependecias, se ejecuta cada que la dependecia cambia
        
        reqCharacters(pagina, buscarPer).then((data)=>{
            setCharacters(data.results)
            setTotal(data.total)
        })
      }, [pagina, buscarPer]);


    // retorno del hook
    return {
        characters,
        total
  }
}
