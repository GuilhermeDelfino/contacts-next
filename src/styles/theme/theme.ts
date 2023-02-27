import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
	name: "light",
	border: {
		radius: {
			sm: 2,
			md: 4,
			lg: 8,
		},
	},
	colors: {
		primary: ["#D9E9FC", "#D9E9FC", "#4392F1", "#205AA0"],
		secondary: ["#F9DFDC", "#F0AFA8", "#DC493A", "#7A322A"],
		black: "#000000",
		white: "#FFFFFF",
		dark_gray: ["#8E9095", "#7B7D80", "#58595B", "#313233"],
		light_gray: ["#EBF1FF", "#DEE1E7", "#D7DAE1", "#CBCDD1"],
		success: ["", "", "", ""],
		warning: ["", "", "", ""],
		danger: ["", "", "", ""],
		shadow: ["#24242526", "#24242535"],
	},
	font: {
		size: {
			xsm: 10,
			sm: 12,
			md: 16,
			lg: 20,
			xlg: 24,
			xxlg: 36,
			xxxlg: 54,
		},
		height: {
			xsm: 14,
			sm: 16,
			md: 24,
			lg: 28,
			xlg: 32,
			xxlg: 42,
			xxxlg: 60,
		},
		family: {
			sans: "Source Sans Pro, sans-serif",
			title: "Nunito, sans-serif",
		},
		spacing: {
			sm: "1%",
			md: "1.5%",
			lg: "2.5%",
		},
	},
	breakpoint: {
		xsm: 380, // Old smartphones
		sm: 576, // Actual smartphones
		md: 768, // Tablets
		lg: 996, // Large-tablets
		xlg: 1200, // Notebook
		xxlg: 1400, // Wide, TVs >
	},
	container: {
		xsm: 360, // Old smartphones
		sm: 540, // Actual smartphones
		md: 720, // Tablets
		lg: 960, // Large-tablets
		xlg: 1140, // Notebook
		xxlg: 1320, // Wide, TVs >
	},
	z_index: {
		under: 500,
		normal: 800,
		above: 900,
		dropdown: 1000,
		sticky: 1020,
		fixed: 1030,
		modal_backdrop: 1040,
		offcanvas: 1050,
		modal: 1060,
		popover: 1070,
		tooltip: 1080,
	},
	transition: {
		duration: {
			fast: "0.2s",
			normal: "0.4s",
			slow: "0.8s",
		},
		type: {
			elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
			normal: "ease",
		},
	},
};
