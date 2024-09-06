import { useState } from "react"

export const BuscarCharacters = ({handleBuscar}) => {
    const [buscarPer, setBuscarPer] = useState('')
   
    const handleEncontrar = (e) =>{
        e.preventDefault()
        handleBuscar(buscarPer)
    }
  return (
    <>
      <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
        <form className="d-flex" action="" onSubmit={handleEncontrar}>
          <input type="text" className="form-control me-2" placeholder="Buscar Heroe" onChange={(e)=>{setBuscarPer(e.target.value)}} />
          <input type="submit" value="Buscar" className="btn btn-info" />
        </form>
      </div>
    </>
  )
}