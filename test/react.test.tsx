import { render, screen } from "@testing-library/react";
import React from "react";

it(`should be render `, () => {
	render(<div>test</div>);

	expect(screen.getByText("test")).toBeInTheDocument();
});
