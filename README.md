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

## Hosting on Github
- Project should have `index.html` file and it should be directly under project root
- Create the repo and push the changes
- Go to repo on Github and click on `Settings` tab
- Under `Github pages` select `Source` as `master` branch then a url gets published something like https://amarnath510.github.io/css-responsive-tutorial/. Open it to view your static page
- Reference: [Static Pages Hosting](https://www.youtube.com/watch?v=xmjXxJww9QU&feature=youtu.be)

## Google Analytics
- [Create Google Analytics Account](https://analytics.google.com/analytics/web/)
- Enter Website name (Some Name)
- Enter Hosted website url (https://amarnath510.github.io/css-responsive-tutorial/)
- Proceed to get the tracking id
- Once you get the tracking id(which is nothing but a JS script) then paste at the end of the HTML file along with other scripts
- Save it and then push the changes
- Once deployed then go to website and check whether the Google Analytics JS is present or not (Right Click --> View Page Source)
- Now go to Google Analytics --> Home --> Check on various tabs to know the stats (Analytics itself is huge check tutorials to track
)
