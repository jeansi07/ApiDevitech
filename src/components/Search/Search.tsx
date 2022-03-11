import React, { useEffect, useState } from 'react'
import { RickAndMorty } from '../../interfaces/rick-and-morty'
import Characters from '../Characters'

export const Search = () => {

   const [character, setCharacters] = useState([] as RickAndMorty[])
    const [data, setData] = useState({} as RickAndMorty)

    // useEffect(() => {
    //     getData(5)
    // }, [])


    const getData = async (serie: number) => {
        /* https://rickandmortyapi.com/api/character?page=${index} */
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${serie}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await res.json()
        console.log(response);
        setCharacters(response.results)


        // const findCharacter = (personajes: any) => {
        //     let { persojane } = api.find(j => j.personaje == personajes)
        //     getData(persojane)
        // }




    }

    return (
        <div>
            <input type="text" />

            <div> {data.id} </div>

            <button onClick={() => getData(1)} >Search</button>
            

            <Characters character={character}/>
        </div>
    )
}

export default Search
