import { useContext } from "react"
import { SearchContext } from "@app/contexts/SearchContext"
import { GlobalContext, Search } from "@app/types"
import { SearchItemProps } from "./types"
import { globalContext } from "@app/contexts"
import { INITIAL_ZOOM } from "@app/globals"

export const SearchItem: React.FC<SearchItemProps> = ({ children }) => {
	const { stations, map, toggleDetailMode, updateDetailStation } = useContext(globalContext) as GlobalContext
	const { resetSearch } = useContext(SearchContext) as Search
	const handleClick = () => {
		resetSearch()
		const chosenStation = stations.features.find(station => station.name === children)

		if (chosenStation) {
			const lng = chosenStation.geometry.coordinates[0]
			const lat = chosenStation.geometry.coordinates[1]

			map.current.setZoom(INITIAL_ZOOM)
			map.current.flyTo({center:[lng, lat]});
			updateDetailStation(chosenStation)
			toggleDetailMode()
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