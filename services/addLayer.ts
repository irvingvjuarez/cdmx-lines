import { Line } from "@app/types";
import mapboxgl from "mapbox-gl"

export const addLayer = (map: mapboxgl.Map, line: Line) => {
	const { name, color } = line

	map.addLayer({
		'id': name,
		'type': 'line',
		'source': name,
		'layout': {
			'line-join': 'round',
			'line-cap': 'round',
			// "visibility": "visible",
			// "line-width": "",
			// "line-trim-offset": "",
			// "line-translate-anchor": "",
			// "line-translate": "",
			// "line-sort-key": "",
			// "line-round-limit": "",
			// "line-pattern": "",
			// "line-opacity": "",
			// "line-offset": "",
			// "line-miter-limit": "",
			// "line-gradient": "",
			// "line-dasharray": "",
			// "line-color": "",
		},
		'paint': {
			"line-blur": 5,
			"line-gap-width": 5,
			'line-color': Array.isArray(color) ? color[1] : color,
			'line-width': 6
		}
	});
}