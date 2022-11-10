import {useRef, useState, useEffect} from "react";
import { addLine } from "@app/services/addLine";
import { addLayer } from "@app/services/addLayer";
import { renderIcon } from "@app/services/renderIcon";
import { Line } from "@app/types";

import mapboxgl from "mapbox-gl"
import linesData from "@app/data/data.json"
import stations from "@app/data/stations.json"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export const useMap = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null)
	const map = useRef<mapboxgl.Map | null>(null)
	const [lng, setLng] = useState(-99.14433718)
	const [lat, setLat] = useState(19.40702104)
	const [zoom, setZoom] = useState(15)

	useEffect(() => {
		if (map.current) return

		map.current = new mapboxgl.Map({
			container: mapContainer.current as HTMLDivElement,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [lng, lat],
			zoom: zoom
		})

		const currentMap = map.current as mapboxgl.Map

		currentMap.on("load", () => {
			currentMap.addSource("lines", {
				type: "geojson",
				data: linesData as any
			})

			currentMap.addLayer({
				id: "lines",
				type: "line",
				source: "lines",
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
		})

		const icons = stations.filter(station => station.imgUrl !== "")
		icons.forEach(icon => {
			currentMap.on("load", () => {
				const { imgUrl, coordinates: coords, id } = icon
				renderIcon(currentMap, imgUrl, coords, String(id))
			})
		})
	})

	return {
		mapContainer
	}
}