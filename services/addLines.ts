import mapboxgl from "mapbox-gl"
import linesData from "@app/data/data.json"

export const addLines = (map: mapboxgl.Map, sourceID: string) => {
	map.addSource(sourceID, {
		type: "geojson",
		data: linesData as any
	})
}