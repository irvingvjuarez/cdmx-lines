import { AddLayerConfig } from "@app/types";

export const addLayer = (config: AddLayerConfig) => {
	const { name, map, color } = config

	map.addLayer({
		'id': name,
		'type': 'line',
		'source': name,
		'layout': {
			'line-join': 'round',
			'line-cap': 'round'
		},
		'paint': {
			'line-color': Array.isArray(color) ? color[1] : color,
			'line-width': 8
		}
	});
}