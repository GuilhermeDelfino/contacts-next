import React, { HTMLAttributes, PropsWithChildren } from "react";

import * as S from "./styles";

export type ContainerProps = PropsWithChildren &
	HTMLAttributes<HTMLDivElement> & {
		value?: string;
		width?: number | string;
	};
export const Container: React.FC<ContainerProps> = ({ ...props }) => {
	return (
		<>
			<S.Container {...props} />
		</>
	);
};
