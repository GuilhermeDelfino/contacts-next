import React, { HTMLAttributes, HTMLInputTypeAttribute, Ref } from "react";

import * as S from "./styles";

export type InputProps = HTMLAttributes<HTMLInputElement> & {
	ref?: Ref<HTMLInputElement>;
	value?: string;
	type?: HTMLInputTypeAttribute;
	width?: number | string;
};
export const Input: React.FC<InputProps> = ({ ...props }) => {
	return (
		<>
			<S.Input
				{...props}
				width={props.width}
				type={props.type || "text"}
			/>
		</>
	);
};
