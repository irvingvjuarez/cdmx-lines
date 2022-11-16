import { ConditionalNodeProps } from "./types"

export const ConditionalNode: React.FC<ConditionalNodeProps> = ({ children, conditional }) => {
	if (!conditional) return null

	return <>{children}</>
}