import { useContext } from "react";
import { globalContext } from "@app/contexts";
import { GlobalContext } from "@app/types";

export const Map = () => {
	const { mapContainer } = useContext(globalContext) as GlobalContext

	return (
		<div ref={mapContainer} className="w-full h-[100vh] overflow-hidden"></div>
	)
};