import fs from "fs";
import bindings from "./bindings.json" assert { type: "json" }
import points from "./points.json" assert { type: "json" }
import linesData from "./lines.json" assert { type: "json" }

const lines = {};

bindings.forEach((binding) => {
	const lineId = binding.line_id
	const stationId = binding.station_id

  if (lineId in lines === false) {
		const lineMetaData = linesData.find(line => line.line_id === lineId)

    lines[lineId] = {
			line_number: lineId,
			stations: [],
			color: lineMetaData.line_color
		};
  }

  lines[lineId].stations.push(stationId);
});

const entries = Object.entries(lines);
entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];

	const stations = value.stations.map(index => points[index - 1])
  lines[key].stations = stations
});

fs.writeFileSync("./data/data.json", JSON.stringify(lines))