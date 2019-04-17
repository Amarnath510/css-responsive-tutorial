### Important CSS Tricks

## Setup
- Create resources and vendor directory structure

## Reset CSS
- Reset the CSS using [normalize.css](https://necolas.github.io/normalize.css/)
- Download it, save it to vendor directory and link it to HTML

## Responsive Web Design
- Fluid Grid: All layout elements are sized in relative units like percentages, ems, rems instead of absolute units like pixels
- Flexible Images: are also sized in relative units
- Media queries: Different CSS rules for different browser widths
- NOTE: Always use grid to build anything so that we can scale it and fit it for different systems
- Use [Responsive Grid](http://www.responsivegridsystem.com/) in this case. It is easy to setup, not complex grid system and easy to customize. See grid examples in the link so effective use it.

## How to use responsive grid?
- If you want 4 columns then say that it is a column with a span of depending on the number of columns.
	Let's say we want 4 columns so each column occupies has same span
	```
	<section class="row">
		<div class="col span-1-of-4">Col-1</div>
		<div class="col span-1-of-4">Col-2</div>
		<div class="col span-1-of-4">Col-3</div>
		<div class="col span-1-of-4">Col-4</div>
	</section>
	```
- Similarly if we want 3 columns but 1 column should have 2/3 width then?
	```
	<section>
		<div class="col span-2-of-3">Col-1</div>
		<div class="col span-1-of-3">Col-2</div>
		<div class="col span-1-of-3">Col-3</div>
	</section>
	```

## jQuery Plugins
- https://dimsemenov.com/plugins/magnific-popup/
	http://iamceege.github.io/tooltipster/
	http://www.thepetedesign.com/demos/onepage_scroll_demo.html
	http://imakewebthings.com/waypoints/ -- To trigger a function when we scroll
	or 
	you can search for "Awesome jQuery plugins for css" and try

## Optimizing Images (NOTE: Make sure you do it for all images, its really important for performance)
- [Optimizilla](https://imagecompressor.com/) is used to compress huge image online
- Alternatively you can also use Mac-Preview app. Right Click on Image --> Open --> Show Marker Toolbar --> Adjust Size --> Give width as 750 pixels (ignore height it will implicitly set that value)

## Optimizing CSS and JS (NOTE: Do it only in Prod)
- CSS Minifier - https://css-minifier.com/
- JS Minifier - https://javascript-minifier.com/

## SEO (Search Engine Optimization)
- How to make your website available for SEO .. refer https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2620104?start=1


## Typography [choosing-font-udemy](https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2551696?start=0)
- Font-Size:
	* Content(parapgraphs) font-size should always be between 15 and 25 px
	* Headlines(main headings): min 60px (you can increase it depending on your taste)
	* Titles (side headings, sub-titles): 32px
- Line spacing(vertical distance between lines) between 120% to 150% of the your font-size
- Number of characters per line: 45 to 90 chars
- Font-Style: 
	* Use only one typeface(sans | sans-serif)
	* Best Sans-serif fonts are,
		* Opens sans
		* Lato
		* Raleway
		* Monsterrat
		* PT Sans

## Colors [choosing-color-udemy](https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2551698?start=0)
- For choosing base colors use [Flat UI Colors](https://flatuicolors.com/)
- Once the base color is fixed then create lighter versions of that color for color paletter. Use [0 to 255](https://www.0to255.com) and give base color as input
- Never choose black, avoid it whenever possible
- Choosing base color(don't limit to these)
	* Red, Orange, Yellow, Green, Blue, Purple, Pink, Brown


## Images [choosing-images-font-udemy](https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/t/lecture/2551700?start=0)
- Put text directly over the image but make sure the image is dark and the text is white
