import mapboxgl from "mapbox-gl"

export const addLayers = (map: mapboxgl.Map, sourceID: string) => {
	map.addLayer({
		id: "lines",
		type: "line",
		source: sourceID,
		layout: {
			"line-join": "round",
			"line-cap": "round"
		},
		paint: {
			"line-blur": 5,
			"line-gap-width": 5,
			"line-color": ["get", "color"],
			"line-width": 6
		}
	})
}