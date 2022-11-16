import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"
import { MdClear } from "react-icons/md"

export const StationDetail = () => {
	const [detailHeight, setDetailHeight] = useState("50px")
	const handleDisplay = () => {
		const nextValue = detailHeight === "50px" ? "70vh" : "50px"
		setDetailHeight(nextValue)
	}

	return(
		<section className="modal-style">
			<header>
				<button
					onClick={handleDisplay}
					className={detailHeight === "70vh" ? "arrow-down" : ""}
				>
					<IoIosArrowUp size="30" />
				</button>
				{/* <MdClear size="27" /> */}
			</header>

			<style jsx>{`
				header {
					display: flex;
					justify-content: end;
					padding: 2px;
					border-bottom: 1px solid;
				}

				button {
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