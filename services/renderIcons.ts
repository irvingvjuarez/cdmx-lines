import mapboxgl from "mapbox-gl";
import stations from "@app/data/stations.json"

const imgsUrls = stations.features
	.filter(feature => feature.imgUrl !== "")
	.map(feature => feature.imgUrl)

const iconsID = "stationsIcons"

export const renderIcons = (map: mapboxgl.Map) => {
	imgsUrls.forEach(url => map.loadImage(url, (error, image) => {
		if (error) throw error
		map.addImage(url, image as any)
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
		}
	})
}