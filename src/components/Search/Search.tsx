import React, { useEffect, useState,createContext } from 'react'
import { useContextData } from '../../Context/dataContext/dataContext'
import { RickAndMorty } from '../../interfaces/rick-and-morty'
import Buttons from '../Buttons'
import Characters from '../Characters'


export const Search = () => {

   /* const [character, setCharacters] = useState([] as RickAndMorty[]) */
  //  const [data, setData] = useState({} as RickAndMorty)
    const {setCharacters, count} = useContextData()
    

    useEffect(() => {
        getData()
    }, [count])
    


    const getData = async () => {
        /* https://rickandmortyapi.com/api/character?page=${index} */
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await res.json()
        if (response) {
            setCharacters(response.results)
            
        }

        // const findCharacter = (personajes: any) => {
        //     let { persojane } = api.find(j => j.personaje == personajes)
        //     getData(persojane)
        // }




    }

    return (
        <div className="container">
            <div className="justify-content-center m-4">
            <button 
            className="btn btn-outline-primary" 
            type="button" 
            onClick={getData} 
            >Search
            </button>   
            </div>
        </div>
    )
}

export default Search
