import { useContext } from "react"
import { SearchContext } from "@app/contexts/SearchContext"
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineClear } from "react-icons/md"
import { SearchBarProps } from "./types"
import { Search } from "@app/types"

export const SearchBar: React.FC<SearchBarProps> = ({ inputRef }) => {
	const { handleChange, resetSearch } = useContext(SearchContext) as Search

	return (
		<form className="input-style pad flex items-center space-x-1 top-4 mb-2">
			<label htmlFor="search">
				<AiOutlineSearch size={"1.3rem"} />
			</label>
			<input
				ref={inputRef}
				onChange={handleChange}
				type="text" name="search" id="search"
				placeholder="Search..."
				className="outline-none w-full text-lg"
				autoComplete="off"
			/>
			<button onClick={resetSearch} type="button">
				<MdOutlineClear size={"1.3rem"} />
			</button>
		</form>
	)
}