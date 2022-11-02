import {useRef, useState, useEffect} from "react";
import mapboxgl from "mapbox-gl"
import { addLine } from "@app/services/addLine";
import { addLayer } from "@app/services/addLayer";
import linesData from "@app/data/data.json"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export const useMap = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null)
	const map = useRef<mapboxgl.Map | null>(null)
	const [lng, setLng] = useState(-99.17658806)
	const [lat, setLat] = useState(19.42025648)
	const [zoom, setZoom] = useState(15)

	console.log({
		linesData
	})

	useEffect(() => {
		if (map.current) return

		map.current = new mapboxgl.Map({
			container: mapContainer.current as HTMLDivElement,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [lng, lat],
			zoom: zoom
		})

		const currentMap = map.current as mapboxgl.Map

		map.current.on("load", () => {
			addLine(currentMap);
			addLayer(currentMap);
		})

	})

	return {
		mapContainer
	}
}