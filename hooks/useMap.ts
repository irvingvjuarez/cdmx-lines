import {useRef, useState, useEffect} from "react";
import { addLine } from "@app/services/addLine";
import { addLayer } from "@app/services/addLayer";
import { renderIcon } from "@app/services/renderIcon";
import { Line } from "@app/types";

import mapboxgl from "mapbox-gl"
import linesData from "@app/data/data.json"

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

		linesData.forEach(line => {
			currentMap.on("load", () => {
				addLine(currentMap, line as Line);
				addLayer(currentMap, line as Line);
			})
		})

		currentMap.on("load", () => {
			const imgUrl = "/assets/stationsIcons/line 1/observatorio.png"
			renderIcon(currentMap, imgUrl)
		})
	})

	return {
		mapContainer
	}
}