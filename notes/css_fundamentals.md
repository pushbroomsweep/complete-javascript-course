# CSS Fundamentals

## CSS Selectors

```css
/* All selector */
* { /* select all elements */ 

}

/* Element selector */
p { /* selects all <p> elements */

}

h1, h2 { /* Selects all <h1> and all <h2> elements */

}

div p { /* Selects all <p> elements inside <div> elements */

}

div > p { /* Selects all <p> elements where the parent is a <div> element */

}

div + p { /* Selects the first <p> element that is placed immediately after <div> elements */

}

p ~ ul { /* Selects every <ul> element that is preceded by a <p> element */

}

/* class selector, uses . prefix */
.intro { /* selects all class="intro"*/

}

.intro.part1 { /* Selects all elements with both "intro" and "part1" set within its class attribute */

}

.intro .part1 { /* Selects all elements with "part1" that is a descendant of an element with "intro" */

}

/* id selector, uses # prefix */
#id1 { /* selects all id="id1" */ 

}

p.intro { /* Selects all <p> elements with class="intro" */

}

```

## General points

Font properties are generally inherited (e.g. `font-family`, `font-size` etc.)

`background-color`: sets the color of the background

`color`: sets the font color

`border`: it's a shorthand property (set multiple values: width (e.g. 5px), style (e.g. solid) and color (e.g. red))

## Box Model

Each element is a box with width, height, padding, margin, border and fill area (all are optional). 

- Content: contains the content of the box
- Padding: transparent area around the content; inside of the box.
- Border: goes around the padding and the content
- Margin: space between boxes; outside of the box.
- Fill area: Area that gets filled with background color or background image

### `box-sizing: border-box;`

The `box-sizing: border-box;` CSS property changes how the width and height of an element are calculated. By default, an element's width and height are calculated based on the content box, meaning padding and borders are not included in the width or height.

When you set box-sizing: border-box;, the element's padding and border are included within the specified width and height. This means that if you set an element to be width: 100px and height: 100px, and it has padding: 10px and a border: 1px all around, the total width and height will still be 100px each, not 122px (which would be the case with the default content-box model).