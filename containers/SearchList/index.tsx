import { useContext } from "react"
import { SearchItem } from "@app/components/SearchItem"
import { SearchContext } from "@app/contexts/SearchContext"
import { Search } from "@app/types"

export const SearchList = () => {
	const { searchResult } = useContext(SearchContext) as Search

	if (searchResult.length < 1) return null

	return (
		<article className="top-16 input-style">
			<ul>
				{searchResult.map(result =>
					<SearchItem key={result.name}>
						{result.name}
					</SearchItem>
				)}
			</ul>
		</article>
	)
}