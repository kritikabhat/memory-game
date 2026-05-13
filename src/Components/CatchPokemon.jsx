import { useState, useEffect } from 'react'

export default function CatchPokemon() {
  const [loading, setLoading] = useState(false)
  const [urlAndNames, setUrlAndNames] = useState([])

  //const pokemonNames = ["bulbasaur", "pikachu", "charmander", "squirtle", 
  //        "pidgeot", "geodude", "eevee", "snorlax", "machoke", "gengar" ]

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

      const myData = results.map(item => 
        ({ name: item.name, 
          url: item.sprites.other["official-artwork"].front_default
        }))
      
      setUrlAndNames(myData)

      } catch {
        console.log(error)
        console.log(error.message)
      } finally {
        setLoading(false)
      }    
    }

    getMultiplePokemons()
  }, [])

  if (loading) {
    console.log("loading")
    return <div>Loading...</div>
  }

  return (<>
  {
    urlAndNames.map((obj) => {
      return (
        <div className="pokemonCard" key={obj.name}>
        <img src={obj.url} alt={`Image of ${obj.name}`} />
        </div>
      )
    })
  }        
  </>)
}