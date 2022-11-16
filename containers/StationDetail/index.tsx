import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { useContext, useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import { MdClear } from "react-icons/md"

export const StationDetail = () => {
	const { updateDetailMode, detailStation, updateSearchMode } = useContext(globalContext) as GlobalContext
	const [detailHeight, setDetailHeight] = useState<"50px" | "70vh">("50px")
	const isFolded = detailHeight === "70vh"

	const handleDisplay = () => {
		const nextValue = !isFolded ? "70vh" : "50px"

		updateSearchMode((prev: boolean) => !prev)
		setDetailHeight(nextValue)
	}
	const handleUpdateDetailMode = () => updateDetailMode(false)

	return(
		<section className="modal-style">
			<header>
				<h2>{detailStation?.name}</h2>

				<div>
					<button onClick={handleUpdateDetailMode}>
						<MdClear size="27" />
					</button>

					<button
						onClick={handleDisplay}
						className={`fold-btn ${isFolded && "arrow-down"}`}
					>
						<IoIosArrowUp size="30" />
					</button>
				</div>
			</header>

			<style jsx>{`
				h2 {
					letter-spacing: 1.5px;
					font-size: 1.2rem;
				}

				header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 2px 5px;
					border-bottom: 1px solid;
				}

				.fold-btn {
					transition: transform 1s 1s ease-out;
				}

				section {
					transition: height 1s ease-out;
					background-color: white;
					border-radius: 10px 10px 0 0;
					bottom: 0;
					height: ${detailHeight};
					width: 95%;
				}

				.arrow-down {
					transform: rotate(180deg);
				}
			`}</style>
		</section>
	)
}