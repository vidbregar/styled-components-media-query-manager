import { DeviceType } from "../constants";

const mqm = (deviceType: DeviceType, css: string) => {
	switch (deviceType) {
		case DeviceType.TAB_PORT:
			return `@media only screen and (min-width: 600px) { ${css} };`;
		case DeviceType.TAB_LAND:
			return `@media only screen and (min-width: 900px) { ${css} };`;
		case DeviceType.DESKTOP:
			return `@media only screen and (min-width: 1200px) { ${css} };`;
		case DeviceType.DESKTOP_LARGE:
			return `@media only screen and (min-width: 1800px) { ${css} };`;
		case DeviceType.PHONE:
			throw new Error("Your normal css code should be designed for PHONE size");
	}
};

export default mqm;
