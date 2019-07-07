# styled-components media query manager
Media query manager for styled-components

## Desktop first design

Design for a desktop (1200px - 1800px) first and then apply media queries for other screen sizes.

### ⚠️ ORDER OF THE MEDIA QUERIES MATTERS!

PHONE -> TAB_PORT -> TAB_LAND -> DESKTOP_LARGE

```css
const myElement = styled.div`
color: pink /* design for a desktop (1200px - 1800px) goes here */

${mq(size.PHONE, `color: red`)}
${mq(size.TAB_PORT, `color: green`)}
${mq(size.TAB_LAND, `color: blue`)}
${mq(size.DESKTOP_LARGE, `color: yellow`)}
`;
```
