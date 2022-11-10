import {useRef, useState, useEffect} from "react";
import { addLines } from "@app/services/addLines";
import { addLayers } from "@app/services/addLayers";
import { renderIcon } from "@app/services/renderIcon";
import { Line } from "@app/types";

import mapboxgl from "mapbox-gl"
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

		// Lines rendering
		currentMap.on("load", () => {
			const linesSourceID = "lines"
			addLines(currentMap, linesSourceID)
			addLayers(currentMap, linesSourceID)
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