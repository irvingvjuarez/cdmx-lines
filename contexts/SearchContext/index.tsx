import { Search } from "@app/types";
import { createContext } from "react";

export const SearchContext = createContext<null | Search>(null)