import { createContext } from "react";
import { GlobalContext } from "../types"

const globalContext = createContext<GlobalContext | null>(null)
export const GlobalProvider = globalContext.Provider