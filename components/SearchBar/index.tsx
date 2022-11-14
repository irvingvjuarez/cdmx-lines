import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineClear } from "react-icons/md"
import { SearchBarConfig } from "./types"

export const SearchBar = (config: SearchBarConfig) => {
	const { inputRef, handleChange, handleReset } = config

	return (
		<form className="input-style flex items-center space-x-1 top-4 mb-2">
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
				onBlur={handleReset}
			/>
			<button onClick={handleReset} type="button">
				<MdOutlineClear size={"1.3rem"} />
			</button>
		</form>
	)
}