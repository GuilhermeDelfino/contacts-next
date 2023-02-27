import styled from "styled-components";

export const Input = styled.input`
	width: ${p => p.width || "100%"};
	box-shadow: 0 2px 0px #05050526;
	padding: 8px 16px;
	background-color: #f5f5f5;
	border: 1px solid #c1c1c1;
	border-radius: 4px;
	font-size: 20px;
	outline: none;
	color: #333;
	opacity: 0.8;

	&,
	&:hover,
	&:focus {
		transition: all 0.2s ease;
	}

	&:hover,
	&:focus {
		opacity: 1;
	}

	&:focus {
		outline: 1.5px solid #a1a1a1;
	}

	&::placeholder {
		color: #a1a1a1;
	}
`;
