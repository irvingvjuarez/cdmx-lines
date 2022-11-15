import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { useContext, useRef } from "react"
import { useSearch } from "@app/hooks/useSearch"
import { SearchBar } from "@app/components/SearchBar"
import { SearchList } from "@app/containers/SearchList"
import { SearchContext } from "@app/contexts/SearchContext"

export const SearchForm = () => {
	const inputRef = useRef<null | HTMLInputElement>(null)
	const { linesData, stations } = useContext(globalContext) as GlobalContext
	const search = useSearch({ linesData, stations, inputRef })

	return(
		<SearchContext.Provider value={search}>
			<section className="modal-style flex-col top-4">
				<SearchBar inputRef={inputRef} />

				<SearchList />
			</section>
		</SearchContext.Provider>
	)
}