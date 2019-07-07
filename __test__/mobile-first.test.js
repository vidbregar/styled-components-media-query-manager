const mq = require("../mobile-first/mediaQueryManager");
const { size } = require("../mobile-first/mediaQueryManager");

describe("mq", () => {
	it("Should return correct css for DESKTOP_LARGE size", () => {
		const expectedCss = `@media only screen and (min-width: 1800px) { color: red };`;
		expect(expectedCss).toEqual(mq(size.DESKTOP_LARGE, `color: red`));
	});
	it("Should return correct css for DESKTOP size", () => {
		const expectedCss = `@media only screen and (min-width: 1200px) { color: blue };`;
		expect(expectedCss).toEqual(mq(size.DESKTOP, `color: blue`));
	});
	it("Should return correct css for TAB_LAND size", () => {
		const expectedCss = `@media only screen and (min-width: 900px) { color: yellow };`;
		expect(expectedCss).toEqual(mq(size.TAB_LAND, `color: yellow`));
	});
	it("Should return correct css for TAB_PORT size", () => {
		const expectedCss = `@media only screen and (min-width: 600px) { color: purple };`;
		expect(expectedCss).toEqual(mq(size.TAB_PORT, `color: purple`));
	});
	it("Should throw when a unsupported size is passed", () => {
		expect(() => mq("random-size", `color: black`)).toThrowError("random-size is not a supported screen size. Import size enum to choose from available options")
	})
});
