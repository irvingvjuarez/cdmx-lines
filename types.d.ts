export interface Feature {
	type: "Feature";
	name: string;
	geometry: {
		type: "LineString";
		coordinates: number[]
	}
}

export interface LineFeature extends Feature {
	line_number: number;
	properties: {
		color: string
	};
}

export interface StationFeature extends Feature {
	id: number;
	properties: {
		url: string;
		name: string;
	},
}

export interface Data {
	[type: string]: "FeatureCollection";
}

export interface LinesData extends Data {
	[features: string]: LineFeature[];
}

export interface Stations extends Data {
	[features: string]: StationFeature[]
}

export interface GlobalContext {
	linesData: LinesData;
	stations: Stations;
	mapContainer: MutableRefObject<HTMLDivElement | null>;
  map: MutableRefObject<mapboxgl.Map | null>;
}

export type Search = {
	handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
	searchResult: Array<LineFeature | StationFeature>;
	resetSearch: () => void;
}