import {AiOutlineSearch} from "react-icons/ai"

export const SearchBar = () => {
	return(
		<form className="absolute top-4 left-[50%] translate-x-[-50%] py-2 px-3 bg-white rounded-lg w-[70%] flex items-center space-x-1">
			<label htmlFor="search">
				<AiOutlineSearch size={"1.3rem"} />
			</label>
			<input type="text" name="search" id="search" placeholder="Search..." className="outline-none w-full text-lg" />
		</form>
	)
}