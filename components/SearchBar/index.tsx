import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { ChangeEvent, useContext } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import { useSearch } from "@app/hooks/useSearch"

export const SearchBar = () => {
	const { linesData, stations } = useContext(globalContext) as GlobalContext
	const { handleChange, searchResult  } = useSearch({ linesData, stations })

	console.log(searchResult)

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