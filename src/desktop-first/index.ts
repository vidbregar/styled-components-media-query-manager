import { DeviceType } from "../constants";

const mqd = (deviceType: DeviceType, css: string) => {
	switch (deviceType) {
		case DeviceType.DESKTOP_LARGE:
			return `@media only screen and (min-width: 1800px) { ${css} };`;
		case DeviceType.TAB_LAND:
			return `@media only screen and (max-width: 1200px) { ${css} };`;
		case DeviceType.TAB_PORT:
			return `@media only screen and (max-width: 900px) { ${css} };`;
		case DeviceType.PHONE:
			return `@media only screen and (max-width: 600px) { ${css} };`;
		case DeviceType.DESKTOP:
			throw new Error("Your normal css code should be designed for DESKTOP size");
	}
};

export default mqd;
