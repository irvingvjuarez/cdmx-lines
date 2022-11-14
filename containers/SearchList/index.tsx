import { SearchListConfig } from "./types"

export const SearchList: React.FC<SearchListConfig> = ({ searchResult }) => {
	if (searchResult.length < 1) return null

	return (
		<article className="top-16 input-style">
			<ul>
				{searchResult.map(result =>
					<li key={result.name}>
						{result.name}
					</li>
				)}
			</ul>
		</article>
	)
}