import { SearchItemProps } from "./types"

export const SearchItem: React.FC<SearchItemProps> = ({ children }) => {
	return (
		<li className="border-1 py-2 hover:bg-slate-600 hover:text-white cursor-pointer block">
			{children}
		</li>
	)
}