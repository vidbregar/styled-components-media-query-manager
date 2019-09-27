import { DeviceType } from "../src/constants";
import mqd from "../src/desktop-first";

describe("mqd", () => {
	it("Should return correct css for PHONE size", () => {
		const expectedCss = `@media only screen and (max-width: 600px) { color: red };`;
		expect(expectedCss).toEqual(mqd(DeviceType.PHONE, `color: red`));
	});
	it("Should return correct css for TAB_PORT size", () => {
		const expectedCss = `@media only screen and (max-width: 900px) { color: blue };`;
		expect(expectedCss).toEqual(mqd(DeviceType.TAB_PORT, `color: blue`));
	});
	it("Should return correct css for TAB_LAND size", () => {
		const expectedCss = `@media only screen and (max-width: 1200px) { color: yellow };`;
		expect(expectedCss).toEqual(mqd(DeviceType.TAB_LAND, `color: yellow`));
	});
	it("Should return correct css for DESKTOP_LARGE size", () => {
		const expectedCss = `@media only screen and (min-width: 1800px) { color: purple };`;
		expect(expectedCss).toEqual(mqd(DeviceType.DESKTOP_LARGE, `color: purple`));
	});
	it("Should throw error for DESKTOP size", () => {
		expect(() => mqd(DeviceType.DESKTOP, `color: purple`)).toThrowError(
			"Your normal css code should be designed for DESKTOP size"
		);
	});
});
