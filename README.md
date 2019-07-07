# Styled-components Media Query Manager

Media query manager for styled-components

# Desktop first design

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

# Mobile first design

Design for a phone (0px - 600px) first and then apply media queries for other screen sizes.

### ⚠️ ORDER OF THE MEDIA QUERIES MATTERS!

DESKTOP_LARGE -> DESKTOP -> TAB_LAND -> TAB_PORT

```css
const myElement = styled.div`
  color: pink /* design for a phone (0px - 600px) goes here */

  ${mq(size.DESKTOP_LARGE, `color: yellow`)}
  ${mq(size.DESKTOP, `color: red`)}
  ${mq(size.TAB_LAND, `color: blue`)}
  ${mq(size.TAB_PORT, `color: green`)}
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
