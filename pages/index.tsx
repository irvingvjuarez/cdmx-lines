export default function Home() {
	console.log({
		mapboxToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
	})

  return (
    <h2>Hello World</h2>
  )
}
