import styled from "styled-components";

import { ContainerProps } from ".";

export const Container = styled.section<ContainerProps>`
	width: ${p => p.width + "px" || "100%"};
	box-shadow: 0 2px 32px #05050526;
	padding: 16px;

	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	height: 100%;
	border-radius: 4px;
	margin-top: 40px;
`;
