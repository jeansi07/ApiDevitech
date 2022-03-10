import React, { useEffect, useState } from 'react'
import { RickAndMorty } from '../../interfaces/rick-and-morty'

export const Search = () => {

    const [character, setCharacters] = useState([] as RickAndMorty[])
    const [data, setData] = useState({})

    useEffect(() => {
        getData(5)
    }, [])


    const getData = async (serie: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${serie}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await res.json()
        setData(response.info)
        console.log(res);


        // const findCharacter = (personajes: any) => {
        //     let { persojane } = api.find(j => j.personaje == personajes)
        //     getData(persojane)
        // }




    }

    return (
        <div>
            <input type="text" />

            <button>Search</button>
            
        </div>
    )
}

export default Search
