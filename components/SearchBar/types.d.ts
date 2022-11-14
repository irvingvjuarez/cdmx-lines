import { MutableRefObject } from "react";

export type SearchBarConfig = {
	inputRef: MutableRefObject<HTMLInputElement | null>;
	handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
	handleReset: () => void;
}