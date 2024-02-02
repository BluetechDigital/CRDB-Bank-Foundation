import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize: {
				xs: ".75rem",
				sm: ".8rem",
				tiny: ".9rem",
				base: "1rem",
				medium: "1.15rem",
				paragraph: "1.10rem",
				lg: "1.25rem",
				xl: "1.5rem",
				"2xl": "1.75rem",
				"3xl": "1.85rem",
				"4xl": "2rem",
				"5xl": "2.25rem",
				"6xl": "2.5rem",
				"7xl": "3rem",
				"8xl": "4rem",
				"9xl": "4rem",
				"10xl": "4.5rem",
				"11xl": "5rem",
				"12xl": "5.5rem",
			},
			colors: {
				// Base colors Variables
				black: "#111",
				grey: "#cecece",
				white: "#ffffff",
				pureBlack: "#000",
				darkGrey: "#8f8f8f",
				lightGrey: "#f7f7f7",
				lightGreyTwo: "#fafafa",

				// Main colors
				green: {
					default: "#008000",
					two: "#43b02a",
					three: "#00ab00",
					flat: "#043d2b",
					flatDark: "#022218",
					dark: "#015a01",
					darker: "#014701",
					darkTwo: "#003200",
				},
				red: {
					default: "#cb0007",
					dark: "#a70107",
					two: "#ff0008",
					light: "#ff242c",
					darker: "#720004",
					darkerTwo: "#4e0104",
				},
				yellow: {
					default: "#f6ad37",
					two: "#e8b042",
					three: "#fac546",
					four: "#de8b27",
					five: "#d8781d",
					six: "#d16415",
					light: "#fbbc57",
					dark: "#e4a002",
					darker: "#bc7700",
				},
				purple: {
					default: "#5a287d",
					two: "#5e10b1",
					flat: "#f2eaf9",
					three: "#3c1053",
					dark: "#2d2378",
				},
			},
		},
	},
	plugins: [],
};
export default config;
