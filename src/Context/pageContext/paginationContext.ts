import { createContext, useContext } from "react";
import { RickAndMorty } from "../../interfaces/rick-and-morty";

export type PaginationTypeContext = {
  pagination: number;
  setPagination: (p: number) => void;
};

export const ContextPage = createContext<PaginationTypeContext>({
  pagination: 1,
  setPagination: () => void {},
});

export const useContextPage = () => useContext(ContextPage);

export default {
  ContextPage,
  useContextPage,
};
