import { Map } from "@app/components/Map"
import { SearchBar } from "@app/components/SearchBar"
import { GlobalProvider } from "@app/contexts"
import { initialState } from "@app/contexts/initialState"

export default function Home() {
  return (
		<GlobalProvider value={initialState}>
			<main className="w-full h-[100vh] relative">
				<SearchBar />
				<Map />
			</main>
		</GlobalProvider>
  )
}
