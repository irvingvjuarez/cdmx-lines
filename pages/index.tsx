import { Map } from "@app/components/Map"
import { SearchForm } from "@app/containers/SearchForm"
import { GlobalProvider } from "@app/contexts"
import { initialState } from "@app/contexts/initialState"

export default function Home() {
  return (
		<GlobalProvider value={initialState}>
			<main className="w-full h-[100vh] relative">
				<SearchForm />
				<Map />
			</main>
		</GlobalProvider>
  )
}
