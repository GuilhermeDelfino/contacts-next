import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Input, InputProps } from "@/app/presentation/components/atoms/input";

const makeSut = ({ ...params }: InputProps) => {
	const view = render(<Input {...params} />);
	const user = userEvent.setup();
	return {
		view,
		user,
	};
};
describe("component: atom - input", () => {
	it("should be able to render base element", () => {
		const { view } = makeSut({});
		expect(view.baseElement).toBeInTheDocument();
	});

	it("should be able to render with default value", () => {
		makeSut({ defaultValue: "default" });
		const input = screen.getByDisplayValue("default");
		expect(input).toBeInTheDocument();
	});

	it("should be able to set a value in input", async () => {
		const { user } = makeSut({});
		// eslint-disable-next-line testing-library/no-debugging-utils
		screen.logTestingPlaygroundURL();
		const input = screen.getByRole("textbox");
		await user.clear(input);
		await user.type(input, "text");

		expect(input).toHaveDisplayValue("text");
	});
});
