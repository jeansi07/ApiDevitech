import { useContext, createContext, Dispatch, SetStateAction } from "react";
import { RickAndMorty } from "../../interfaces/rick-and-morty";

export type RickTypeContext = {
  count: number;
  characters: RickAndMorty[];
  setCharacters: (o: RickAndMorty[]) => void;
  setCount: Dispatch<SetStateAction<number>>;
};

export const ContextData = createContext<RickTypeContext>({
  characters: [],
  setCharacters: () => {},
  count: 1,
  setCount: () => {},
});

export const useContextData = () => useContext(ContextData);

export default {
  ContextData,
  useContextData,
};
