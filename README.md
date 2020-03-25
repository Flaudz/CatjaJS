# CatjaJS

This is a library that makes it easy to handle javascript

## Getting Started

You will need to link to our Script file:
 ```html
<script src="https://nico936d.aspitcloud.dk/catjaJS.js"></script>
 ```
 
 
## Features

#### How to select an element from html
```javascript
selecDom("h1").target().innerHTML = "asdasd";

selecDom("h1").setAttr("class", "Cola");

selecDom("figure").event("click", (e) => {
	alert("asd");
});

slideShow("figure", 2);

lazy(".lazyloading img", 200, 300);

chromeCast(
	"https://firebasestorage.googleapis.com/v0/b/metnix-62704.appspot.com/o/Iron_Man.mp4?alt=media&token=0b6aed7e-bc35-4dc8-a5ed-1342ccebfb2c",
	".castBtn"
);
```
