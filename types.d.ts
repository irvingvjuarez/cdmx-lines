export type AddLineConfig = {
	map: mapboxgl.Map,
	lineName: string,
	coordinates: any
}

export type AddLayerConfig = {
	map: mapboxgl.Map;
	name: string;
	color: string | string[];
}