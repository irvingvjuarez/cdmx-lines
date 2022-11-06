import { Line } from "@app/types"
import mapboxgl from "mapbox-gl"

export const addLine = (map: mapboxgl.Map, line: Line) => {
	const { name, stations } = line

	map.addSource(name, {
		'type': 'geojson',
		'data': {
			'type': 'Feature',
			'properties': {},
			'geometry': {
				'type': 'LineString',
				'coordinates': stations
			}
		}
	})
}