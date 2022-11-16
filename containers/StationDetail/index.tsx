import { globalContext } from "@app/contexts"
import { GlobalContext } from "@app/types"
import { useContext, useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import { MdClear } from "react-icons/md"

export const StationDetail = () => {
	const { toggleDetailMode } = useContext(globalContext) as GlobalContext
	const [detailHeight, setDetailHeight] = useState<"50px" | "70vh">("50px")
	const isFolded = detailHeight === "70vh"
	const handleDisplay = () => {
		const nextValue = !isFolded ? "70vh" : "50px"
		setDetailHeight(nextValue)
	}

	return(
		<section className="modal-style">
			<header>
				<button onClick={toggleDetailMode}>
					<MdClear size="27" />
				</button>

				<button
					onClick={handleDisplay}
					className={`fold-btn ${isFolded && "arrow-down"}`}
				>
					<IoIosArrowUp size="30" />
				</button>
			</header>

			<style jsx>{`
				header {
					display: flex;
					justify-content: end;
					padding: 2px;
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