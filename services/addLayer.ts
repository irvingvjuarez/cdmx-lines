import mapboxgl from "mapbox-gl";

export const addLayer = (map: mapboxgl.Map) => {
	map.addLayer({
		'id': 'route',
		'type': 'line',
		'source': 'route',
		'layout': {
			'line-join': 'round',
			'line-cap': 'round'
		},
		'paint': {
			'line-color': '#F50087',
			'line-width': 8
		}
	});
}