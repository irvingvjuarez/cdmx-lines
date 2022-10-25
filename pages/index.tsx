import dynamic from "next/dynamic"
import { lazy, Suspense } from "react"

const MapView = dynamic(() => import("../components/Map"), {
	ssr: false
})

export default function Home() {

  return (
		<MapView />
  )
}
