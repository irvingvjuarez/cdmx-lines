import fs from "fs"
import linesOrder from "./linesOrder.json" assert { type: "json" }
import stationsData from "./stations.json" assert { type: "json" }
import completeData from "./data.json" assert { type: "json" }

const sortedLines = linesOrder.map(line => {
	const id = line.line_id;
	const stations = line.line_stations;

	const sortedPoints = stations.map(station => {
		const stationData = stationsData.find(st => st.name === station)
		const coordinates = stationData?.coordinates

		return coordinates
	})

	return {
		id,
		sortedPoints
	}
})

const fullData = completeData.map(item => {
	const sortedLine = sortedLines.find(sorted => sorted.id === item.line_number)
	return {
		...item,
		stations: sortedLine.sortedPoints
	}
})

fs.writeFileSync("./data/data.json", fullData)