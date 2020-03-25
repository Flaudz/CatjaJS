# CatjaJS

This is a library that makes it easy to handle javascript

## Getting Started

You will need to link to our Script file in the buttom of your body
 ```html
<script src="https://nico936d.aspitcloud.dk/catjaJS.js"></script>
 ```
## Features

```javascript
selecDom(Element to target);

selecDom("").target().innerHtml = "";

selecDom("").setAttr());

selecDom("").event();

selecDom("").hide();

slideShow("", 2);

lazy("", 200, 300);

chromeCast("", "");
```


## Example Code

##### Save a element

```javascript
const Element = selecDom("h1");
```

##### InnerHTML

```javascript
selecDom("h1").target().innerHTML = "Ohh boy, This a nice h1 text";
```

##### Set a attribute

```javascript
 selecDom("h1").setAttr("class", "Cola");
```

##### How to addEventListener

```javascript
 selecDom("figure").event("click", () => {
	alert("What an easy way to add an event listener");
});
```

##### How to hide a element
```javascript
 selecDom(".hideMe").hide();
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
