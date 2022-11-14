import { LinesData, Stations } from "@app/types"
import { ChangeEvent, useState } from "react"

type UseSearchConfig = {
	stations: Stations;
	linesData: LinesData;
}

export const useSearch = (config: UseSearchConfig) => {
	const { stations, linesData } = config
	const [inputValue, setInputValue] = useState("")
	const [searchResult, setSearchResult] = useState<any[]>([])

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const input = evt.target.value.toLowerCase()
		setInputValue(input)

		const filterStations = stations.features.filter(feature => feature.name.toLowerCase().includes(input))
		const filterLines = linesData.features.filter((feature, index) => feature.name.toLowerCase().includes(input))

		const finalFilter = [...filterStations, ...filterLines].filter((_item, index) => index < 10)
		setSearchResult(finalFilter)
	}

	return {
		handleChange,
		searchResult,
		setSearchResult
	}
}