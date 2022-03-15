import { useContext, createContext, Dispatch, SetStateAction } from "react";
import { RickAndMorty } from "../../interfaces/rick-and-morty";

export type RickTypeContext = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  characters: RickAndMorty[];
  setCharacters: (o: RickAndMorty[]) => void;
};

export const ContextData = createContext<RickTypeContext>({
  characters: [],
  setCharacters: () => {},
  count: 1,
  setCount: () => {},
  search: "",
  setSearch: () => {},
});

export const useContextData = () => useContext(ContextData);

export default {
  ContextData,
  useContextData,
};
