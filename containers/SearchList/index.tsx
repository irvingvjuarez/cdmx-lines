import { SearchItem } from "@app/components/SearchItem"
import { SearchListConfig } from "./types"

export const SearchList: React.FC<SearchListConfig> = ({ searchResult }) => {
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