import fs from "fs";
import bindings from "./bindings.json" assert { type: "json" }
import points from "./points.json" assert { type: "json" }

const lines = {};

bindings.forEach((binding) => {
  if (binding.line_id in lines === false) {
    lines[binding.line_id] = [];
  }

  lines[binding.line_id].push(binding.station_id);
});

const entries = Object.entries(lines);
entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];

	const stations = value.map(index => points[index - 1])
  lines[key] = {
		"line_number": key,
		"name": "",
		"stations": stations,
		"color": ""
	}
});

fs.writeFileSync("./data/data.json", JSON.stringify(lines))