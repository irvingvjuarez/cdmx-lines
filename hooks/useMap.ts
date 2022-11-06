import {useRef, useState, useEffect} from "react";
import mapboxgl from "mapbox-gl"
import { addLine } from "@app/services/addLine";
import { addLayer } from "@app/services/addLayer";
import linesData from "@app/data/data.json"
import { AddLayerConfig, AddLineConfig } from "@app/types";

import observatorioIcon from "@app/assets/stationsIcons/observatorio.svg"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export const useMap = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null)
	const map = useRef<mapboxgl.Map | null>(null)
	const [lng, setLng] = useState(-99.14433718)
	const [lat, setLat] = useState(19.40702104)
	const [zoom, setZoom] = useState(13)

	useEffect(() => {
		if (map.current) return

		map.current = new mapboxgl.Map({
			container: mapContainer.current as HTMLDivElement,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [lng, lat],
			zoom: zoom
		})

		const currentMap = map.current as mapboxgl.Map

		linesData.forEach(line => {
			const { name, stations, color } = line

			const addLineConfig: AddLineConfig = {
				map: currentMap,
				lineName: name,
				coordinates: stations
			}

			const addLayerConfig: AddLayerConfig = {
				map: currentMap,
				name,
				color
			}

			currentMap.on("load", () => {
				addLine(addLineConfig);
				addLayer(addLayerConfig);
			})
		})

		currentMap.on("load", () => {
			// Load an image from an external URL.
			const imgUrl = "/assets/stationsIcons/observatorio.png"

			currentMap.loadImage(imgUrl, (error, image) => {
				if (error) throw error;

				// Add the image to the map style.
				currentMap.addImage('cat', image);

				// Add a data source containing one point feature.
				currentMap.addSource('point', {
					'type': 'geojson',
					'data': {
						'type': 'FeatureCollection',
						'features': [{
							"properties": {},
							'type': 'Feature',
							'geometry': {
								'type': 'Point',
								'coordinates': [-99.200669, 19.397486]
							}
						}]
					}
				});

				// Add a layer to use the image to represent the data.
				currentMap.addLayer({
					'id': 'points',
					'type': 'symbol',
					'source': 'point', // reference the data source
					"minzoom": 12,
					'layout': {
						'icon-image': 'cat', // reference the image
						'icon-size': 0.25,
					}
				});
			});
		})
	})

	return {
		mapContainer
	}
}