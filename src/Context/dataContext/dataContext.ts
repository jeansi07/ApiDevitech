import { useContext,createContext } from "react";
import { RickAndMorty } from "../../interfaces/rick-and-morty";

export type RickTypeContext = {
    characters:RickAndMorty[]
    setCharacters:(o:RickAndMorty[])=>void
}

export const ContextData = createContext <RickTypeContext> ({
    characters:[],
    setCharacters:()=>{},
})

export const useContextData=()=>useContext(ContextData)

export default{
    ContextData,
    useContextData
}