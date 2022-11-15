import { SearchItemProps } from "./types"

export const SearchItem: React.FC<SearchItemProps> = ({ children }) => {
	const handleClick = () => console.log(children)

	return (
		<li
			className="pad hover:bg-[#929292] hover:text-white cursor-pointer block"
			onClick={handleClick}
		>
			{children}
		</li>
	)
}