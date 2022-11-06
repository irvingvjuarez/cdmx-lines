import mapboxgl from "mapbox-gl";

export const renderIcon = (map: mapboxgl.Map, imgUrl: string) => {
	map.loadImage(imgUrl, (error, image) => {
		if (error) throw error;

		// Add the image to the map style.
		map.addImage('cat', image as any);

		// Add a data source containing one point feature.
		map.addSource('point', {
			'type': 'geojson',
			'data': {
				'type': 'FeatureCollection',
				'features': [{
					"properties": {},
					'type': 'Feature',
					'geometry': {
						'type': 'Point',
						'coordinates': [-99.200669, 19.397486]
					}
				}]
			}
		});

		// Add a layer to use the image to represent the data.
		map.addLayer({
			'id': 'points',
			'type': 'symbol',
			'source': 'point', // reference the data source
			"minzoom": 13,
			'layout': {
				'icon-image': 'cat', // reference the image
				'icon-size': 0.25,
			}
		});
	});
}