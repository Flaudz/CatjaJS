# CatjaJS

Hello there, my name is Casper👋
and i am the developer behind CatjaJS.

I have been working on this project since 25-03-2020⌚

## What will be easier to work with in CatjaJS?

### Feauters that will be easier to add to your project
- You can add a slideshow in your project with one line of javascript.

- You can also add lazyloading to your slideshow with one line of javascript.

- And you can also add a chromecast feauter with one line of javascript.

### Effects you can add to your project with CatjaJS
- You can add a hover rainbow effect on your picturs with one line of javascript.

- You can add a popup effect on images and text with one line of javascript.

- You can also add a type effect to your text with one line of javascript.

## What did i mean?
If you notice in every line above this text has the same ending (with one line of javascript)
And that is becurse what we want with this library is that it is easier
to add effect and feauters with only one line of javascript.
That is our goal😉

## Get it in your project

You will need to link to our StyleSheet file in the head section of you html file
```html
 <link rel="stylesheet" href="https://nico936d.aspitcloud.dk/catjaJS.css" />
```
You will need to link to our Script file in the bottom of your body
 ```html
 <script src="https://nico936d.aspitcloud.dk/catjaJS.js"></script>
 ```
## Features

```javascript
createElm("", "");

createElm("", "").class("");

selectElm(Element to target);

selectElm("").hide();

selectElm("").rainbowImg("");

selectElm("").typeEffect(1, "");

selectElm("").popup(1);

slideShow("", 2);

lazy("", 200, 300);

chromeCast("", "");
```


## Example Code

##### Create a element

```javascript
createElm("div", "body");
```

##### Create a element with a class

```javascript
createElm("div", "body").class("className");
```

##### Select a element

```javascript
selectElm("h1");
```

##### Set the text

```javascript
selectElm("h1").text("Ohh boy, This a nice h1 text");
```

##### Set a attribute

```javascript
selectElm("h1").setAttr("class", "Cola");
```

##### Set alt text

```javascript
selectElm("img").alt("Picture");
```

##### Set src

```javascript
selectElm("img").src("linkToPicture");
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

##### How to add a typeEffect to your text
```javascript
selectElm("").typeEffect(1, "Text");
```

##### How to make elements have a popup effect
```javascript
selectElm("").popup(1.2);
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
		<div class="pictureContainer">
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
	.show {
		display: block;
		animation: slideShow 2s;
		opacity: 0;
	}

	.popup {
		opacity: 0;
		transform: translateY(20px);
		transition: 0.8s all ease-in-out;
	}

	.popup-appear {
		opacity: 1;
		transform: translateY(0px);
	}

	@keyframes color-rotate {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}

	@keyframes slideShow {
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
}
</style>
```
# JavaScript
```javascript
selectElm("h1").text("Ohh boy, This a nice h1 text");

selectElm("h1").setAttr("class", "Cola");

selectElm("figure").event("click", (e) => {
	alert("Event");
});

slideShow("figure", 2);

lazy(".pictureContainer img");

chromeCast(
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
	".castBtn"
);

selectElm(".image").rainbowImg(".5s");

createElm("img", "body").class("image");

selectElm(".image").src("https://picsum.photos/500?random=1");

selectElm(".image").alt("Picture");

selectElm(".WTF").typeEffect(1, "Type Effect");

selectElm(".image").popup(1.2);

```
