const size = {
	TAB_PORT: "tab-port",
	TAB_LAND: "tab-land",
	DESKTOP: "desktop",
	DESKTOP_LARGE: "desktop-large"
};

const mq = (deviceSize, css) => {
	switch (deviceSize) {
		case size.DESKTOP_LARGE:
			return `@media only screen and (min-width: 1800px) { ${css} };`;
		case size.DESKTOP:
			return `@media only screen and (min-width: 1200px) { ${css} };`;
		case size.TAB_LAND:
			return `@media only screen and (min-width: 900px) { ${css} };`;
		case size.TAB_PORT:
			return `@media only screen and (min-width: 600px) { ${css} };`;
		default:
			throw new Error(
				`${deviceSize} is not a supported screen size. Import size enum to choose from available options`
			);
	}
};

module.exports = mq;
module.exports.size = size;
