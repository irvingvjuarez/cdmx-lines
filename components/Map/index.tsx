import { useMap } from "../../hooks/useMap";

export const Map = () => {
	const { mapContainer } = useMap()

	return (
		<div ref={mapContainer} className="w-full h-[100vh] overflow-hidden"></div>
	)
};