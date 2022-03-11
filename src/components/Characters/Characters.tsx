import React from 'react'
import { RickAndMorty } from '../../interfaces/rick-and-morty'

interface PropsCharacters {
    character: RickAndMorty[],
}

export const Characters = ({ character }: PropsCharacters) => {

    
    return (
        <div className="row">
            {character.map((i, index) => (
                <div key={index} className="col">
                    <div className="card" style={{minWidth:"200px"}} >
                        <img src={i.image} alt="" />
                        <h2 className="card-title">{i.name}</h2>
                        <p>{i.gender}</p>
                        <p>{i.status}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
