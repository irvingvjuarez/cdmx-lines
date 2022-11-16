import { Map } from "@app/components/Map"
import { SearchForm } from "@app/containers/SearchForm"
import { GlobalProvider } from "@app/contexts"
import { initialState } from "@app/contexts/initialState"
import { useMap } from "@app/hooks/useMap"

export default function Home() {
	const map = useMap()
	const globalInitValue = {
		...initialState,
		...map
	}

  return (
		<GlobalProvider value={globalInitValue}>
			<main className="w-full h-[100vh] relative">
				<SearchForm />
				<Map />
			</main>
		</GlobalProvider>
  )
}
