import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const PokeFetch = () => {

    const [pokemon, setPokemon] = useState({})
    const [name, setName] = useState('')

    const [toggle, setToggle] = useState(false)
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name

    useEffect(() => {
        // axios(url)
        // .then(res => setGatito(res.data[0]))

        const fetchData = async () => {
            try {
                let res = await axios(url)
                setPokemon(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()

    }, [name])
   console.log({pokemon, name});

  return (
    <div>
        <p>{pokemon?.name}</p>
        <p>{pokemon?.id}</p>
        <img src={pokemon?.sprites?.front_default} alt="" />
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
    </div>
  )
}

export default PokeFetch