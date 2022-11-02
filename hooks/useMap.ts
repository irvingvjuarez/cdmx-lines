import {useRef, useState, useEffect} from "react";
import mapboxgl from "mapbox-gl"
import { addLine } from "@app/services/addLine";
import { addLayer } from "@app/services/addLayer";
import linesData from "@app/data/data.json"
import { AddLineConfig } from "@app/types";

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
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom
		})

		const currentMap = map.current as mapboxgl.Map

		const addLineConfig: AddLineConfig = {
			map: currentMap,
			lineName: "route",
			coordinates: [
				[-99.17658806, 19.42025648],
				[-99.09606814, 19.41958866],
				[-99.14912224, 19.42729875],
				[-99.16325212, 19.42359552],
				[-99.109803, 19.426271],
				[-99.08322573, 19.41179726],
				[-99.10281658, 19.42288725],
				[-99.07262564, 19.4146103],
				[-99.200669, 19.397486],
				[-99.15455103, 19.42565962],
				[-99.18664098, 19.40223457],
				[-99.17074084, 19.42189565],
				[-99.18207049, 19.41290022],
				[-99.11890984, 19.42917056],
				[-99.114463, 19.431822],
				[-99.09070373, 19.41608763],
				[-99.13303971, 19.42543703],
				[-99.14207339, 19.42720768],
				[-99.13782477, 19.4260947],
				[-99.12541151, 19.42546738]
			]
		}

		map.current.on("load", () => {
			addLine(addLineConfig);
			addLayer(currentMap);
		})

	})

	return {
		mapContainer
	}
}