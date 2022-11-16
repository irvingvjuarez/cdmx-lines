import { useState } from "react"
import { Map } from "@app/components/Map"
import { ConditionalNode } from "@app/components/ConditionalNode"
import { SearchForm } from "@app/containers/SearchForm"
import { StationDetail } from "@app/containers/StationDetail"
import { GlobalProvider } from "@app/contexts"
import { initialState } from "@app/contexts/initialState"
import { useMap } from "@app/hooks/useMap"
import { GlobalContext, StationFeature } from "@app/types"

export default function Home() {
	const [detailMode, setDetailMode] = useState(false)
	const [searchMode, setSearchMode] = useState(true)
	const [detailStation, setDetailStation] = useState<GlobalContext["detailStation"]>(null)

	const updateDetailStation = (station: StationFeature) => setDetailStation(station)
	const map = useMap()

	const globalInitValue: GlobalContext = {
		...initialState,
		...map,
		updateDetailMode: setDetailMode,
		updateSearchMode: setSearchMode,
		updateDetailStation,
		detailStation
	}

  return (
		<GlobalProvider value={globalInitValue}>
			<main className="w-full h-[100vh] relative">
				<ConditionalNode conditional={searchMode}>
					<SearchForm />
				</ConditionalNode>

				<ConditionalNode conditional={detailMode}>
					<StationDetail />
				</ConditionalNode>

				<Map />
			</main>
		</GlobalProvider>
  )
}
