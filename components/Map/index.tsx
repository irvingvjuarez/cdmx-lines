import { useMap } from "../../hooks/useMap";

const Map = () => {
	const { mapContainer } = useMap()

	return (
		<div ref={mapContainer} className="w-full h-[100vh] overflow-hidden"></div>
	)
};

export default Map;