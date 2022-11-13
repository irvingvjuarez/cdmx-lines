import { Map } from "@app/components/Map"
import { SearchBar } from "@app/components/SearchBar"

export default function Home() {
  return (
		<main className="w-full h-[100vh] relative">
			<SearchBar />
			<Map />
    </main>
  )
}
