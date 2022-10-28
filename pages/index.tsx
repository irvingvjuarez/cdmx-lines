import dynamic from "next/dynamic"

const Map = dynamic(() => import("@app/components/Map"), {
	ssr: false
})

export default function Home() {
  return (
		<main className="w-full h-[100vh]">
			<Map />
    </main>
  )
}
