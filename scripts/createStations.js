import fs from "fs"
import stationNames from "./stationNames.json" assert { type: "json" }
import points from "./points.json" assert { type: "json" }

const stations = []

stationNames.forEach((stationItem, index) => {
	const station = {
		id: index + 1,
		name: stationItem.station_name,
		coordinates: points[index]
	}

	stations.push(station)
})

fs.writeFileSync("./data/stations.json", JSON.stringify(stations))