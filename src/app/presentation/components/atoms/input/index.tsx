import React, { HTMLAttributes, HTMLInputTypeAttribute, Ref } from "react";

import * as S from "./styles";

export type InputProps = HTMLAttributes<HTMLInputElement> & {
	ref?: Ref<HTMLInputElement>;
	value?: string;
	type: HTMLInputTypeAttribute;
};
export const Input: React.FC<InputProps> = ({ ...props }) => {
	return (
		<>
			<S.Input
				{...props}
				type={props.type || "text"}
			/>
		</>
	);
};
