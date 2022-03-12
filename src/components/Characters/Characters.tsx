import React from 'react'
import { useContextData } from '../../Context/dataContext/dataContext'
import { RickAndMorty } from '../../interfaces/rick-and-morty'
import Buttons from '../Buttons'

interface PropsCharacters {
    character: RickAndMorty[],
}

export const Characters = () => {

    const {characters} = useContextData()

    return (
        
        <div className="row">
            <Buttons/>
            {characters.map((i, index) => (
                <div key={index} className="col">
                    <div className="card" style={{ minWidth: "200px" }} >
                        <img src={i.image} alt="" />
                        <h3 className="card-title">{i.name}</h3>
                        <p>{i.gender}</p>
                        <p>{i.status}</p>
                        <p>{i.species}</p>
                        
                    </div>
                </div>
            ))}
           
        </div>
    )
}

export default Characters
