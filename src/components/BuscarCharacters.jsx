import { useState } from "react"

export const BuscarCharacters = ({handleGetMarvel}) => {
    const [characters, setCharacters] = useState('')
  return (
    <>
      <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
        <form className="d-flex" action="" onSubmit={(e)=>{handleGetMarvel(characters,e)}}>
          <input type="text" className="form-control me-2" placeholder="Buscar Heroe" onChange={(e)=>{setCharacters(e.target.value)}} />
          <input type="submit" value="Buscar" className="btn btn-info" />
        </form>
      </div>
    </>
  )
}