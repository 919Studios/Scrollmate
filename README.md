![ScrollMate Logo](https://www.919studio.com/wp-content/uploads/ScrollmateMarkdownLogo@2x.png)

# Scrollmate.js
Click an element to slowly scroll to a different section.

![ScrollMate in action](https://www.919studio.com/wp-content/uploads/Scrollmate_Demo-919_Studio-2-.gif)

## Demo
[Scrollmate Demo](https://codepen.io/johnnie123/live/db25630081c5253f9627882ff0fa79b3)

## Setting up Scrollmate
1. Add the class `.ScrollmateTrigger` to the element you want to trigger the scroll animation.
2. Add the class `.ScrollmateTriggerArea` to an element (or area) you want to animate to.
3. Import the [Scrollmate JavaScript](https://github.com/919Studios/Scrollmate/blob/master/scrollmate.js) at the bottom of your web page(s) with this code: `<script src="/path/to/scrollmate.js"></script>`.
4. Add the [Scrollmate CSS](https://github.com/919Studios/Scrollmate/blob/master/scrollmatestyles.css) to your stylesheet with this code: `<link rel="stylesheet" href="/path/to/scrollmatestyles.css">`.

## Options / Adjustments
**Scrollmate Duration:** The time (in milliseconds) it takes to travel from `.ScrollmateTrigger` to `.ScrollmateTriggerArea`.
To adjust this option, open [scrollmate.js](https://github.com/919Studios/Scrollmate/blob/master/scrollmate.js) and adjust the [Scrollmate Duration](https://github.com/919Studios/Scrollmate/blob/master/scrollmate.js#L6).  The Scrollmate demo defaults are `1250` and `500`).

## Coming soon to Scrollmate JS:
- [ ] Data - attributes.
- [ ] Scrollmate usage examples.
- [ ] vanilla javascript version.