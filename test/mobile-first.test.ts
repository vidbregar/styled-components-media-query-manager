import { DeviceType } from "../src/constants";
import mqm from "../src/mobile-first";

describe("mqm", () => {
	it("Should return correct css for DESKTOP_LARGE size", () => {
		const expectedCss = `@media only screen and (min-width: 1800px) { color: red };`;
		expect(expectedCss).toEqual(mqm(DeviceType.DESKTOP_LARGE, `color: red`));
	});
	it("Should return correct css for DESKTOP size", () => {
		const expectedCss = `@media only screen and (min-width: 1200px) { color: blue };`;
		expect(expectedCss).toEqual(mqm(DeviceType.DESKTOP, `color: blue`));
	});
	it("Should return correct css for TAB_LAND size", () => {
		const expectedCss = `@media only screen and (min-width: 900px) { color: yellow };`;
		expect(expectedCss).toEqual(mqm(DeviceType.TAB_LAND, `color: yellow`));
	});
	it("Should return correct css for TAB_PORT size", () => {
		const expectedCss = `@media only screen and (min-width: 600px) { color: purple };`;
		expect(expectedCss).toEqual(mqm(DeviceType.TAB_PORT, `color: purple`));
	});
	it("Should throw error for PHONE size", () => {
		expect(() => mqm(DeviceType.PHONE, `color: purple`)).toThrowError(
			"Your normal css code should be designed for PHONE size"
		);
	});
});
