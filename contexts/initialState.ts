import linesData from "@app/data/data.json"
import stations from "@app/data/stations.json"
import { GlobalContext, LinesData, Stations } from "../types"

export const initialState: GlobalContext = {
	linesData: linesData as unknown as LinesData,
	stations: stations as unknown as Stations
}