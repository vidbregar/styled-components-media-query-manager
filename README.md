# Styled-components Media Query Manager

Media query manager for styled-components

# Install

```
npm i styled-components-media-query-manager
```

# Desktop first design

Design for a desktop (1200px - 1800px) first and then apply media queries for other screen sizes.

### ⚠️ ORDER OF MEDIA QUERIES MATTERS!

DESKTOP_LARGE -> TAB_LAND -> TAB_PORT -> PHONE

```js
import { mqd, DeviceType } from "styled-components-media-query-manager";
```

```css
const myElement = styled.div`
	color: pink /* design for a DESKTOP size (1200px - 1800px) goes here */

	${mqd(DeviceType.DESKTOP_LARGE, `color: yellow`)}
	${mqd(DeviceType.TAB_LAND, `color: blue`)}
	${mqd(DeviceType.TAB_PORT, `color: green`)}
	${mqd(DeviceType.PHONE, `color: red`)}

`;
```

# Mobile first design

Design for a phone (0px - 600px) first and then apply media queries for other screen sizes.

### ⚠️ ORDER OF MEDIA QUERIES MATTERS!

PHONE -> TAB_PORT -> TAB_LAND -> DESKTOP_LARGE

```js
import { mqm, DeviceType } from "styled-components-media-query-manager";
```

```css
const myElement = styled.div`
	color: pink /* design for a phone (0px - 600px) goes here */

	${mqm(size.TAB_PORT, `color: green`)}
	${mqm(size.TAB_LAND, `color: blue`)}
	${mqm(size.DESKTOP, `color: red`)}
	${mqm(size.DESKTOP_LARGE, `color: yellow`)}

`;
```

# Screen sizes

```
PHONE [0 - 600px]
TAB_PORT [600 - 900px]
TAB_LAND [900 - 1200px]
DESKTOP [1200 - 1800px]
DESKTOP_LARGE [1800px +]
```
