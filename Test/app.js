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

selectElm(".image").rainbowImg(".3s");

createElm("img", "body").class("ClassList");

selectElm(".ClassList").src("asd");

selectElm(".ClassList").alt("Billede");
