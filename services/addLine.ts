import { AddLineConfig } from "@app/types"

export const addLine = (config: AddLineConfig) => {
	const { map, lineName, coordinates } = config

	map.addSource(lineName, {
		'type': 'geojson',
		'data': {
			'type': 'Feature',
			'properties': {},
			'geometry': {
				'type': 'LineString',
				'coordinates': coordinates
			}
		}
	})
}