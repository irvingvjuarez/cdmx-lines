const fs = require("fs");
const linesOrder = require("../data/linesOrder.json")
const stations = require("../data/stations.json")
const data = require("../data/data.json")

const line3 = linesOrder.find(line => line.line_id === 3);
const line3Stations = line3.line_stations;
const line3StationsCoords = line3Stations.map(stationName => {
	const station = stations.find(item => item.name === stationName)
	return station?.coordinates || []
})

const newData = [...data]
const line3Index = newData.findIndex(line => line.line_number === 3)
newData[line3Index].stations = line3StationsCoords

fs.writeFileSync("./data/data.json", JSON.stringify(newData))