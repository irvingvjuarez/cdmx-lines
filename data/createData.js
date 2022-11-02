import fs from "fs";
import bindings from "./bindings.json" assert { type: "json" }
import points from "./points.json" assert { type: "json" }
import linesData from "./lines.json" assert { type: "json" }

const lines = {};

bindings.forEach((binding) => {
	const { line_id, station_id } = binding

  if (line_id in lines === false) {
		const lineMetaData = linesData.find(line => line.line_id === line_id)
		const { line_color, line_name } = lineMetaData

    lines[line_id] = {
			line_number: line_id,
			stations: [],
			color: line_color,
			name: line_name
		};
  }

  lines[line_id].stations.push(station_id);
});

const entries = Object.entries(lines);
entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];

	const stations = value.stations.map(index => points[index - 1])
  lines[key].stations = stations
});

const lineIds = Object.keys(lines)
const data = lineIds.map(id => lines[id])

fs.writeFileSync("./data/data.json", JSON.stringify(data))