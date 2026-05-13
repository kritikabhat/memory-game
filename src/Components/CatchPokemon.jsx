import { useState, useEffect } from 'react'

export default function CatchPokemon({ handleUrlAndNames, urlAndNames, handleClickPokemon, handleKeyEnterPokemon }) {
  const [loading, setLoading] = useState(false)
  
  const pokemonNames = ["bulbasaur", "pikachu", "charmander", "squirtle", 
          "pidgeot", "geodude", "eevee", "snorlax", "machoke", "gengar",
           "mudkip", "umbreon" ]
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
      
      handleUrlAndNames(myData)

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
  <div className='gameGrid'>
  {
    urlAndNames.map((obj) => {
      return (
        <div className="pokemonCard" key={obj.name}>
          <div className='imgDiv' onClick={handleClickPokemon} onKeyUp={handleKeyEnterPokemon}>
            <img id={obj.name} src={obj.url} alt={`Image of ${obj.name}`} tabIndex={0} />
          </div>
          <div className='pokemonName'>{obj.name}</div>
        </div>
      )
    })
  } 
  </div>       
  </>)
}