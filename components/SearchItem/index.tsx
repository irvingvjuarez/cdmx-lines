import { useContext } from "react"
import { SearchContext } from "@app/contexts/SearchContext"
import { GlobalContext, Search } from "@app/types"
import { SearchItemProps } from "./types"
import { globalContext } from "@app/contexts"

export const SearchItem: React.FC<SearchItemProps> = ({ children }) => {
	const { stations } = useContext(globalContext) as GlobalContext
	const { resetSearch } = useContext(SearchContext) as Search
	const handleClick = () => {
		resetSearch()
		const chosenStation = stations.features.find(station => station.name === children)

		if (chosenStation) {
			console.log(chosenStation.geometry.coordinates)
		}
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