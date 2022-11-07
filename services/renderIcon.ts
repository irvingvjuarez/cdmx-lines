import mapboxgl from "mapbox-gl";

export const renderIcon = (map: mapboxgl.Map, imgUrl: string, coords: number[], imgID: string) => {
	map.loadImage(imgUrl, (error, image) => {
		if (error) throw error;

		// Add the image to the map style.
		map.addImage(imgID, image as any);

		// Add a data source containing one point feature.
		map.addSource(imgID, {
			'type': 'geojson',
			'data': {
				'type': 'FeatureCollection',
				'features': [{
					"properties": {},
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': coords
					}
				}]
			}
		});

		// Add a layer to use the image to represent the data.
		map.addLayer({
			'id': imgID,
			'type': 'symbol',
			'source': imgID, // reference the data source
			"minzoom": 13,
			'layout': {
				'icon-image': imgID, // reference the image
				'icon-size': 0.25,
			}
		});
	});
}