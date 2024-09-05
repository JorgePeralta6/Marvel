import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"


export const useCharacters = () => {
  
    const [characters, setCharacters] = useState()
 
    useEffect  (() => {
        // si no tiene dependecias, solo se ejecuta la primera carga del componente
        // Si si tiene dependecias, se ejecuta cada que la dependecia cambia

        reqCharacters().then((data) =>{
            setCharacters(data.results)
        })

    }, []/*dependecias*/)

    const handleGetMarvel = async(characters, e) => {
        
        e.preventDefault()

        await reqCharacters(characters).then(() => {
            setCharacters()
        })

    }

    // retorno del hook
    return {
        characters,
        handleGetMarvel
        
  }
}
