import { useContext } from "react"
import { SearchContext } from "@app/contexts/SearchContext"
import { Search } from "@app/types"
import { SearchItemProps } from "./types"

export const SearchItem: React.FC<SearchItemProps> = ({ children }) => {
	const { resetSearch } = useContext(SearchContext) as Search
	const handleClick = () => {
		resetSearch()
		console.log(children)
	}

	return (
		<li
			className="pad hover:bg-[#929292] hover:text-white cursor-pointer block"
			onClick={handleClick}
		>
			{children}
		</li>
	)
}