import React from 'react'
import { RickAndMorty } from '../../interfaces/rick-and-morty'

interface PropsCharacters {
    character: RickAndMorty[],
}

const Characters = ({ character }: PropsCharacters) => {


    return (
        <div className="row">
            {character.map((item, index) => {
                <div key={index} className="col">
                    <div className="card">
                        <img src={item.image} alt="" />
                    </div>
                </div>
            })}
        </div>
    )
}

export default Characters
