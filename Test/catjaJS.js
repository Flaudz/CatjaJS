const createElm = (element, parent) => {
	const Element = document.createElement(element);
	const className = {
		class: (className) => {
			Element.classList.add(className);
		}
	};
	document.querySelector(parent).appendChild(Element);
	return className;
};

const selectElm = (selector) => {
	const self = {
		element: document.querySelector(selector),
		target: () => self.element,
		event: (event, callback) => {
			self.element.addEventListener(event, callback);
		},
		append: (element) => {
			self.element.appendChild(element);
		},
		setAttr: (attr, value) => {
			self.element.setAttribute(attr, value);
		},
		hide: () => {
			self.element.style.display = "none";
		},
		alt: (altText) => {
			self.element.alt = altText;
		},
		src: (srcText) => {
			self.element.src = srcText;
		},
		text: (text) => {
			self.element.innerText = text;
		},
		rainbowImg: (time) => {
			self.element.addEventListener("mouseover", () => {
				self.element.classList.toggle("hoverMe");
				const picture = document.querySelector(".hoverMe");
				picture.style.animation = `color-rotate ${time}`;
				picture.style.animationIterationCount = `infinite`;
				picture.style.animationDirection = `alternate`;
			});
			self.element.addEventListener("mouseout", () => {
				const picture = document.querySelector(".hoverMe");
				picture.style.animation = ``;
				self.element.classList.toggle("hoverMe");
			});
		}
	};
	return self;
};

const chromeCast = (src, castBtn) => {
	const script = document.createElement("script");
	script.src =
		"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
	document.body.appendChild(script);

	var session = null;

	window.onload = function() {
		const loadCastInterval = this.setInterval(function() {
			if (chrome.cast.isAvailable) {
				clearInterval(loadCastInterval);
				initializeCastApi();
			} else {
			}
		}, 1000);
	};

	function initializeCastApi() {
		const applicationID = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
		const sessionRequest = new chrome.cast.SessionRequest(applicationID);
		const apiConfig = new chrome.cast.ApiConfig(
			sessionRequest,
			sessionListener,
			receiverListener
		);
		chrome.cast.initialize(apiConfig, onInitSuccess, onInitError);
	}

	function sessionListener(e) {
		session = e;
		if (session.media.length != 0) {
		}
	}

	function receiverListener(e) {
		if (e === "available") {
		} else {
		}
	}

	function onInitSuccess() {}
	function onInitError() {}

	document.querySelector(castBtn).addEventListener("click", (e) => {
		e.preventDefault();
		launchApp();
	});

	function launchApp() {
		chrome.cast.requestSession(onRequestSessionSuccess, onLaunchError);
	}

	function onRequestSessionSuccess(e) {
		session = e;
	}

	function onLaunchError() {}

	function onRequestSessionSuccess(e) {
		session = e;
		loadMedia();
	}

	function loadMedia() {
		if (!session) {
			return;
		}

		const mediaInfo = new chrome.cast.media.MediaInfo(src);
		mediaInfo.contentType = "video/mp4";

		const request = new chrome.cast.media.LoadRequest(mediaInfo);
		request.autoplay = true;

		session.loadMedia(request, onLoadSuccess, onLoadError);
	}

	function onLoadSuccess() {}

	function onLoadError(err) {}

	function stopApp() {
		const status = chrome.cast.requestSession.STOPPED;
		session.stop(onRequestSessionSuccess, onLaunchError);
	}
};

const lazy = (selector) => {
	const images = document.querySelectorAll(selector);
	images.forEach((img) => {
		img.setAttribute("loading", "lazy");
		img.classList.add("lazyload");
	});
	if ("loading" in HTMLImageElement.prototype) {
		images.forEach((img) => {
			img.src = img.dataset.src;
			img.removeAttribute("data-src");
		});
	} else {
		const script = document.createElement("script");
		script.src =
			"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
		document.body.appendChild(script);
	}
};

const slideShow = (selector, seconds) => {
	const time = seconds * 1000;
	const images = document.querySelectorAll(`${selector} img`);
	const element = document.querySelector(selector);
	images.forEach((img) => {
		element.style.width = `${img.width}px`;
		element.style.height = `${img.height}px`;
		img.style.position = "absolute";
		img.style.display = "none";
	});
	images[0].style.display = "block";
	let counter = 0;
	const slide = () => {
		if (counter == images.length) {
			counter = 0;
			images[images.length - 1].style.display = "none";
			images[counter].style.display = "block";
		}
		if (counter > 0) {
			images[counter - 1].style.display = "none";
			images[counter].style.display = "block";
		}
		counter++;
		setTimeout(slide, time);
	};
	slide();
};
