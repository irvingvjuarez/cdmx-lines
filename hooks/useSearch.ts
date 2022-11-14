import { LinesData, Stations } from "@app/types"
import { ChangeEvent, MutableRefObject, useState } from "react"

type UseSearchConfig = {
	stations: Stations;
	linesData: LinesData;
	inputRef: MutableRefObject<HTMLInputElement | null>
}

export const useSearch = (config: UseSearchConfig) => {
	const { stations, linesData, inputRef } = config
	const [searchResult, setSearchResult] = useState<any[]>([])

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const input = evt.target.value.toLowerCase()

		const filterStations = stations.features.filter(feature => feature.name.toLowerCase().includes(input))
		const filterLines = linesData.features.filter((feature, index) => feature.name.toLowerCase().includes(input))

		const finalFilter = [...filterStations, ...filterLines].filter((_item, index) => index < 10)
		setSearchResult(finalFilter)
	}

	const resetSearch = () => {
		(inputRef.current as HTMLInputElement).value = ""
		setSearchResult([])
	}

	return {
		handleChange,
		searchResult,
		resetSearch
	}
}