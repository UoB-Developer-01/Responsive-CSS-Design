# CSS Responsive Web Design Principals


This guide includes quick refrences to important CSS concepts, generators to speed up development, libraries, and useful links for further reading.
<br>

# Chrome Dev Tools

- Element Selector
- CSS Editor
- Device Simulator

# HTML Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="icon" href="icon.png">

    <style></style>
    <link rel="stylesheet" href="styles.css"> <!-- Link to external stylesheet -->
</head>
<body>
    
</body>
</html>
```

# HTML Basic Tags

```html
<h1>Main Heading</h1> 
<h2>Sub Heading</h2> 
<h3>Sub Sub Heading</h3> 
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>

<div>Div 1</div>
<div>Div 2</div>
<div>Div 3</div>

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>

<img src="img/img3.jpg"> 
<img src="img/img3.jpg"> 
<img src="img/img3.jpg">

<a href="https://example.com">Link 1</a> 
<a href="https://example.com">Link 2</a> 
<a href="https://example.com">Link 3</a> 

<span>Span 1</span>
<span>Span 2</span>
<span>Span 3</span>

<br/> 
&nbsp;
```
# CSS Selectors

```css
p, #id-name, .class-name, a:hover {}
```

```html
<div id="id-name"></div>

<div clas="class-name  another-class"></div>
<div clas="class-name  another-class"></div>
<div clas="class-name  another-class"></div>
```

What's the difference?
```css
div.class123, div .class123{}
```

# CSS Basic Properties

```css
width: 200px; /* Sets width to 200px */
height: 100px; /* Sets height to 100px */
max-width: 100%; /* Sets maximum width to 100% of the parent element */
max-height: 100%; /* Sets maximum height to 100% of the parent element */

font-family: Arial, sans-serif; /* Sets font family to Arial with a fallback to sans-serif */
font-size: 16px; /* Sets font size to 16 pixels */
color: #333; /* Sets text color to a dark gray */

background-color: #f0f0f0; /* Sets background color to a light gray */
background-image: url('background.jpg'); /* Sets a background image */
background-size: cover; /* Sets background image to cover the element */
background-position: center; /* Centers the background image */
background-repeat: no-repeat; /* Prevents background image from repeating */

display: block; /* Element will be displayed as a block */
display: inline; /* Element will be displayed inline */
display: inline-block; /* Element will be displayed as an inline-level block container */
display: none; /* Element will be hidden */
display: hidden; /* Element will be hidden */
display: flex; /* Element will be displayed as a flexible box container */
display: grid; /* Element will be displayed as a grid container */

opacity: 0.5; /* Sets opacity to 50% */
z-index: 1000; /* Sets the stacking order */

position: relative; /* Element is positioned relative to its normal position */
position: absolute; /* Element is positioned absolutely to its nearest positioned ancestor */
position: fixed; /* Element is positioned relative to the browser window */
position: sticky; /* Element is positioned based on the user's scroll position */
top: 100px;
left: 100px;

border-style: solid; /* Sets border style to solid */
border-width: 2px; /* Sets border width to 2px */
border-color: black; /* Sets border color to black */
margin: 5px; /* Sets margin to 10px on all sides */
padding: 5px; /* Sets padding to 20px on all sides */
```

# CSS Units of Measure

px and % vs rem,em, and vh, vw

```
px (pixels): The most commonly used unit. Represents a single dot on the screen.

% (percentage): Relative to the parent element's dimension.

---------

rem: Relative to the root element

vh (viewport height): Relative to 1% of the height of the viewport.

vw (viewport width): Relative to 1% of the width of the viewport.
```

100vh/vw will always represent the full height of the viewport, while 100% will depend on the height of the parent element. 

# CSS Variables
**Reference** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

```css
:root { --primary: #1e90ff; }

body { background-color: var(--primary); }
```

```css
:root {
    --primary-color: #FF6347;          /* A vibrant tomato red for primary actions */
    --secondary-color: #4682B4;        /* A steel blue for secondary elements */
    --background-color: #F8F9FA;       /* A light gray background for a clean look */
    --text-color: #212529;             /* Dark gray text for good readability */
    --font-family: 'Roboto', sans-serif; /* Using font family as Roboto for its modern look */
    --font-size: 16px;                 /* Base font size */
}
```

# CSS Reset

```css
/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a { text-decoration: none; }
```

# Colors
**Reference** https://flatuicolors.com/, https://flatuicolors.com/palette/defo

**Generator** https://www.realtimecolors.com/?colors=e8f5ec-0b180f-a2d4b3-36316b-ae71be&fonts=Inter-Inter

# Fonts & Typography
**Source** https://fonts.google.com/

**Inspiration** https://fontjoy.com/, https://www.monotype.com/font-pairing#/playground

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body{ font-family:'Roboto'; }
```

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

# Fonts Icons
**Source** https://ionic.io/ionicons 

```html
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
```

```html
<ion-icon name="heart"></ion-icon>
```

```css
ion-icon {font-size: 4rem;}
```

# Flex-Box
**Reference** https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**Generator** https://www.cssportal.com/css-flexbox-generator/

```css
.flexContainer {
  display: flex; /* or inline-flex */
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: column wrap;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | flex-end | center | baseline;
  /* align-content only takes effect on multi-line flexible containers */
}
```

# Grid Layout
**Reference** https://css-tricks.com/snippets/css/complete-guide-grid/

**Generator** https://grid.layoutit.com/

```css
.gridContainer {
  display: grid;
  grid-template-columns: 50px 50px repeat(2,1fr);
  grid-template-rows: auto;
  grid-template-areas: 
  "header header header header"
  "main main . sidebar"
  "footer footer footer footer";

  column-gap: 10px; row-gap: 10px; /*optional*/
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

```css
.item-a {grid-area: header;} .item-b {grid-area: main;} .item-c {grid-area: sidebar;} .item-d {grid-area: footer;}
```

```html
<div class="container">
<div class="item-a"></div>
<div class="item-b"></div>
<div class="item-c"></div>
<div class="item-d"></div>
</div>
```

```
Grid provides control over both columns and rows, whereas Flexbox focuses on either the horizontal (main) axis or the vertical (cross) axis.

Grid for layouts. Flexbox for groupings like icons, cards, etc.
```

# Media Queries
```css
/* Design for Mobile First for faster mobile load times @media for larger screens */

/* and (orientation: landscape) */

/* Typical Device Breakpoints */ 
@media only screen and (max-width: 600px) {   }/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 600px) {   }/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 768px) {   }/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 992px) {   }/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1200px) {   }/* Extra large devices (laptops/desktops, 1200px and up) */
```

```html
<link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
```

# Cards

```css
.flatCard{
    width:25vw;height:25vw; border-radius: 57px; background-color: dodgerblue ;color:#ffffff
}
```

# Centered Content Utility Class

```css
.centerContentFlex { 
display: flex; 
justify-content: center; 
align-items: center; 
flex-wrap: wrap; 
}
```

# Cover Image
```css
.coverBG {background-image: url('bg.webp'); background-size: cover; background-position: center; }
```

```html
<div class="coverBG" style="height: 70vh;"> 
```

# Shape Divider
**Generater** https://www.shapedivider.app/ - HTML must be copied into div with curves, and that div's position should be made relative.

# Nuemorphism
**Generator** https://neumorphism.io/#e0e0e0

```css
.neumorphicCard{
    width:25vw;height:25vw; border-radius: 57px;

    background: linear-gradient(145deg, #f1eaea, #cbc5c5);
    box-shadow:  19px 19px 37px #a9a4a4, -19px -19px 37px #ffffff;
}
```

# Glassmorphism
**Generator** https://hype4.academy/tools/glassmorphism-generator

```css
.glassmorphicCard{   
  width:25vw;height:25vw; border-radius: 57px;

  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
```

# Filters
**Reference** https://www.w3schools.com/cssref/css3_pr_filter.php, https://www.w3schools.com/cssref/css3_pr_backdrop-filter.php

**Generator** https://cssgenerator.org/filter-css-generator.html, https://front-end-tools.com/en/generateBackDropFilter/

```css
filter/backdrop-filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();

img {
  filter: blur(35px) drop-shadow(8px 8px 10px gray);
}
```

# Dark Mode
**Reference** https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

```css
body {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: black;
  color: white;
}
```

```js
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
} 
```

# Clipping Paths and Masks
**Generator** https://bennettfeely.com/clippy/, https://www.google.com/search?q=Editing+PNG+Mask+Layer&udm=2

**Reference** https://www.w3schools.com/css/css3_masking.asp , https://www.w3schools.com/css/css3_masking.asp 

```css
clip-path: circle(50% at 50% 50%);
```

# Animations
**Reference** https://www.w3schools.com/css/css3_animations.asp

**Generator** https://webcode.tools/css-generator/keyframe-animation

**Library**   https://animate.style/, https://michalsnik.github.io/aos/ (Animate On Scroll Library), https://useanimations.com/ (Micro-animations)
