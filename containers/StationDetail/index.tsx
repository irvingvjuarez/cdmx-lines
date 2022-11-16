import { IoIosArrowUp } from "react-icons/io"
import { MdClear } from "react-icons/md"

export const StationDetail = () => {
	return(
		<section className="modal-style station-detail">
			<header>
				<button>
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
			`}</style>
		</section>
	)
}