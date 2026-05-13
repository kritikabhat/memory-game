import CatchPokemon from "./CatchPokemon"

export default function GameGrid({ handleUrlAndNames, urlAndNames, handleScores}) {

  function handleClickPokemon(e) {
    let id = e.target.id
    handleScores(id)
  }
  function handleKeyEnterPokemon(e) {
    if (e.key === "Enter")
      handleClickPokemon(e)
  }

  return (
      <CatchPokemon handleUrlAndNames={handleUrlAndNames} 
        urlAndNames={urlAndNames} handleClickPokemon={handleClickPokemon} 
        handleKeyEnterPokemon={handleKeyEnterPokemon} />
  )
}