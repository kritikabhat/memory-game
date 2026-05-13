import CatchPokemon from "./CatchPokemon"

export default function GameGrid({ handleUrlAndNames, urlAndNames, handleScores}) {

  function handleClickPokemon(e) {
    let id = e.target.id
    console.log("Clicked")
    handleScores(id)
    console.log("should trigger re-render")
  }
  
  return (
      <CatchPokemon handleUrlAndNames={handleUrlAndNames} urlAndNames={urlAndNames} handleClickPokemon={handleClickPokemon} />
  )
}