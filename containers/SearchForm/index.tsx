import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { useContext, useRef } from "react"
import { useSearch } from "@app/hooks/useSearch"
import { SearchBar } from "@app/components/SearchBar"
import { SearchList } from "@app/containers/SearchList"

export const SearchForm = () => {
	const inputRef = useRef<null | HTMLInputElement>(null)
	const { linesData, stations } = useContext(globalContext) as GlobalContext
	const { handleChange, searchResult, resetSearch } = useSearch({ linesData, stations, inputRef })

	return(
		<section className="modal-style flex-col top-4">
			<SearchBar
				inputRef={inputRef}
				handleChange={handleChange}
				handleReset={resetSearch}
			/>

			<SearchList searchResult={searchResult} />
		</section>
	)
}