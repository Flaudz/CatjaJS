# CatjaJS

This is a library that makes it easy to handle javascript

## Get it in your project

You will need to link to our StyleSheet file in the head section of you html file
```html
 <link rel="stylesheet" href="https://nico936d.aspitcloud.dk/catjaJS.css" />
```
You will need to link to our Script file in the buttom of your body
 ```html
 <script src="https://nico936d.aspitcloud.dk/catjaJS.js"></script>
 ```
## Features

```javascript
selectElm(Element to target);

selectElm("").target().innerHtml = "";

selectElm("").setAttr());

selectElm("").event();

selectElm("").hide();

selectElm("").rainbowImg("");

slideShow("", 2);

lazy("", 200, 300);

chromeCast("", "");
```


## Example Code

##### Save a element

```javascript
const Element = selectElm("h1");
```

##### InnerHTML

```javascript
selectElm("h1").target().innerHTML = "Ohh boy, This a nice h1 text";
```

##### Set a attribute

```javascript
 selectElm("h1").setAttr("class", "Cola");
```

##### How to addEventListener

```javascript
 selectElm("figure").event("click", () => {
	alert("What an easy way to add an event listener");
});
```

##### How to hide a element
```javascript
 selectElm(".hideMe").hide();
```

##### How to add a rainbow effect on your image
```javascript
 selectElm(".image").rainbowImg("2s");
```

##### How to add a slideshow
###### You have to target your images parent/container
```javascript
 slideShow(".slideshow", 1);
```

##### How to add lazyloading to you images
###### Insted of the src attribute use the data-src attribute in the html
```javascript
 lazy("img", 200, 300);
```

##### ChromeCast
```javascript
 chromeCast("Video.mp4", ".castBtn");
```


# Code example

## HTML
 ```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="https://nico936d.aspitcloud.dk/catjaJS.css" />
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="CatjaJS" />
		<title>CatjaJS</title>
	</head>
	<body>
		<h1>CatjaJS</h1>
		<h3>SlideShow</h3>
		<figure class="slider">
			<img src="https://picsum.photos/200/300?random=1" />
			<img src="https://picsum.photos/200/300?random=2" />
			<img src="https://picsum.photos/200/300?random=3" />
			<img src="https://picsum.photos/200/300?random=4" />
			<img src="https://picsum.photos/200/300?random=5" />
		</figure>
		<div class="lazyloading">
			<img data-src="https://picsum.photos/500?random=1" />
			<img data-src="https://picsum.photos/500?random=2" />
			<img data-src="https://picsum.photos/500?random=3" />
			<img data-src="https://picsum.photos/500?random=4" />
			<img data-src="https://picsum.photos/500?random=5" />
			<img data-src="https://picsum.photos/500?random=6" />
			<img data-src="https://picsum.photos/500?random=7" />
			<img data-src="https://picsum.photos/500?random=8" />
			<img data-src="https://picsum.photos/500?random=9" />
			<img data-src="https://picsum.photos/500?random=10" />
			<img data-src="https://picsum.photos/500?random=11" />
			<img data-src="https://picsum.photos/500?random=12" />
			<img data-src="https://picsum.photos/500?random=13" />
			<img data-src="https://picsum.photos/500?random=14" />
			<img class="image" data-src="https://picsum.photos/600?random=15" />
		</div>
		<button class="castBtn">Cast video</button>
		<script src="https://nico936d.aspitcloud.dk/catjaJS.js"></script>
		<script src="app.js"></script>
	</body>
</html>
 ```
 
## CSS
```html
<style>
body {
	text-align: center;
}

figure img {
	width: 8em;
	height: 12em;
	transition: width 2s, height 2s, transform 2s;
}

figure {
	margin: 2% auto;
}

.lazyloading img {
	width: 25%;
	height: 25%;
}

@keyframes color-rotate {
	from {
		filter: hue-rotate(0deg);
	}
	to {
		filter: hue-rotate(360deg);
	}
}

</style>
```
# JavaScript
```javascript
selectElm("h1").target().innerHTML = "Ohh boy, This a nice h1 text";

selectElm("h1").setAttr("class", "Cola");

selectElm("figure").event("click", (e) => {
	alert("asd");
});

slideShow("figure", 5);

lazy(".lazyloading img");

chromeCast(
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	".castBtn"
);

selectElm(".image").rainbowImg("2s");

```
