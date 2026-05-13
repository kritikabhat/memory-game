import { useState, useEffect } from 'react'

export default function CatchPokemon() {
  const [loading, setLoading] = useState(false)
  const [urls, setUrls] = useState([])

  // const pokemonNames = ["bulbasaur", "pikachu", "charmander", "squirtle", 
  //  "pidgeot", "geodude", "eevee", "snorlax", "machoke", "gengar" ]

  const pokemonNames = ["bulbasaur", "pikachu"]
  const pokemonURLs = pokemonNames.map((item) => `https://pokeapi.co/api/v2/pokemon/${item}`)

  useEffect(() => {
    const getMultiplePokemons = async () => {
      setLoading(true)

      try {

      const requests = pokemonURLs.map(async (url) => {
        const response = await fetch(url)
        if (!response.ok) 
          throw new Error(`Response status: ${response.status}`)
        return response.json()
      })
      const results = await Promise.all(requests)
      const imageURLs = results.map((item) => item.sprites.other["official-artwork"].front_default)
      setUrls(imageURLs)

      } catch {
        console.log(error)
        console.log(error.message)
      } finally {
        setLoading(false)
      }    
    }

    getMultiplePokemons()
  }, [])

  console.log("Urls after: ")
  console.log(urls)

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }

  return (<div className="gameGrid">
      <div className="pokemonCard">
        
      </div>

  </div>)
}