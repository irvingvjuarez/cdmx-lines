import {useRef, useState, useEffect} from "react";
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null)
	const map = useRef<Map<any, any> | null>(null)
	const [lng, setLng] = useState(-70.9)
	const [lat, setLat] = useState(42.35)
	const [zoom, setZoom] = useState(9)

	useEffect(() => {
		if (map.current) return

		map.current = new mapboxgl.Map({
			container: mapContainer.current as HTMLDivElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom
		})
	})

	return (
		<div ref={mapContainer} className="w-full h-[100vh] overflow-hidden"></div>
	)
};

export default Map;