import React, { useEffect, useState } from 'react'
import { useContextData } from '../../Context/dataContext/dataContext'
import { RickAndMorty } from '../../interfaces/rick-and-morty'
import Buttons from '../Buttons'

interface PropsCharacters {
    character: RickAndMorty[],
}

export const Characters = () => {

    const { characters, search } = useContextData()
    const [arryAxu, setArryAux] = useState(characters)

    useEffect(() => {
        if (search.trim().length > 2) {
            setArryAux(characters.filter(prso => prso.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        } else {
            setArryAux(characters)
            
        }
    }, [search, characters])

    return (

        <div className="row">
            <Buttons />
            {arryAxu.map((i, index) => (
                <div key={index} className="col">
                    <div className="card" style={{ minWidth: "180px" }} >
                        <img src={i.image} alt="" />
                        <h3 className="card-title">{i.name}</h3>
                        <p>{i.gender}</p>
                        <p>{i.status}</p>
                        <p>{i.species}</p>
                    </div>
                </div>
            ))}
            <Buttons />
        </div>
    )
}

export default Characters
