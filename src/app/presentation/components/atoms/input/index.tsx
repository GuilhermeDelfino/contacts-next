import { HTMLAttributes } from "react";

import * as S from "./styles";

export const Input: React.FC<HTMLAttributes<HTMLInputElement>> = ({
	...props
}) => {
	return (
		<>
			<S.Input {...props} />
		</>
	);
};
