import mapboxgl from "mapbox-gl";
import stations from "@app/data/stations.json"

const iconsID = "stationsIcons"

export const renderIcons = (map: mapboxgl.Map) => {
	stations.features.forEach(feature => map.loadImage(feature.properties.url, (error, image) => {
		if (error) throw error
		map.addImage(feature.properties.url, image as any)
	}))

	map.addSource(iconsID, {
		type: "geojson",
		data: stations as any
	})

	map.addLayer({
		'id': "icons",
		'type': 'symbol',
		'source': iconsID, // reference the data source
		"minzoom": 13,
		'layout': {
			'icon-image': ["get", "url"], // reference the image
			'icon-size': 0.25,
			'text-field': ["get", "name"],
			'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
			'text-radial-offset': 1.5,
			'text-justify': 'auto'
		}
	})
}