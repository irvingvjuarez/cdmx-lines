import { LinesData, Stations } from "@app/types"
import { ChangeEvent, useState } from "react"

type UseSearchConfig = {
	stations: Stations;
	linesData: LinesData;
}

export const useSearch = (config: UseSearchConfig) => {
	const { stations, linesData } = config
	const [searchResult, setSearchResult] = useState<any[]>([])

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const input = evt.target.value.toLowerCase()
		const filterStations = stations.features.filter((feature, index) => {
			if (index <= 10) {
				return feature.name.toLowerCase().includes(input)
			}
		})
		const filterLines = linesData.features.filter((feature, index) => {
			if (index <= 10) {
				return feature.name.toLowerCase().includes(input)
			}
		})

		setSearchResult([...filterStations, ...filterLines])
	}

	return {
		handleChange,
		searchResult
	}
}