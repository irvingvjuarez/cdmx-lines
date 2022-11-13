import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { ChangeEvent, useContext } from "react"
import {AiOutlineSearch} from "react-icons/ai"

export const SearchBar = () => {
	const { linesData, stations } = useContext(globalContext) as GlobalContext

	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const input = evt.target.value.toLowerCase()
		const filterStations = stations.features.filter((feature, index) => {
			if (index <= 10) {
				return feature.name.toLowerCase().includes(input)
			}
		})
		const filterLines = linesData.features.filter((feature, index) => {
			if (index <= 10) {
				return feature.name.toLowerCase().includes(input)
			}
		})

		console.log({
			filterLines,
			filterStations
		})
	}

	return(
		<form className="absolute top-4 left-[50%] translate-x-[-50%] py-2 px-3 bg-white rounded-lg w-[70%] flex items-center space-x-1">
			<label htmlFor="search">
				<AiOutlineSearch size={"1.3rem"} />
			</label>
			<input
				onChange={handleChange}
				type="text" name="search" id="search"
				placeholder="Search..."
				className="outline-none w-full text-lg"
				autoComplete="off"
			/>
		</form>
	)
}