import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { useContext } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineClear } from "react-icons/md"
import { useSearch } from "@app/hooks/useSearch"

export const SearchBar = () => {
	const { linesData, stations } = useContext(globalContext) as GlobalContext
	const { handleChange, searchResult, setSearchResult } = useSearch({ linesData, stations })
	const handleClear = () => setSearchResult([])

	console.log(searchResult)

	return(
		<section className="modal-style flex-col">
			<form className="input-style flex items-center space-x-1 top-4 mb-2">
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
				<button onClick={handleClear}>
					<MdOutlineClear size={"1.3rem"} />
				</button>
			</form>

			{/* {searchResult.length > 0 && (
				<article className="top-16 input-style">
					<ul>
						{searchResult.map(result =>
							<li key={result.id || result.line_id}>
								{result.name}
							</li>
						)}
					</ul>
				</article>
			)} */}
		</section>
	)
}